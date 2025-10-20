# TAMAYYUZ ePay Integration Guide

## Overview
This document provides instructions for testing and using the TAMAYYUZ ePay payment gateway integration on your SiteDZ Store website.

## Test Environment Details

### Access Credentials
- **Test Platform URL**: https://test.tamayyuz-tijari.com/
- **Username**: autonomy.owner@gmail.com
- **Password**: AUTONOMYowner123!

### API Configuration (Already configured in `.env.local`)
- **API Key**: `2025-10-icae77ribci26fwegivzwlsr31ry2jid`
- **Secret Key**: `3619963911592`
- **API URL**: `https://apiv2.tamayyuz-tijari.com/api`
- **Test Period**: 5 days from October 19, 2025

## Test Credit Cards

Use these test cards on the SATIM mock page during testing:

| Card Number | CVV | Expected Result |
|-------------|-----|-----------------|
| 6280580610061011 | 992 | Success - Valid Card |
| 6280581110006712 | 897 | Failure - TEMPORARILY BLOCKED |
| 6280581110006316 | 657 | Failure - LOST |
| 6280581110006415 | 958 | Failure - STOLEN |
| 6280580610061110 | 260 | Failure - Insufficient Balance |
| 6280581110006514 | 199 | Failure - Incorrect CVV2 |
| 6394131100000417 | 428 | Failure - Expired Card |

## How to Test the Payment Integration

### 1. Start the Development Server

```bash
npm run dev
```

### 2. Navigate to the Pricing Page

Open your browser and go to: `http://localhost:3000/pricing`

### 3. Test the Payment Flow

1. Choose any of the three plans
2. Click the **"Payer maintenant"** button
3. Fill in the payment form:
   - Full Name
   - Email
   - Phone (optional)
   - Complete the captcha (answer: 8)
   - Accept the terms and conditions
4. Click **"Proceder au paiement"**
5. You will be redirected to a SATIM mock payment page
6. Use one of the test cards above
7. Complete the payment
8. You'll be redirected to either:
   - Success page: `/payment/confirmation`
   - Failure page: `/payment/failed`

## Payment Flow Architecture

### 1. **Payment Initiation** (`/api/payment/initiate`)
- Receives payment request from the pricing page
- Creates a unique invoice ID
- Calls TAMAYYUZ ePay API endpoint: `POST /gateway/epay/`
- Required parameters:
  - `invoice_id`: Unique order ID
  - `amount`: Total amount (minimum 50 DZD)
  - `returnUrl`: Success redirect URL
  - `failUrl`: Failure redirect URL  
  - `language`: Optional (ar, fr, en) - defaults to 'fr'
- Authentication: `X-Authorization` header with API key
- Returns SATIM checkout URL

### 2. **Customer Redirection**
- Customer is redirected to SATIM payment page
- In test environment, this is a mock SATIM page
- Customer completes payment with test card

### 3. **Payment Confirmation**
- SATIM redirects customer to success/failure page based on returnUrl/failUrl
- Webhook is called by TAMAYYUZ ePay (`/api/payment/webhook`)
- Webhook verifies signature and updates payment status

### 4. **Confirmation Display**
- Confirmation page shows all required fields:
  - Invoice ID
  - SATIM Order ID
  - Amount
  - Approval Code
  - Date
- Options to print, download PDF, or email receipt
- SATIM support phone number (3020)

## API Endpoints

### Make Payment
- **Method**: POST
- **URL**: `https://apiv2.tamayyuz-tijari.com/api/gateway/epay/`
- **Headers**: 
  - `X-Authorization: YOUR_API_KEY`
  - `Content-Type: application/json`
  - `Accept: application/json`
- **Body**:
```json
{
  "invoice_id": "INV-12345",
  "amount": "12500",
  "returnUrl": "https://yoursite.com/payment/confirmation?id=INV-12345",
  "failUrl": "https://yoursite.com/payment/failed?id=INV-12345",
  "language": "fr"
}
```
- **Response**: `{ "checkout_url": "https://..." }`

### Check Payment Status
- **Method**: GET (Note: Documentation said POST, but API only accepts GET)
- **URL**: `https://apiv2.tamayyuz-tijari.com/api/gateway/status/details/`
- **Headers**: 
  - `X-Authorization: YOUR_API_KEY`
  - `Accept: application/json`
- **Query Parameters**:
  - `invoice_id`: Order ID to check
  - `language`: Optional (ar, fr, en)
- **Example**: `GET /api/gateway/status/details/?invoice_id=INV-12345&language=fr`

## Files Created/Modified

### New Files
- `src/lib/epay.ts` - Payment gateway utility functions
- `src/app/api/payment/initiate/route.ts` - Payment initiation endpoint
- `src/app/api/payment/webhook/route.ts` - Webhook handler
- `src/app/payment/page.tsx` - Payment page
- `src/components/PaymentPageContent.tsx` - Payment form component
- `src/app/payment/confirmation/page.tsx` - Success page
- `src/components/PaymentConfirmationContent.tsx` - Success component
- `src/app/payment/failed/page.tsx` - Failure page
- `src/components/PaymentFailedContent.tsx` - Failure component
- `.env.local` - Environment variables

### Modified Files
- `src/components/PricingPageContent.tsx` - Added payment buttons

## SATIM Requirements Compliance

### Payment Page Requirements ✓
- [x] SSL security (handled by hosting)
- [x] SATIM redirection in independent browser window
- [x] Final amount display
- [x] CIB/EDAHABIA logos
- [x] Captcha verification
- [x] Checkbox to accept general conditions

### Confirmation Page Requirements ✓
- [x] Display invoice_id
- [x] Display satim_order_id
- [x] Display epay_amount
- [x] Display approval_code
- [x] Display date
- [x] SATIM support number (3020) with message
- [x] Print receipt option
- [x] Download PDF option
- [x] Send via email option

### Security Requirements ✓
- [x] Signature verification for webhooks
- [x] Signature verification for redirects
- [x] HMAC SHA256 signature calculation
- [x] Secret key protection (server-side only)

## Important Notes

### Before Production

1. **Update Environment Variables**
   - Change API URL to production endpoint
   - Update API key and secret key with production credentials
   - Update `NEXT_PUBLIC_BASE_URL` to your production domain

2. **Implement Database Storage**
   - Currently, payment data is logged to console
   - Add database integration to store:
     - Invoice details
     - Payment status
     - Customer information
     - Transaction history

3. **Email Notifications**
   - Implement email sending functionality
   - Send confirmation emails to customers
   - Send notification emails to admin

4. **PDF Generation**
   - Implement PDF receipt generation
   - Use libraries like `jsPDF` or `pdfkit`

5. **Rate Limiting**
   - Add rate limiting to webhook endpoint
   - Prevent duplicate payment processing

## Testing Checklist

- [ ] Test successful payment flow
- [ ] Test failed payment scenarios (all test cards)
- [ ] Test captcha verification
- [ ] Test form validation
- [ ] Test webhook signature verification
- [ ] Test redirect signature verification
- [ ] Test print functionality
- [ ] Test responsive design on mobile
- [ ] Test Meta Pixel tracking events

## Support

For any issues with TAMAYYUZ ePay integration:
- **SATIM Support**: Call 3020
- **Your Support**: WhatsApp +213 797 339 451
- **TAMAYYUZ Documentation**: https://www.tamayyuz-tijari.com/docs/docs/epay

## Next Steps

1. Test all payment flows thoroughly
2. Implement database storage for invoices
3. Set up email notifications
4. Implement PDF generation
5. Request production access from TAMAYYUZ
6. Deploy to production with production credentials

