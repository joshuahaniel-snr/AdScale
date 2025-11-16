'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ReservationModal } from './reservation-modal'

export function Header() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center shadow-sm">
              <span className="text-primary-foreground font-bold text-lg">A</span>
            </div>
            <span className="font-bold text-xl text-foreground">AdScale</span>
          </a>
          
          <nav className="hidden md:flex items-center gap-7">
            <a href="#features" className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="#testimonials" className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors">Testimonials</a>
            <a href="#" className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
          </nav>

          <div className="flex items-center gap-3">
            <Button 
              variant="ghost" 
              size="sm"
              className="text-base"
              onClick={() => setModalOpen(true)}
            >
              Sign In
            </Button>
            <Button 
              size="sm" 
              className="bg-primary hover:bg-primary/90 shadow-sm text-base"
              onClick={() => setModalOpen(true)}
            >
              Get Started Free
            </Button>
          </div>
        </div>
      </header>

      <ReservationModal open={modalOpen} onOpenChange={setModalOpen} source="header" />
    </>
  )
}
