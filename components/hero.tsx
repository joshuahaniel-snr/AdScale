'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, TrendingUp, Zap, Target } from 'lucide-react'
import { ReservationModal } from './reservation-modal'

export function Hero() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <section className="relative overflow-hidden bg-linear-to-br from-background via-primary/2 to-background py-10 sm:py-14">
        {/* Subtle background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl"></div>
          <div className="absolute left-0 bottom-0 h-[400px] w-[400px] rounded-full bg-secondary/5 blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col gap-5">
              <div className="inline-flex items-center gap-2 w-fit px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 animate-in fade-in slide-in-from-bottom-3 duration-700">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                <span className="text-xs font-semibold text-primary">
                  AI-Powered Marketing Analytics
                </span>
              </div>

              <div className="space-y-3">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] tracking-tight animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
                  Automate Ad Reporting,{' '}
                  <span className="text-primary">
                    Maximize ROAS
                  </span>
                </h1>

                <p className="text-lg text-muted-foreground leading-relaxed max-w-xl animate-in fade-in slide-in-from-bottom-5 duration-700 delay-300">
                  Stop wasting 20+ hours monthly on manual reports. AdScale delivers instant AI insights from Meta & Google Ads, helping agencies increase client ROI by 34% on average.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-500">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 group h-12 px-6"
                  onClick={() => setModalOpen(true)}
                >
                  Get 14-Day Free Trial
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition" />
                </Button>
              </div>

              {/* Social Proof Badge */}
              <div className="flex items-center gap-2 text-sm text-muted-foreground animate-in fade-in duration-700 delay-600">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center text-xs font-bold text-primary">A</div>
                  <div className="w-8 h-8 rounded-full bg-secondary/20 border-2 border-background flex items-center justify-center text-xs font-bold text-secondary">M</div>
                  <div className="w-8 h-8 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center text-xs font-bold text-primary">D</div>
                </div>
                <span className="font-semibold text-foreground">Join 50+ agencies</span>
                <span>already automating their reporting</span>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-3 border-t border-border animate-in fade-in slide-in-from-bottom-7 duration-700 delay-700">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-bold text-foreground">20hrs</div>
                    <div className="text-xs text-muted-foreground">Saved/Month</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-bold text-foreground">60sec</div>
                    <div className="text-xs text-muted-foreground">Setup</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Target className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-bold text-foreground">+34%</div>
                    <div className="text-xs text-muted-foreground">Avg ROAS</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-full max-w-lg animate-in fade-in zoom-in-95 duration-1000 delay-300">
                <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl"></div>
                <div className="relative bg-card border border-border rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                  <div className="space-y-4">
                    {/* Mock Dashboard */}
                    <div className="flex items-center justify-between pb-3 border-b border-border">
                      <div className="h-4 bg-primary/80 rounded w-32"></div>
                      <div className="h-4 bg-muted rounded w-16"></div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-primary/5 border border-primary/20 rounded-xl p-4">
                        <div className="h-2 bg-muted/60 rounded w-12 mb-2"></div>
                        <div className="h-6 bg-primary/60 rounded w-20"></div>
                      </div>
                      <div className="bg-secondary/5 border border-secondary/20 rounded-xl p-4">
                        <div className="h-2 bg-muted/60 rounded w-12 mb-2"></div>
                        <div className="h-6 bg-secondary/60 rounded w-20"></div>
                      </div>
                    </div>

                    <div className="bg-muted/30 rounded-xl p-4 h-32 flex items-end gap-1.5">
                      {[45, 60, 38, 75, 55, 85, 70, 90].map((height, i) => (
                        <div 
                          key={i} 
                          className="flex-1 bg-linear-to-t from-primary/80 to-primary/40 rounded-t"
                          style={{ height: `${height}%` }}
                        ></div>
                      ))}
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        <div className="h-2 bg-muted/70 rounded flex-1"></div>
                        <div className="h-2 bg-primary/30 rounded w-10"></div>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                        <div className="h-2 bg-muted/70 rounded flex-1"></div>
                        <div className="h-2 bg-secondary/30 rounded w-10"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ReservationModal open={modalOpen} onOpenChange={setModalOpen} source="hero" />
    </>
  )
}
