'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-react'

interface EmailSignupModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  source: string
}

export function EmailSignupModal({ open, onOpenChange, source }: EmailSignupModalProps) {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source })
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.error || 'Failed to sign up. Please try again.')
        return
      }

      setSuccess(true)
      setEmail('')
      setTimeout(() => {
        onOpenChange(false)
        setSuccess(false)
      }, 2000)
    } catch (err) {
      setError('An error occurred. Please try again.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Start Your Free Trial</DialogTitle>
          <DialogDescription>
            Get instant access to AI-powered ad analytics. No credit card required.
          </DialogDescription>
        </DialogHeader>

        {success ? (
          <div className="text-center py-8">
            <div className="text-green-600 text-lg font-semibold mb-2">✓ Success!</div>
            <p className="text-muted-foreground">Check your email to get started.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={loading}
                className="text-base"
              />
            </div>

            {error && (
              <div className="text-sm text-red-600 bg-red-50 p-3 rounded">
                {error}
              </div>
            )}

            <Button
              type="submit"
              className="w-full bg-secondary hover:bg-secondary/90"
              disabled={loading || !email}
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Signing up...
                </>
              ) : (
                'Get Started'
              )}
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              ✓ No credit card required • ✓ 14-day free trial • ✓ Instant access
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
