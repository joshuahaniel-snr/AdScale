import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-foreground mb-4">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-8">Last updated: November 18, 2025</p>

        <div className="prose prose-slate max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
            <p className="text-muted-foreground mb-4">
              SNR AUTOMATIONS ("we," "our," or "us") operates AdScale. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Information We Collect</h2>
            <h3 className="text-xl font-semibold text-foreground mb-3">Personal Information</h3>
            <p className="text-muted-foreground mb-4">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>Name and contact information (email, phone number)</li>
              <li>Company information</li>
              <li>Payment and billing information</li>
              <li>Account credentials</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">Ad Platform Data</h3>
            <p className="text-muted-foreground mb-4">
              When you connect your advertising accounts (Meta Ads, Google Ads, LinkedIn), we access:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>Campaign performance metrics</li>
              <li>Ad spend and budget data</li>
              <li>Audience insights (aggregated, non-personal)</li>
              <li>Creative performance data</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">3. How We Use Your Information</h2>
            <p className="text-muted-foreground mb-4">We use collected information to:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>Provide and maintain AdScale services</li>
              <li>Generate AI-powered reports and analytics</li>
              <li>Send WhatsApp/Slack notifications as configured</li>
              <li>Process payments and manage subscriptions</li>
              <li>Provide customer support</li>
              <li>Improve our services and develop new features</li>
              <li>Send administrative and promotional communications</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Data Sharing and Disclosure</h2>
            <p className="text-muted-foreground mb-4">
              We do not sell your personal information. We may share data with:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li><strong>Service Providers:</strong> Cloud hosting (Supabase), payment processors, email services</li>
              <li><strong>Ad Platforms:</strong> Only to access data you've authorized (Meta, Google, LinkedIn)</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Data Security</h2>
            <p className="text-muted-foreground mb-4">
              We implement industry-standard security measures including:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>Encryption in transit (TLS/SSL) and at rest</li>
              <li>Secure authentication and access controls</li>
              <li>Regular security audits and monitoring</li>
              <li>OAuth 2.0 for third-party integrations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Your Rights</h2>
            <p className="text-muted-foreground mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Export your data</li>
              <li>Opt-out of marketing communications</li>
              <li>Revoke third-party integrations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Data Retention</h2>
            <p className="text-muted-foreground mb-4">
              We retain your data based on your plan:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li><strong>FREE Plan:</strong> 7 days</li>
              <li><strong>PRO Plan:</strong> 90 days</li>
              <li><strong>AGENCY Plan:</strong> Unlimited</li>
            </ul>
            <p className="text-muted-foreground mb-4">
              Account data is retained for 30 days after cancellation, then permanently deleted.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">8. International Data Transfers</h2>
            <p className="text-muted-foreground mb-4">
              Your data may be processed in servers located outside India. We ensure appropriate safeguards are in place for international transfers.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">9. Contact Us</h2>
            <p className="text-muted-foreground mb-4">
              For privacy concerns or data requests, contact us at:
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
