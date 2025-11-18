# AdScale Email Setup Instructions

## Welcome Email Automation

AdScale automatically sends welcome emails to users who join the waitlist. The email includes:
- Welcome message with founder introduction
- 14-day free trial details
- List of key features (AI reports, integrations, WhatsApp alerts, white-label portal)
- Founding member offer (50% lifetime discount)
- Contact information (email & WhatsApp)

## Email Configuration

### Option 1: Using Resend (Recommended for Production)

1. **Sign up for Resend**
   - Go to [resend.com](https://resend.com)
   - Create a free account (allows 100 emails/day)
   - Verify your email address

2. **Get API Key**
   - Navigate to API Keys section
   - Create a new API key
   - Copy the key (starts with `re_...`)

3. **Add Domain (Optional but Recommended)**
   - Go to Domains section
   - Add your domain (e.g., `adscale.app`)
   - Add the required DNS records (MX, TXT, CNAME)
   - Wait for verification (usually takes 5-30 minutes)

4. **Update Environment Variables**
   ```bash
   # Add to .env.local
   RESEND_API_KEY=re_your_api_key_here
   ```

5. **Update Sender Email**
   - Open `lib/email.ts`
   - Change line 218 from:
     ```typescript
     from: 'AdScale <onboarding@adscale.app>',
     ```
     To your verified domain:
     ```typescript
     from: 'AdScale <onboarding@yourdomain.com>',
     ```

### Option 2: Development Mode (No API Key Required)

If `RESEND_API_KEY` is not set, emails are logged to the console instead of being sent. This is useful for development and testing.

**How it works:**
- User submits waitlist form
- Email content is logged to terminal/console
- User still sees success message
- You can see the full email content in your terminal

## Testing the Email System

### 1. Test in Development Mode

1. Make sure `RESEND_API_KEY` is NOT set in `.env.local`
2. Run the dev server:
   ```bash
   pnpm dev
   ```
3. Fill out the waitlist form on `http://localhost:3000`
4. Check your terminal - you'll see the email content printed

### 2. Test with Real Email (Resend)

1. Set up Resend API key as described above
2. Submit the form with your own email
3. Check your inbox for the welcome email
4. Verify all links and formatting work correctly

## Email Template Customization

To modify the email content, edit `lib/email.ts`:

- **HTML Version**: `getWelcomeEmailHTML()` function
- **Plain Text Version**: `getWelcomeEmailText()` function

Both versions should contain the same information for consistency.

## Troubleshooting

### Emails Not Sending

1. **Check API Key**
   ```bash
   # Verify in .env.local
   echo $RESEND_API_KEY
   ```

2. **Check Logs**
   - Look for error messages in terminal
   - Common issues:
     - Invalid API key format
     - Unverified sender domain
     - Rate limit exceeded (100/day on free tier)

3. **Verify Sender Domain**
   - Resend requires verified domains for production
   - Use `onboarding@resend.dev` for testing (provided by Resend)

### Email Goes to Spam

- Make sure your domain has proper SPF/DKIM records (added via Resend)
- Avoid spammy words in subject/content
- Send from a professional domain (not Gmail/Yahoo)

### Rate Limits

**Resend Free Tier:**
- 100 emails per day
- 3,000 emails per month

**If you exceed limits:**
- Upgrade to Resend Pro ($20/month for 50k emails)
- Or use alternative services (SendGrid, Mailgun, AWS SES)

## Alternative Email Services

The code can be adapted for other providers:

### SendGrid
```typescript
// In lib/email.ts, replace Resend API call with:
await fetch('https://api.sendgrid.com/v3/mail/send', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    personalizations: [{ to: [{ email: data.email }] }],
    from: { email: 'onboarding@yourdomain.com', name: 'AdScale' },
    subject: 'Welcome to AdScale - Your 14-Day Trial Awaits!',
    content: [
      { type: 'text/html', value: getWelcomeEmailHTML(data) },
      { type: 'text/plain', value: getWelcomeEmailText(data) }
    ]
  })
})
```

### Mailgun
```typescript
// Similar pattern, use Mailgun API endpoint
// https://api.mailgun.net/v3/YOUR_DOMAIN/messages
```

## Monitoring Email Delivery

Resend Dashboard provides:
- Delivery status for each email
- Bounce rates
- Open rates (if tracking enabled)
- Error logs

## Production Checklist

Before going live:

- [ ] Resend API key configured
- [ ] Custom domain verified
- [ ] Sender email updated in code
- [ ] Test email sent and received successfully
- [ ] Email displays correctly on mobile
- [ ] All links in email work correctly
- [ ] Unsubscribe link added (if required for marketing emails)
- [ ] Monitor for first few signups

## Questions?

Contact: snrautomations3@gmail.com
