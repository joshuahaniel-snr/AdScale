import { AlertCircle } from 'lucide-react'

export function ProblemStatement() {
  const problems = [
    {
      question: "Spending hours on manual ad reports every week?",
      pain: "Eliminate 90% of reporting time with automated AI analytics",
      icon: "⏱️"
    },
    {
      question: "Struggling to prove ROI to your clients?",
      pain: "Generate client-ready performance reports in 60 seconds",
      icon: "📊"
    },
    {
      question: "Missing optimization opportunities in your campaigns?",
      pain: "AI identifies hidden insights to boost ROAS by 34% average",
      icon: "🎯"
    }
  ]

  return (
    <section className="py-10 sm:py-12 bg-muted/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-destructive/10 border border-destructive/20 mb-4">
            <AlertCircle className="w-4 h-4 text-destructive" />
            <span className="text-xs font-semibold text-destructive">Agency Pain Points</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
            Stop Losing Money on Manual Work
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Digital marketing agencies waste 20+ hours monthly on repetitive reporting. Time that could be spent growing your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {problems.map((item, idx) => (
            <div 
              key={idx} 
              className="group bg-card border border-border rounded-xl p-5 hover:border-primary/40 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 duration-700"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="font-bold text-base text-foreground mb-2 leading-snug">
                {item.question}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.pain}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          <p className="text-base text-muted-foreground">
            <span className="font-semibold text-foreground">AdScale automates everything.</span> Focus on strategy, not spreadsheets.
          </p>
        </div>
      </div>
    </section>
  )
}
