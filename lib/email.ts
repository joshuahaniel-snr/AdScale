// Email templates and sending utilities

export interface WelcomeEmailData {
  fullName: string
  email: string
}

export function getWelcomeEmailHTML(data: WelcomeEmailData): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to AdScale</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
          <!-- Header -->
          <tr>
            <td style="padding: 40px 40px 20px; text-align: center; background: linear-gradient(135deg, #0D6EFD 0%, #7C3AED 100%); border-radius: 12px 12px 0 0;">
              <div style="width: 60px; height: 60px; background-color: #ffffff; border-radius: 12px; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 20px;">
                <span style="color: #0D6EFD; font-size: 32px; font-weight: bold;">A</span>
              </div>
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700;">Welcome to AdScale!</h1>
            </td>
          </tr>
          
          <!-- Body -->
          <tr>
            <td style="padding: 40px;">
              <p style="margin: 0 0 20px; font-size: 16px; line-height: 1.6; color: #333333;">
                Hi <strong>${data.fullName}</strong>,
              </p>
              
              <p style="margin: 0 0 20px; font-size: 16px; line-height: 1.6; color: #333333;">
                Thank you for joining the AdScale waitlist! 🎉
              </p>
              
              <p style="margin: 0 0 20px; font-size: 16px; line-height: 1.6; color: #333333;">
                We're excited to have you on board. Here's what you can expect:
              </p>
              
              <div style="background-color: #f8f9fa; border-radius: 8px; padding: 24px; margin: 20px 0;">
                <ul style="margin: 0; padding-left: 20px; color: #333333;">
                  <li style="margin-bottom: 12px; font-size: 15px; line-height: 1.6;">
                    <strong>14-Day Free Trial</strong> - Full access to all features, no credit card required
                  </li>
                  <li style="margin-bottom: 12px; font-size: 15px; line-height: 1.6;">
                    <strong>AI-Generated Reports</strong> - Create professional reports in 60 seconds
                  </li>
                  <li style="margin-bottom: 12px; font-size: 15px; line-height: 1.6;">
                    <strong>Multi-Platform Integration</strong> - Meta Ads, Google Ads, LinkedIn & more
                  </li>
                  <li style="margin-bottom: 12px; font-size: 15px; line-height: 1.6;">
                    <strong>WhatsApp Alerts</strong> - Real-time notifications for campaign performance
                  </li>
                  <li style="margin-bottom: 0; font-size: 15px; line-height: 1.6;">
                    <strong>White-Label Portal</strong> - Give clients 24/7 access with your branding
                  </li>
                </ul>
              </div>
              
              <div style="background: linear-gradient(135deg, #FFF5E6 0%, #FFE6F0 100%); border-left: 4px solid #0D6EFD; border-radius: 8px; padding: 20px; margin: 24px 0;">
                <p style="margin: 0; font-size: 15px; line-height: 1.6; color: #333333;">
                  <strong>🔥 Founding Member Offer:</strong> Be among the first 50 agencies and get <strong>lifetime 50% off</strong> on PRO and AGENCY plans!
                </p>
              </div>
              
              <p style="margin: 24px 0 20px; font-size: 16px; line-height: 1.6; color: #333333;">
                We'll notify you as soon as your account is ready. In the meantime, feel free to reach out if you have any questions:
              </p>
              
              <div style="margin: 24px 0;">
                <p style="margin: 0 0 8px; font-size: 15px; color: #666666;">
                  📧 Email: <a href="mailto:snrautomations3@gmail.com" style="color: #0D6EFD; text-decoration: none;">snrautomations3@gmail.com</a>
                </p>
                <p style="margin: 0; font-size: 15px; color: #666666;">
                  📱 WhatsApp: <a href="https://wa.me/918946084672" style="color: #25D366; text-decoration: none;">+91 89460 84672</a>
                </p>
              </div>
              
              <p style="margin: 24px 0 0; font-size: 16px; line-height: 1.6; color: #333333;">
                Looking forward to helping you automate your ad reporting!
              </p>
              
              <p style="margin: 12px 0 0; font-size: 16px; line-height: 1.6; color: #333333;">
                <strong>Rathnadevi S N</strong><br>
                <span style="color: #666666; font-size: 14px;">Founder & CEO, SNR AUTOMATIONS</span>
              </p>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="padding: 30px 40px; background-color: #f8f9fa; border-radius: 0 0 12px 12px; text-align: center;">
              <p style="margin: 0 0 8px; font-size: 14px; color: #666666;">
                Built by <strong style="color: #0D6EFD;">SNR AUTOMATIONS</strong>
              </p>
              <p style="margin: 0; font-size: 12px; color: #999999;">
                © 2025 SNR AUTOMATIONS. All rights reserved.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim()
}

export function getWelcomeEmailText(data: WelcomeEmailData): string {
  return `
Welcome to AdScale!

Hi ${data.fullName},

Thank you for joining the AdScale waitlist! 🎉

We're excited to have you on board. Here's what you can expect:

• 14-Day Free Trial - Full access to all features, no credit card required
• AI-Generated Reports - Create professional reports in 60 seconds
• Multi-Platform Integration - Meta Ads, Google Ads, LinkedIn & more
• WhatsApp Alerts - Real-time notifications for campaign performance
• White-Label Portal - Give clients 24/7 access with your branding

🔥 FOUNDING MEMBER OFFER: Be among the first 50 agencies and get lifetime 50% off on PRO and AGENCY plans!

We'll notify you as soon as your account is ready. In the meantime, feel free to reach out if you have any questions:

📧 Email: snrautomations3@gmail.com
📱 WhatsApp: +91 89460 84672

Looking forward to helping you automate your ad reporting!

Rathnadevi S N
Founder & CEO, SNR AUTOMATIONS

---
Built by SNR AUTOMATIONS
© 2025 SNR AUTOMATIONS. All rights reserved.
  `.trim()
}

// Send email using Resend API (or fallback to console log in development)
export async function sendWelcomeEmail(data: WelcomeEmailData): Promise<boolean> {
  const resendApiKey = process.env.RESEND_API_KEY
  
  // If no API key, log to console (development mode)
  if (!resendApiKey) {
    console.log('📧 WELCOME EMAIL (No Resend API key configured):')
    console.log('To:', data.email)
    console.log('Subject: Welcome to AdScale - Your 14-Day Trial Awaits!')
    console.log('\n--- EMAIL CONTENT ---')
    console.log(getWelcomeEmailText(data))
    console.log('--- END EMAIL ---\n')
    return true
  }

  // Send via Resend API
  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'AdScale <onboarding@adscale.app>', // Change this to your verified domain
        to: [data.email],
        subject: 'Welcome to AdScale - Your 14-Day Trial Awaits!',
        html: getWelcomeEmailHTML(data),
        text: getWelcomeEmailText(data)
      })
    })

    if (!response.ok) {
      console.error('Failed to send email via Resend:', await response.text())
      return false
    }

    const result = await response.json()
    console.log('✅ Welcome email sent successfully:', result.id)
    return true
  } catch (error) {
    console.error('Error sending email:', error)
    return false
  }
}
