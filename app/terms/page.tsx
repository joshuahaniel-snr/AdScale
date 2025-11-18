import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-foreground mb-4">Terms of Service</h1>
        <p className="text-sm text-muted-foreground mb-8">Last updated: November 18, 2025</p>

        <div className="prose prose-slate max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground mb-4">
              By accessing and using AdScale, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using this service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Service Description</h2>
            <p className="text-muted-foreground mb-4">
              AdScale is an AI-powered ad analytics platform that provides:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>Automated report generation from advertising platforms</li>
              <li>AI-driven insights and recommendations</li>
              <li>White-label client portals</li>
              <li>Multi-platform campaign analytics</li>
              <li>Real-time alert notifications</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">3. User Accounts</h2>
            <h3 className="text-xl font-semibold text-foreground mb-3">Registration</h3>
            <p className="text-muted-foreground mb-4">
              You must provide accurate, current, and complete information during registration. You are responsible for maintaining the confidentiality of your account credentials.
            </p>
            
            <h3 className="text-xl font-semibold text-foreground mb-3">Account Responsibilities</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>You are responsible for all activities under your account</li>
              <li>Notify us immediately of any unauthorized access</li>
              <li>Do not share your account credentials</li>
              <li>One account per agency/organization</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Subscription Plans & Pricing</h2>
            <h3 className="text-xl font-semibold text-foreground mb-3">Current Plans</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li><strong>FREE:</strong> ₹0/month - 1 account, 2 reports/month</li>
              <li><strong>PRO:</strong> ₹999/month (founding member price) - Up to 5 accounts, unlimited reports</li>
              <li><strong>AGENCY:</strong> ₹2,499/month (founding member price) - Unlimited accounts and reports</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">Payment Terms</h3>
            <p className="text-muted-foreground mb-4">
              - All payments are processed in Indian Rupees (INR)<br/>
              - Subscriptions renew automatically unless cancelled<br/>
              - Founding member prices are locked in for lifetime<br/>
              - Price changes affect new subscriptions only, not existing founding members<br/>
              - 14-day free trial requires no payment information
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Acceptable Use</h2>
            <h3 className="text-xl font-semibold text-foreground mb-3">You May NOT:</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>Use the service for illegal purposes</li>
              <li>Attempt to bypass rate limits or access restrictions</li>
              <li>Reverse engineer or copy our software/algorithms</li>
              <li>Resell or redistribute our service without authorization</li>
              <li>Upload malicious code or attempt to compromise security</li>
              <li>Scrape or harvest data from other users</li>
              <li>Violate advertising platform terms of service</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Third-Party Integrations</h2>
            <p className="text-muted-foreground mb-4">
              AdScale integrates with third-party platforms (Meta Ads, Google Ads, LinkedIn, etc.). You grant us permission to access your advertising data solely for providing our services. You remain responsible for compliance with each platform's terms of service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Data Ownership & Usage</h2>
            <p className="text-muted-foreground mb-4">
              - You retain ownership of your advertising data<br/>
              - We may use aggregated, anonymized data for service improvement<br/>
              - Reports generated belong to you and your clients<br/>
              - We do not claim ownership of your creative assets or campaigns
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Service Availability</h2>
            <p className="text-muted-foreground mb-4">
              While we strive for 99.9% uptime, we do not guarantee uninterrupted service. We may perform maintenance with notice. We are not liable for service interruptions caused by third-party platforms or force majeure events.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">9. Cancellation & Termination</h2>
            <h3 className="text-xl font-semibold text-foreground mb-3">Your Rights</h3>
            <p className="text-muted-foreground mb-4">
              You may cancel your subscription anytime. Cancellation takes effect at the end of your current billing period. No refunds for partial months (see Refund Policy for details).
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3">Our Rights</h3>
            <p className="text-muted-foreground mb-4">
              We may suspend or terminate accounts that violate these terms, engage in fraudulent activity, or abuse the service. We will provide notice when possible.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">10. Intellectual Property</h2>
            <p className="text-muted-foreground mb-4">
              All content, features, and functionality of AdScale are owned by SNR AUTOMATIONS and protected by international copyright, trademark, and other intellectual property laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">11. Limitation of Liability</h2>
            <p className="text-muted-foreground mb-4">
              SNR AUTOMATIONS shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of AdScale. Our total liability shall not exceed the amount you paid in the last 12 months.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">12. Warranty Disclaimer</h2>
            <p className="text-muted-foreground mb-4">
              AdScale is provided "as is" without warranties of any kind. We do not guarantee the accuracy of AI-generated insights or recommendations. You are responsible for verifying data and making business decisions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">13. Governing Law</h2>
            <p className="text-muted-foreground mb-4">
              These terms are governed by the laws of India. Any disputes shall be resolved in the courts of Karnataka, India.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">14. Changes to Terms</h2>
            <p className="text-muted-foreground mb-4">
              We may update these terms at any time. We will notify users of material changes via email. Continued use after changes constitutes acceptance.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">15. Contact Information</h2>
            <p className="text-muted-foreground mb-4">
              For questions about these Terms of Service, contact:
            </p>
            <p className="text-muted-foreground mb-2">
              <strong>SNR AUTOMATIONS</strong>
            </p>
            <p className="text-muted-foreground mb-2">
              <strong>Email:</strong> snrautomations3@gmail.com
            </p>
            <p className="text-muted-foreground">
              <strong>WhatsApp:</strong> +91 89460 84672
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  )
}
