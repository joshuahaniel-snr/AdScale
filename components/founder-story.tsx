'use client'

import { Mail, Phone } from 'lucide-react'
import Image from 'next/image'

export function FounderStory() {
  return (
    <section id="founder" className="py-10 sm:py-12 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Founder Image */}
          <div className="order-2 lg:order-1 animate-in fade-in slide-in-from-left-8 duration-700">
            <div className="relative aspect-square max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-xl border border-border">
              <Image
                src="/founder.jpg"
                alt="Rathnadevi S N - Founder of AdScale"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Founder Story Content */}
          <div className="order-1 lg:order-2 animate-in fade-in slide-in-from-right-8 duration-700 delay-200">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <span className="text-xs font-semibold text-primary">Meet the Founder</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Built by Someone Who Understands Your Pain
            </h2>

            <div className="mb-6">
              <h3 className="text-xl font-bold text-foreground mb-2">Rathnadevi S N</h3>
              <p className="text-sm text-muted-foreground">Founder & CEO, SNR AUTOMATIONS</p>
            </div>

            <div className="space-y-4 text-base text-muted-foreground mb-6">
              <p>
                After running a performance marketing agency for 3 years, I spent countless nights manually pulling data from Meta Ads, Google Ads, and client dashboards. Every Monday morning started with the same exhausting routine—consolidating reports, calculating ROI, and explaining metrics to clients.
              </p>

              <p>
                I watched my team burn out doing repetitive work that AI could handle. Clients kept asking the same questions: "What's our ROAS?", "Which ads are working?", "Should we increase budget?"
              </p>

              <p className="font-semibold text-foreground">
                That's when I built AdScale—not as a tech experiment, but as a solution I desperately needed.
              </p>

              <p>
                Today, AdScale automates what took us 6 hours into a 2-minute AI-generated report. It's built specifically for Indian agencies handling multiple client accounts, with WhatsApp alerts (because that's how we communicate), INR currency support, and pricing that doesn't break the bank.
              </p>

              <p>
                If you're tired of manual reporting and want to focus on strategy instead of spreadsheets, AdScale is for you.
              </p>
            </div>

            {/* Contact CTA */}
            <div className="space-y-3 p-4 bg-muted/30 rounded-xl border border-border">
              <p className="text-sm font-semibold text-foreground mb-2">Questions? Let's talk:</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="mailto:snrautomations3@gmail.com"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-foreground bg-background border border-border rounded-lg hover:bg-muted transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  snrautomations3@gmail.com
                </a>
                <a
                  href="https://wa.me/918946084672"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-green-600 hover:bg-green-700 rounded-lg transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  WhatsApp: +91 89460 84672
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
