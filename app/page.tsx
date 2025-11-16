import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { ProblemStatement } from '@/components/problem-statement'
import { Features } from '@/components/features'
import { SocialProof } from '@/components/social-proof'
import { CTA } from '@/components/cta'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ProblemStatement />
      <Features />
      <SocialProof />
      <CTA />
      <Footer />
    </main>
  )
}
