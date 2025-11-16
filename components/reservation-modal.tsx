'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Loader2 } from 'lucide-react'

interface ReservationModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  source: string
}

export function ReservationModal({ open, onOpenChange, source }: ReservationModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    phone: ''
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const response = await fetch('/api/reservations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, source })
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.error || 'Failed to reserve your spot. Please try again.')
        setLoading(false)
        return
      }

      setSuccess(true)
      setFormData({ fullName: '', email: '', company: '', phone: '' })
      setLoading(false)
      setTimeout(() => {
        onOpenChange(false)
        setSuccess(false)
      }, 3000)
    } catch (err) {
      console.error('Reservation error:', err)
      setError('Network error. Please check your connection and try again.')
      setLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Reserve Your Spot</DialogTitle>
          <DialogDescription>
            Join the waitlist for early access to AdScale's AI-powered ad analytics platform.
          </DialogDescription>
        </DialogHeader>

        {success ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">You're on the list!</h3>
            <p className="text-muted-foreground">We'll be in touch soon with your early access details.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name *</Label>
              <Input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="John Doe"
                value={formData.fullName}
                onChange={handleChange}
                required
                disabled={loading}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="john@company.com"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={loading}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="company">Company</Label>
              <Input
                id="company"
                name="company"
                type="text"
                placeholder="Your Agency"
                value={formData.company}
                onChange={handleChange}
                disabled={loading}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+1 (555) 000-0000"
                value={formData.phone}
                onChange={handleChange}
                disabled={loading}
              />
            </div>

            {error && (
              <div className="text-sm text-red-600 bg-red-50 border border-red-200 p-3 rounded">
                {error}
              </div>
            )}

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90"
              disabled={loading || !formData.fullName || !formData.email}
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Reserving...
                </>
              ) : (
                'Reserve My Spot'
              )}
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              By submitting, you agree to receive updates about AdScale.
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
