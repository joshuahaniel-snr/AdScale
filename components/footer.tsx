import { Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded-lg bg-linear-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">A</span>
              </div>
              <span className="font-bold text-foreground">AdScale</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              AI-powered ad analytics for Indian marketing agencies.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Mail className="w-4 h-4" />
              <a href="mailto:snrautomations3@gmail.com" className="hover:text-foreground transition">
                snrautomations3@gmail.com
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#features" className="hover:text-foreground transition">Features</a></li>
              <li><a href="#pricing" className="hover:text-foreground transition">Pricing</a></li>
              <li><a href="#about" className="hover:text-foreground transition">About</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#founder" className="hover:text-foreground transition">Founder Story</a></li>
              <li><a href="mailto:snrautomations3@gmail.com" className="hover:text-foreground transition">Contact</a></li>
              <li><a href="https://wa.me/918946084672" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition">WhatsApp Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/privacy" className="hover:text-foreground transition">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-foreground transition">Terms of Service</a></li>
              <li><a href="/refund" className="hover:text-foreground transition">Refund Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="text-center space-y-2">
            <p className="text-sm font-semibold text-foreground">
              Built by <span className="text-primary">SNR AUTOMATIONS</span>
            </p>
            <p className="text-xs text-muted-foreground">
              © 2025 SNR AUTOMATIONS. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
