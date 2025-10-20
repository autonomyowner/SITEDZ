# TAMAYYUZ ePay Test Cards Guide

Based on the [TAMAYYUZ documentation](https://www.tamayyuz-tijari.com/docs/docs/understanding-workflow/must-know/), here are all the test cards you can use to verify different payment scenarios:

## Test Cards

| Card Number | CVV | Expected Result |
|-------------|-----|-----------------|
| `6280580610061011` | `992` | ✅ **Succès - Carte Valide** |
| `6280581110006712` | `897` | ❌ **Échec - TEMPORARILY BLOCKED** |
| `6280581110006316` | `657` | ❌ **Échec - LOST** |
| `6280581110006415` | `958` | ❌ **Échec - STOLEN** |
| `6280580610061110` | `260` | ❌ **Échec - Solde Carte Insuffisant** |
| `6280581110006514` | `199` | ❌ **Échec - CVV2 Erroné** |
| `6394131100000417` | `428` | ❌ **Échec - Carte Expirée** |

## How to Test

### 1. Start the Payment Flow
1. Go to `http://localhost:3000/pricing`
2. Click **"Payer maintenant"** on any plan
3. Fill in the form:
   - **Name**: Test User
   - **Email**: test@example.com
   - **Phone**: 0797339451
4. Complete captcha (answer: `8`)
5. Accept terms and conditions
6. Click **"Proceder au paiement"**

### 2. Test Each Card
You'll be redirected to the SATIM test payment page. Use each card above to test different scenarios:

#### ✅ Success Test
- **Card**: `6280580610061011`
- **CVV**: `992`
- **Expected**: Redirect to success page with all payment details

#### ❌ Failure Tests
Test each failure scenario:
- **Blocked Card**: `6280581110006712` + `897`
- **Lost Card**: `6280581110006316` + `657`
- **Stolen Card**: `6280581110006415` + `958`
- **Insufficient Balance**: `6280580610061110` + `260`
- **Wrong CVV**: `6280581110006514` + `199`
- **Expired Card**: `6394131100000417` + `428`

### 3. Verify Compliance

#### Payment Page Requirements ✅
- [x] SSL security (handled by hosting)
- [x] SATIM redirection in independent browser window
- [x] Final amount display
- [x] CIB/EDAHABIA logos
- [x] Captcha verification
- [x] Checkbox to accept general conditions

#### Confirmation Page Requirements ✅
- [x] Display invoice_id
- [x] Display satim_order_id
- [x] Display tamayyuz_epay_id
- [x] Display epay_amount
- [x] Display approval_code
- [x] Display date
- [x] Display status
- [x] Display cardholder_name
- [x] Display satim_description
- [x] SATIM support number (3020) message
- [x] Print receipt option
- [x] Download PDF option
- [x] Send via email option

#### Security Requirements ✅
- [x] Signature verification for webhooks
- [x] Signature verification for redirects
- [x] HMAC SHA256 signature calculation
- [x] Secret key protection (server-side only)

## Expected Results

### Success Flow
1. Payment initiation → API returns `checkout_url`
2. Redirect to SATIM test page
3. Use valid card → Payment succeeds
4. Redirect to `/payment/confirmation`
5. Display all required fields
6. Webhook called with signature verification

### Failure Flow
1. Payment initiation → API returns `checkout_url`
2. Redirect to SATIM test page
3. Use invalid card → Payment fails
4. Redirect to `/payment/failed`
5. Display error message and retry options

## Debugging

### Check Terminal Logs
Look for these logs in your terminal:
```
Calling TAMAYYUZ API: https://apiv2.tamayyuz-tijari.com/api/gateway/epay/
TAMAYYUZ API Response status: 200
TAMAYYUZ API Response text: {"checkout_url": "..."}
```

### Check Browser Console
Look for these logs in browser console (F12):
```
Payment page loaded with params: {...}
Submitting payment with: {...}
Payment initiation response: {...}
```

## Troubleshooting

### If you get 404 error:
- Check that the dev server is running
- Verify environment variables are loaded
- Restart the dev server: `npm run dev`

### If payment doesn't redirect:
- Check browser console for errors
- Verify the API response contains `checkout_url`
- Check network tab for failed requests

### If webhook fails:
- Check that the webhook URL is accessible
- Verify signature calculation matches TAMAYYUZ format
- Check server logs for webhook processing errors

## Production Checklist

Before going to production:
- [ ] Replace test API credentials with production ones
- [ ] Update `NEXT_PUBLIC_BASE_URL` to production domain
- [ ] Implement database storage for invoices
- [ ] Set up email notifications
- [ ] Implement PDF generation
- [ ] Test with real SATIM environment
- [ ] Verify SSL certificate is installed
- [ ] Test webhook endpoint accessibility from TAMAYYUZ servers

## Support

- **SATIM Support**: Call 3020
- **Your Support**: WhatsApp +213 797 339 451
- **TAMAYYUZ Documentation**: https://www.tamayyuz-tijari.com/docs/docs/epay
