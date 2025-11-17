'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles } from 'lucide-react'
import { ReservationModal } from './reservation-modal'

export function CTA() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <section className="py-12 relative overflow-hidden bg-linear-to-br from-primary/5 via-background to-secondary/5">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-5 animate-in fade-in zoom-in-95 duration-700">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-xs font-semibold text-primary">Limited Beta Access</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold text-foreground mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            Start Saving 20+ Hours Monthly
          </h2>
          
          <p className="text-base text-muted-foreground mb-7 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-5 duration-700 delay-300">
            Join 500+ agencies using AdScale to automate reporting, discover insights, and boost client ROAS. Get priority access today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-500">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 group h-12 px-6"
              onClick={() => setModalOpen(true)}
            >
              Get 14-Day Free Trial
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 h-12 px-6"
              onClick={() => setModalOpen(true)}
            >
              Schedule Demo
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>14-day full access</span>
            </div>
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Setup in 60 seconds</span>
            </div>
          </div>
        </div>
      </section>

      <ReservationModal open={modalOpen} onOpenChange={setModalOpen} source="cta-section" />
    </>
  )
}
