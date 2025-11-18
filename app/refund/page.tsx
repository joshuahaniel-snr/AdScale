import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default function RefundPolicy() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-foreground mb-4">Refund Policy</h1>
        <p className="text-sm text-muted-foreground mb-8">Last updated: November 18, 2025</p>

        <div className="prose prose-slate max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">1. 14-Day Money-Back Guarantee</h2>
            <p className="text-muted-foreground mb-4">
              We stand behind AdScale. If you're not satisfied with our service within the first 14 days of your paid subscription, we'll provide a full refund—no questions asked.
            </p>
            
            <h3 className="text-xl font-semibold text-foreground mb-3">Eligibility</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>Applies to PRO and AGENCY plans only</li>
              <li>Must request refund within 14 days of initial payment</li>
              <li>One refund per customer/organization</li>
              <li>Refund request must be submitted via email</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">How to Request</h3>
            <p className="text-muted-foreground mb-4">
              Email us at <strong>snrautomations3@gmail.com</strong> with:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>Your account email</li>
              <li>Brief reason for refund (optional, helps us improve)</li>
              <li>Payment confirmation/transaction ID</li>
            </ul>
            <p className="text-muted-foreground mb-4">
              Refunds are processed within 5-7 business days to your original payment method.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Free Trial</h2>
            <p className="text-muted-foreground mb-4">
              All paid plans include a 14-day free trial. No credit card required during the trial period. You will not be charged unless you choose to continue after the trial ends.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Subscription Cancellation</h2>
            <h3 className="text-xl font-semibold text-foreground mb-3">No Partial Refunds</h3>
            <p className="text-muted-foreground mb-4">
              After the 14-day guarantee period, we do not offer refunds for partial months or unused subscription time. When you cancel:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>You retain access until the end of your current billing period</li>
              <li>No charges will occur for subsequent periods</li>
              <li>Your data is retained for 30 days after cancellation</li>
              <li>You can export data before cancellation</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">How to Cancel</h3>
            <p className="text-muted-foreground mb-4">
              You can cancel anytime through:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>Your account dashboard (Billing → Cancel Subscription)</li>
              <li>Email request to snrautomations3@gmail.com</li>
              <li>WhatsApp: +91 89460 84672</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Founding Member Pricing</h2>
            <p className="text-muted-foreground mb-4">
              If you're a founding member with lifetime 50% discount:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>Your discounted rate is locked in for life</li>
              <li>If you cancel and later return, founding member pricing may no longer be available</li>
              <li>14-day money-back guarantee still applies</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Account Termination by AdScale</h2>
            <p className="text-muted-foreground mb-4">
              If we terminate your account due to Terms of Service violations:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>No refund will be issued</li>
              <li>You may not create new accounts without permission</li>
              <li>Outstanding balances remain due</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Failed Payments & Late Fees</h2>
            <p className="text-muted-foreground mb-4">
              If a subscription payment fails:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>Your account will be temporarily downgraded to FREE plan</li>
              <li>We'll notify you via email and WhatsApp</li>
              <li>You have 7 days to update payment information</li>
              <li>After 7 days, your account data may be archived</li>
              <li>No refunds for downtime caused by failed payments</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Downgrade Requests</h2>
            <p className="text-muted-foreground mb-4">
              If you downgrade from AGENCY to PRO or from PRO to FREE:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>Change takes effect at the next billing cycle</li>
              <li>No refunds for the price difference</li>
              <li>Data may be archived based on new plan limits</li>
              <li>Export data before downgrading if needed</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Service Credits</h2>
            <p className="text-muted-foreground mb-4">
              In rare cases of extended service outages ({'>'}24 hours), we may issue service credits at our discretion:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>Credits are applied to your next billing cycle</li>
              <li>Cannot be exchanged for cash</li>
              <li>Must be claimed within 30 days of outage</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">9. Currency & Payment Processing</h2>
            <p className="text-muted-foreground mb-4">
              - All pricing is in Indian Rupees (INR)<br/>
              - Payment processing fees are non-refundable<br/>
              - Currency conversion fees (if applicable) are not refunded<br/>
              - Refunds are issued in the same currency as payment
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">10. Contact for Refunds</h2>
            <p className="text-muted-foreground mb-4">
              For refund requests or billing questions:
            </p>
            <p className="text-muted-foreground mb-2">
              <strong>Email:</strong> snrautomations3@gmail.com
            </p>
            <p className="text-muted-foreground mb-2">
              <strong>WhatsApp:</strong> +91 89460 84672
            </p>
            <p className="text-muted-foreground mb-4">
              We typically respond within 24 hours (business days).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">11. Policy Updates</h2>
            <p className="text-muted-foreground mb-4">
              We may update this refund policy at any time. Changes will be posted on this page with an updated "Last updated" date. Material changes will be communicated via email.
            </p>
          </section>

          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mt-8">
            <h3 className="text-lg font-bold text-foreground mb-2">Have Questions?</h3>
            <p className="text-muted-foreground mb-4">
              We're here to help! If you're unsure about anything related to billing, refunds, or subscriptions, don't hesitate to reach out.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a 
                href="mailto:snrautomations3@gmail.com" 
                className="inline-flex items-center justify-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition"
              >
                Email Support
              </a>
              <a 
                href="https://wa.me/918946084672" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
