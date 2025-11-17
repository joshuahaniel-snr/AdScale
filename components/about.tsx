export function About() {
  return (
    <section id="about" className="py-10 sm:py-12 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <span className="text-xs font-semibold text-primary">About AdScale</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Built for Indian Marketing Agencies
          </h2>
        </div>

        <div className="prose prose-lg max-w-none text-muted-foreground space-y-4 animate-in fade-in slide-in-from-bottom-5 duration-700 delay-150">
          <p className="text-base leading-relaxed">
            AdScale is purpose-built to solve the exact problems faced by Indian performance marketing agencies and D2C brands. Unlike expensive Western tools that ignore local needs, we understand the Indian agency ecosystem.
          </p>
          
          <div className="bg-card border border-border rounded-xl p-6 mt-6">
            <h3 className="text-xl font-bold text-foreground mb-4">Why AdScale Exists</h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              After working with dozens of agencies, we kept hearing the same frustrations: tools were too expensive (₹5,000-15,000/month), too complex (requiring developer setup), built for US agencies (no WhatsApp, no UPI), and lacked actual intelligence (just dashboards, no recommendations).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-5">
              <h4 className="font-bold text-foreground mb-2">✅ What We Solve</h4>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• 60-second report generation</li>
                <li>• Weekly AI analyst summaries</li>
                <li>• Real-time WhatsApp alerts</li>
                <li>• White-label client portals</li>
                <li>• Affordable Indian pricing</li>
              </ul>
            </div>

            <div className="bg-secondary/5 border border-secondary/20 rounded-xl p-5">
              <h4 className="font-bold text-foreground mb-2">🎯 Built For</h4>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Performance marketing agencies</li>
                <li>• D2C brands with ad budgets</li>
                <li>• Freelance media buyers</li>
                <li>• Small to mid-size teams</li>
                <li>• Indian market focus</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
