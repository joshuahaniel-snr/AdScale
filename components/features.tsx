import { BarChart3, Zap, FileText, AlertCircle, Lock, Globe } from 'lucide-react'

export function Features() {
  const features = [
    {
      icon: BarChart3,
      title: "Instant Multi-Platform Integration",
      description: "Connect Meta Ads, Google Ads, and LinkedIn in under 60 seconds. Zero coding required."
    },
    {
      icon: Zap,
      title: "AI-Powered Performance Insights",
      description: "Machine learning identifies optimization opportunities and predicts campaign performance trends."
    },
    {
      icon: FileText,
      title: "Automated Report Generation",
      description: "Beautiful, white-labeled reports generated automatically. Export to PDF or share via link."
    },
    {
      icon: AlertCircle,
      title: "Real-Time Budget Alerts",
      description: "Get instant notifications when campaigns underperform or budgets exceed thresholds."
    },
    {
      icon: Lock,
      title: "Client Portal Access",
      description: "Give clients 24/7 access to their data with custom branding. Build trust automatically."
    },
    {
      icon: Globe,
      title: "Cross-Campaign Analytics",
      description: "Compare performance across all platforms. Identify your best-performing channels instantly."
    }
  ]

  return (
    <section id="features" className="py-10 sm:py-12 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <span className="text-xs font-semibold text-primary">Platform Features</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
            Everything You Need to Scale Your Agency
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Powerful automation tools designed specifically for digital marketing agencies and media buyers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <div 
                key={idx} 
                className="group bg-card border border-border rounded-xl p-5 hover:border-primary/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 duration-700"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                  <Icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="font-bold text-base text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
