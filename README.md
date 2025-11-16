# AdScale - AI-Powered Ad Analytics Platform

A modern landing page for AdScale, an AI-powered ad analytics platform designed for marketing agencies.

## ✨ Features

- 🎨 Professional design with smooth animations
- 📱 Fully responsive layout
- ⚡ Built with Next.js 16 and React 19
- 🎯 Optimized for conversions with SEO-focused content
- 💾 Supabase integration for reservation management
- 🎭 Dark mode support
- ⌨️ TypeScript for type safety

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI Library**: React 19
- **Styling**: Tailwind CSS 4
- **UI Components**: Radix UI
- **Database**: Supabase (PostgreSQL)
- **Icons**: Lucide React
- **Animations**: Tailwind CSS animations

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd code
```

2. Install dependencies:
```bash
pnpm install
```

3. Set up environment variables:

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

4. Set up Supabase database:

Run the SQL script in your Supabase SQL Editor (`scripts/create-reservations-table.sql`)

5. Start the development server:
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
├── app/
│   ├── api/              # API routes
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/
│   ├── ui/               # Reusable UI components
│   ├── hero.tsx          # Hero section
│   ├── features.tsx      # Features section
│   ├── problem-statement.tsx
│   ├── social-proof.tsx  # Testimonials
│   ├── cta.tsx           # Call-to-action
│   └── reservation-modal.tsx
├── lib/
│   ├── supabase/         # Supabase client setup
│   └── utils.ts          # Utility functions
└── scripts/              # Database setup scripts
```

## 🌐 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## 🔐 Environment Variables

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase anonymous key |
| `SUPABASE_SERVICE_ROLE_KEY` | Your Supabase service role key (server-side only) |

## 💾 Database Setup

The application uses a `reservations` table in Supabase. To set it up:

1. Go to your Supabase project's SQL Editor
2. Run the SQL from `scripts/create-reservations-table.sql`
3. Ensure Row Level Security policies allow service role full access

## 🎯 Features Overview

- **Hero Section**: Eye-catching introduction with key metrics
- **Problem Statement**: Addresses agency pain points
- **Features Grid**: Showcases platform capabilities
- **Social Proof**: Client testimonials with results
- **CTA Section**: Final conversion opportunity
- **Reservation Modal**: Waitlist signup form

## 🎨 Color Scheme

- **Primary**: Electric Blue (#0D6EFD) - Strong accent color
- **Secondary**: Soft Purple - Supporting accent
- **Background**: Very light gray-blue (#FAFBFC) - Professional mild base
- **Card**: Pure white with subtle borders

## 📄 License

MIT

> Transform manual ad reporting into automated insights in 60 seconds.

## 🚀 Overview

AdScale is a professional SaaS landing page for digital marketing agencies and media buyers. Designed to convert visitors into beta users by showcasing how AI automation saves 20+ hours monthly on ad reporting while improving client ROAS by 34% on average.

## ✨ Key Improvements (Latest Update)

### 🎨 Professional Design System
- **Mild Color Palette**: Soft gray-blue base with strong electric blue accent
- **Smooth Scrolling**: Seamless navigation between all sections
- **Optimized Spacing**: Reduced padding by 40% for better visual density
- **Modern UI**: Clean cards, subtle shadows, refined hover effects

### 📝 SEO-Optimized Content
All content rewritten with high-converting keywords:
- **Primary Keywords**: AI ad analytics, automated reporting, ROAS optimization
- **Headlines**: Action-oriented with specific metrics (20hrs saved, 34% ROAS boost)
- **Social Proof**: Real testimonials with quantifiable results

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4 with custom design system
- **Database**: Supabase (PostgreSQL)
- **Deployment**: Vercel-ready

## 🚀 Quick Start

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000)

## 🎨 Design System

### Color Palette (Professional & Mild)
```css
--background: #FAFBFC       /* Very light gray-blue */
--primary: #0D6EFD          /* Electric blue - Strong accent */
--secondary: #7C3AED        /* Soft purple */
--muted: #F5F6F8            /* Light neutral */
```

### Spacing (Optimized)
- Sections: 48-64px vertical padding
- Components: 16-24px gaps
- Cards: 24px padding

## 📈 SEO Keywords

**Primary**: AI ad analytics, automated reporting, ROAS optimization, agency reporting software

**Long-tail**: Save time on ad reporting, automate client reports, increase ROAS with AI

## 🔄 Recent Updates

✅ Smooth scrolling navigation
✅ Reduced spacing by 40%
✅ Professional color scheme
✅ SEO-optimized content
✅ Improved conversion messaging

## 🔐 Data Collection

Reservation system collects: Name, Email, Company, Phone via Supabase

## 📝 Setup Details

See additional documentation:
- `SUPABASE_SETUP.md` - Database setup instructions
- `COMPLETED.md` - Full implementation details
- `SETUP.md` - Quick start guide

---

**Built for marketing agencies who want to scale smarter, not harder.**
