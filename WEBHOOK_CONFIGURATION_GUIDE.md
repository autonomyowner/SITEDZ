# Webhook Configuration Guide - SATIM Payment Integration

## Table of Contents
1. [Overview](#overview)
2. [Webhook Endpoint Details](#webhook-endpoint-details)
3. [Configuring Webhook in SATIM Dashboard](#configuring-webhook-in-satim-dashboard)
4. [Webhook Payload Structure](#webhook-payload-structure)
5. [Security Considerations](#security-considerations)
6. [Testing Webhooks](#testing-webhooks)
7. [Troubleshooting](#troubleshooting)

---

## Overview

The webhook endpoint allows TAMAYYUZ ePay/SATIM to notify your application about payment status changes automatically. This is the **recommended** way to handle payment confirmations, as it works even if users close their browser after payment.

**Why use webhooks?**
- ✅ Reliable - Works even if user closes browser
- ✅ Automatic - No manual status checking required
- ✅ Secure - Includes signature verification
- ✅ Real-time - Instant payment status updates

---

## Webhook Endpoint Details

### Endpoint URL
```
Production: https://yourdomain.com/api/payment/webhook
Development: http://localhost:3000/api/payment/webhook
```

### HTTP Method
`POST`

### Headers Required
```
Content-Type: application/json
X-Signature: <HMAC-SHA256 signature>
```

### Response Format
```json
{
  "detail": "Webhook processed successfully"
}
```

---

## Configuring Webhook in SATIM Dashboard

### Step 1: Access TAMAYYUZ ePay Settings
1. Log in to your TAMAYYUZ ePay merchant dashboard
2. Navigate to **Settings** or **API Configuration**
3. Look for **Webhook Configuration** or **Callback URL**

### Step 2: Set Webhook URL
Enter your webhook endpoint URL:
```
https://yourdomain.com/api/payment/webhook
```

⚠️ **Important**: 
- Use HTTPS in production (required by SATIM)
- Ensure your server is publicly accessible
- The webhook URL is set when initiating payment in the `webhook_url` parameter

### Step 3: Test the Connection
Most payment gateways provide a "Test Webhook" button:
1. Click **Test Webhook** or **Send Test Notification**
2. Verify you receive the test payload in your logs
3. Confirm the response is 200 OK

### Step 4: Save Configuration
1. Save the webhook settings
2. Make note of any webhook secret/signing key provided
3. Update your `.env` file with the secret key

---

## Webhook Payload Structure

When a payment status changes, SATIM sends a POST request with the following structure:

```typescript
{
  "invoice_id": number,              // Your invoice ID
  "satim_order_id": string,          // SATIM's transaction ID
  "tamayyuz_epay_id": number,        // TAMAYYUZ ePay ID
  "epay_amount": string,             // Amount paid (e.g., "50000.00")
  "date": string,                    // ISO 8601 date
  "refunded": boolean,               // Whether payment was refunded
  "refund_amount": string | null,    // Refund amount if applicable
  "status": string,                  // Payment status (see below)
  "description": string,             // Payment description
  "cardholder_name": string,         // Customer name
  "satim_description": string,       // SATIM's status description
  "approval_code": number,           // Bank approval code
  "return_url": string,              // Success redirect URL
  "fail_url": string                 // Failure redirect URL
}
```

### Status Codes
- `S` - **Success**: Payment completed successfully
- `F` - **Failed**: Payment failed
- `P` - **Pending**: Payment is being processed
- `U` - **Unknown**: Status cannot be determined

---

## Security Considerations

### 1. Signature Verification

Every webhook request includes an `X-Signature` header for security. Our endpoint automatically verifies this signature.

**How it works:**
```javascript
// Signature calculation
const signature = HMAC-SHA256({
  invoice_id: invoice_id,
  total: epay_amount
}, SECRET_KEY)
```

### 2. Environment Variables

Ensure these are set in your `.env` file:
```bash
# TAMAYYUZ ePay Configuration
NEXT_PUBLIC_EPAY_API_KEY=your_api_key_here
NEXT_PUBLIC_EPAY_API_URL=https://epay.tamayyuz.com/api
EPAY_SECRET_KEY=your_secret_key_here

# Your Application URL
NEXT_PUBLIC_BASE_URL=https://yourdomain.com
```

### 3. HTTPS Required

⚠️ **Production Requirements:**
- Always use HTTPS for webhook endpoints
- SATIM may reject HTTP webhook URLs
- Use a valid SSL certificate

### 4. IP Whitelisting (Optional)

For extra security, whitelist SATIM's server IPs:
- Contact TAMAYYUZ support for their IP ranges
- Configure firewall to only accept webhooks from these IPs

---

## Testing Webhooks

### Local Development Testing

#### Option 1: Using ngrok (Recommended)
```bash
# Install ngrok
npm install -g ngrok

# Start your Next.js app
npm run dev

# In another terminal, expose your local server
ngrok http 3000

# Use the ngrok URL for webhook testing
# Example: https://abc123.ngrok.io/api/payment/webhook
```

#### Option 2: Using localtunnel
```bash
# Install localtunnel
npm install -g localtunnel

# Start your app
npm run dev

# In another terminal
lt --port 3000

# Use the provided URL for webhook testing
```

### Manual Webhook Testing

You can test your webhook endpoint manually using curl:

```bash
curl -X POST https://yourdomain.com/api/payment/webhook \
  -H "Content-Type: application/json" \
  -H "X-Signature: YOUR_CALCULATED_SIGNATURE" \
  -d '{
    "invoice_id": "INV-1234567890",
    "satim_order_id": "SAT-9876543210",
    "tamayyuz_epay_id": 12345,
    "epay_amount": "50000.00",
    "date": "2024-01-15T10:30:00Z",
    "refunded": false,
    "refund_amount": null,
    "status": "S",
    "description": "Payment for Website Package",
    "cardholder_name": "John Doe",
    "satim_description": "Transaction approved",
    "approval_code": 123456,
    "return_url": "https://yourdomain.com/payment/confirmation?id=INV-1234567890",
    "fail_url": "https://yourdomain.com/payment/failed?id=INV-1234567890"
  }'
```

### Monitoring Webhook Logs

Check your server logs for webhook activity:

```bash
# View real-time logs
npm run dev

# Look for these log messages:
# ✅ "Payment webhook received: ..."
# ✅ "Payment successful for invoice ..."
# ✅ "Webhook processed successfully"
```

---

## Troubleshooting

### Issue: Webhook not receiving requests

**Possible causes:**
1. ❌ Webhook URL not configured in SATIM dashboard
2. ❌ Server not publicly accessible
3. ❌ Firewall blocking requests
4. ❌ SSL certificate invalid (production)

**Solutions:**
- Verify webhook URL is correct and publicly accessible
- Test with ngrok in development
- Check server firewall settings
- Ensure valid SSL certificate in production

### Issue: Signature verification failing

**Possible causes:**
1. ❌ Wrong `EPAY_SECRET_KEY` in environment variables
2. ❌ Signature calculation mismatch
3. ❌ Request body modified in transit

**Solutions:**
- Verify `EPAY_SECRET_KEY` matches SATIM dashboard
- Contact TAMAYYUZ support to confirm signature format
- Check for proxy/middleware modifying request body

### Issue: Webhook times out

**Possible causes:**
1. ❌ Server taking too long to process
2. ❌ Database operations blocking response
3. ❌ External API calls delaying response

**Solutions:**
- Process webhook synchronously, queue heavy tasks
- Respond with 200 OK immediately
- Process business logic asynchronously

### Issue: Receiving duplicate webhooks

**Behavior:**
- SATIM may retry webhooks if no 200 OK response received
- Implement idempotency to handle duplicates

**Solution:**
```typescript
// Store processed webhook IDs
const processedWebhooks = new Set<string>()

if (processedWebhooks.has(body.satim_order_id)) {
  console.log('Duplicate webhook, ignoring')
  return NextResponse.json({ detail: 'Already processed' }, { status: 200 })
}

processedWebhooks.add(body.satim_order_id)
// Continue processing...
```

---

## Best Practices

### 1. Always Respond Quickly
```typescript
// ✅ Good - Respond immediately
return NextResponse.json({ detail: 'Received' }, { status: 200 })

// ❌ Bad - Long processing before response
await sendEmail() // This can timeout
return NextResponse.json({ detail: 'Processed' }, { status: 200 })
```

### 2. Queue Heavy Operations
```typescript
// Queue email sending, notifications, etc.
await queue.add('process-payment', {
  invoice_id: body.invoice_id,
  status: body.status
})

// Respond immediately
return NextResponse.json({ detail: 'Queued' }, { status: 200 })
```

### 3. Log Everything
```typescript
console.log('Webhook received:', {
  invoice_id: body.invoice_id,
  status: body.status,
  timestamp: new Date().toISOString()
})
```

### 4. Handle All Status Codes
```typescript
switch (body.status) {
  case 'S': // Success
    await handleSuccess(body)
    break
  case 'F': // Failed
    await handleFailure(body)
    break
  case 'P': // Pending
    await handlePending(body)
    break
  case 'U': // Unknown
    await handleUnknown(body)
    break
  default:
    console.warn('Unknown status:', body.status)
}
```

### 5. Implement Retry Logic
```typescript
// Store webhook data in database
await db.webhooks.create({
  satim_order_id: body.satim_order_id,
  payload: body,
  processed: false,
  received_at: new Date()
})

// Mark as processed after successful handling
await db.webhooks.update({
  where: { satim_order_id: body.satim_order_id },
  data: { processed: true }
})
```

---

## Production Checklist

Before going live, ensure:

- [ ] Webhook URL is set in SATIM dashboard
- [ ] Environment variables are configured correctly
- [ ] HTTPS is enabled with valid SSL certificate
- [ ] Signature verification is working
- [ ] Webhook endpoint is publicly accessible
- [ ] Error handling and logging are in place
- [ ] Database updates are implemented
- [ ] Email notifications are configured
- [ ] Tested with real transactions in test mode
- [ ] Monitoring and alerts are set up

---

## Support

For webhook-related issues:

1. **TAMAYYUZ Support**: Contact TAMAYYUZ ePay support for:
   - Webhook configuration issues
   - Signature verification problems
   - API endpoint questions

2. **Application Logs**: Check your server logs:
   ```bash
   # In development
   npm run dev
   
   # In production
   pm2 logs
   # or
   docker logs <container-name>
   ```

3. **Testing Tools**:
   - [ngrok](https://ngrok.com) - Local webhook testing
   - [webhook.site](https://webhook.site) - Inspect webhook payloads
   - [Postman](https://www.postman.com) - Manual API testing

---

## Summary

The webhook integration ensures reliable payment processing by:
- ✅ Receiving automatic notifications from SATIM
- ✅ Verifying payment authenticity with signatures
- ✅ Processing payments even if users close browser
- ✅ Enabling real-time business logic execution

Make sure to:
1. Configure webhook URL in SATIM dashboard
2. Test thoroughly in development
3. Monitor logs in production
4. Respond quickly to webhook requests
5. Handle all payment statuses

---

**Last Updated**: December 2024  
**Version**: 1.0  
**Contact**: For questions, contact your development team

