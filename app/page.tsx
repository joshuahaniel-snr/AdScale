import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { ProblemStatement } from '@/components/problem-statement'
import { About } from '@/components/about'
import { Features } from '@/components/features'
import { Pricing } from '@/components/pricing'
import { FounderStory } from '@/components/founder-story'
import { CTA } from '@/components/cta'
import { Footer } from '@/components/footer'

import AdScaleAIDashboard from '@/components/adscale-ai-dashboard'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ProblemStatement />
      <About />
      <Features />
      <Pricing />
      <FounderStory />
      {/* User Dashboard Section */}
      <section id="dashboard" className="py-10 sm:py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AdScaleAIDashboard />
        </div>
      </section>
      <CTA />
      <Footer />
    </main>
  )
}
