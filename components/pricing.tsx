'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Check, Sparkles } from 'lucide-react'
import { ReservationModal } from './reservation-modal'

export function Pricing() {
  const [modalOpen, setModalOpen] = useState(false)

  const plans = [
    {
      name: 'FREE',
      price: '₹0',
      period: '/month',
      description: 'Perfect for trying out AdScale',
      features: [
        '1 ad account',
        '2 reports per month',
        'Basic analytics',
        'Email support',
        '7-day data retention'
      ],
      cta: 'Start Free',
      popular: false
    },
    {
      name: 'PRO',
      price: '₹999',
      period: '/month',
      originalPrice: '₹1,999',
      badge: 'Founding Member - Save 50% Forever',
      description: 'For growing agencies',
      features: [
        'Up to 5 ad accounts',
        'Unlimited reports',
        'Weekly AI Analyst Report (Mon 7AM)',
        'WhatsApp alerts',
        'White-label reports',
        'Priority email support',
        '90-day data retention',
        'Client portal access'
      ],
      cta: 'Get 14-Day Free Trial',
      popular: true
    },
    {
      name: 'AGENCY',
      price: '₹2,499',
      period: '/month',
      originalPrice: '₹4,999',
      badge: 'Founding Member - Save 50% Forever',
      description: 'For established agencies',
      features: [
        'Unlimited ad accounts',
        'Unlimited reports',
        'Weekly AI Analyst Report (Mon 7AM)',
        'WhatsApp + Slack alerts',
        'White-label reports & portal',
        'Dedicated account manager',
        'Unlimited data retention',
        'API access',
        'Custom integrations',
        'Team collaboration tools'
      ],
      cta: 'Get 14-Day Free Trial',
      popular: false
    }
  ]

  return (
    <>
      <section id="pricing" className="py-10 sm:py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Urgency Banner */}
          <div className="text-center mb-8 animate-in fade-in zoom-in-95 duration-700">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-primary/20 to-secondary/20 border border-primary/30 mb-6">
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-sm font-bold text-foreground">
                🔥 First 10 Agencies Get Lifetime 50% Off!
              </span>
            </div>
            
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <span className="text-xs font-semibold text-primary">Pricing</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
              Simple, Transparent Pricing
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Choose the plan that fits your agency. All plans include 14-day free trial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {plans.map((plan, idx) => (
              <div
                key={idx}
                className={`relative bg-card border rounded-xl p-6 hover:shadow-lg transition-all animate-in fade-in slide-in-from-bottom-4 duration-700 ${
                  plan.popular
                    ? 'border-primary shadow-lg scale-105 z-10'
                    : 'border-border hover:border-primary/40'
                }`}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="px-3 py-1 text-xs font-bold text-white bg-primary rounded-full shadow-lg">
                      MOST POPULAR
                    </span>
                  </div>
                )}

                {plan.badge && (
                  <div className="mb-4 p-2 bg-linear-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-lg text-center">
                    <span className="text-xs font-bold text-primary">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  {plan.originalPrice && (
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground line-through">
                        {plan.originalPrice}
                      </span>
                      <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded">
                        Save 50%
                      </span>
                    </div>
                  )}
                  <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    plan.popular
                      ? 'bg-primary hover:bg-primary/90 text-white'
                      : 'bg-secondary/10 hover:bg-secondary/20 text-foreground border border-border'
                  }`}
                  size="lg"
                  onClick={() => setModalOpen(true)}
                >
                  {plan.cta}
                </Button>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              All plans include 14-day free trial • No credit card required • Cancel anytime
            </p>
          </div>
        </div>
      </section>

      <ReservationModal open={modalOpen} onOpenChange={setModalOpen} source="pricing" />
    </>
  )
}
