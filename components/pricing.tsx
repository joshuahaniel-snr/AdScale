'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import { EmailSignupModal } from './email-signup-modal'

export function Pricing() {
  const [modalOpen, setModalOpen] = useState(false)

  const plans = [
    {
      name: "FREE",
      price: "₹0",
      description: "Perfect for getting started",
      features: [
        "1 Ad account connection",
        "Basic monthly reports",
        "7 days data history",
        "Email support"
      ],
      cta: "Start Free",
      highlighted: false,
      source: "pricing-free"
    },
    {
      name: "PRO",
      price: "₹1,999",
      period: "/month",
      description: "For growing agencies",
      features: [
        "Up to 5 Ad accounts",
        "AI-powered recommendations",
        "90 days data history",
        "White-label reports",
        "Priority email support",
        "Budget alerts"
      ],
      cta: "Start Free Trial",
      highlighted: true,
      source: "pricing-pro"
    },
    {
      name: "AGENCY",
      price: "₹4,999",
      period: "/month",
      description: "For established agencies",
      features: [
        "Unlimited Ad accounts",
        "Advanced AI analytics",
        "1-year data history",
        "White-label client portal",
        "Priority support + onboarding",
        "Custom integrations",
        "Team collaboration"
      ],
      cta: "Start Free Trial",
      highlighted: false,
      source: "pricing-agency"
    },
    {
      name: "ENTERPRISE",
      price: "₹12,000+",
      period: "/month",
      description: "For large-scale operations",
      features: [
        "Everything in AGENCY",
        "Dedicated account manager",
        "Custom AI models",
        "API access",
        "Advanced reporting",
        "SLA guarantee",
        "Custom features"
      ],
      cta: "Contact Sales",
      highlighted: false,
      source: "pricing-enterprise"
    }
  ]

  return (
    <>
      <section id="pricing" className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
              Simple, transparent pricing
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the plan that fits your agency. Scale as you grow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan, idx) => (
              <div 
                key={idx} 
                className={`relative rounded-xl border transition ${
                  plan.highlighted 
                    ? 'bg-primary/5 border-secondary shadow-lg scale-105' 
                    : 'bg-card border-border hover:border-secondary/50'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="px-3 py-1 bg-secondary text-primary-foreground text-xs font-bold rounded-full">
                      MOST POPULAR
                    </div>
                  </div>
                )}

                <div className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                      {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
                    </div>
                  </div>

                  <Button 
                    className="w-full mb-6" 
                    variant={plan.highlighted ? "default" : "outline"}
                    size="sm"
                    onClick={() => setModalOpen(true)}
                    disabled={plan.cta === "Contact Sales"}
                  >
                    {plan.cta}
                  </Button>

                  <div className="space-y-3">
                    {plan.features.map((feature, featureIdx) => (
                      <div key={featureIdx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              All plans include global access • Money-back guarantee • 24/7 support
            </p>
            <p className="text-sm text-muted-foreground">
              Enterprise plans available for teams with unlimited requirements. <a href="#" className="text-secondary hover:underline font-semibold">Contact our sales team</a>
            </p>
          </div>
        </div>
      </section>

      <EmailSignupModal open={modalOpen} onOpenChange={setModalOpen} source="pricing" />
    </>
  )
}
