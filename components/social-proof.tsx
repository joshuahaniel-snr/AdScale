import { Star, Quote } from 'lucide-react'

export function SocialProof() {
  const testimonials = [
    {
      name: "Priya Singh",
      role: "Performance Marketing Lead",
      company: "Digital Surge Agency",
      image: "PS",
      quote: "AdScale reduced our reporting time from 25 hours to just 3 hours weekly. Our clients now receive insights every week instead of monthly. Game changer for client retention.",
      metrics: "88% Time Reduction"
    },
    {
      name: "Amit Patel",
      role: "Founder & CEO",
      company: "Growth Labs",
      image: "AP",
      quote: "The AI recommendations are incredibly accurate. We've improved average client ROAS by 34% since implementing AdScale. It's like having a senior analyst working 24/7.",
      metrics: "+34% Average ROAS"
    }
  ]

  return (
    <section id="testimonials" className="py-10 sm:py-12 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 mb-4">
            <Star className="w-4 h-4 text-secondary fill-secondary" />
            <span className="text-xs font-semibold text-secondary">Success Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
            Trusted by 500+ Marketing Agencies
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            See how agencies are saving time and improving client results with AdScale automation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {testimonials.map((testimonial, idx) => (
            <div 
              key={idx} 
              className="group bg-card border border-border rounded-xl p-5 hover:border-primary/40 hover:shadow-lg hover:scale-[1.01] transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 duration-700"
              style={{ animationDelay: `${idx * 200}ms` }}
            >
              <Quote className="w-8 h-8 text-primary/20 mb-3" />
              
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-sm text-foreground mb-5 leading-relaxed">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <span className="font-bold text-white text-sm">{testimonial.image}</span>
                </div>
                <div>
                  <p className="font-bold text-foreground text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <span className="text-xs font-bold text-primary">
                  {testimonial.metrics}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
