"use client";
import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, AlertTriangle, CheckCircle, Clock, DollarSign, Target, Users, Zap, BarChart3, Eye, Palette, MessageSquare, Globe } from 'lucide-react';

const AdScaleAIDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedPlatform, setSelectedPlatform] = useState('all');
  const [autoOptimize, setAutoOptimize] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  // Simulated data - in production, this would come from API
  const campaigns = [
    {
      id: 1,
      name: "Summer Fashion Sale - Meta",
      platform: "meta",
      status: "warning",
      spend: 25000,
      revenue: 45000,
      roas: 1.8,
      cpa: 450,
      targetCPA: 400,
      impressions: 150000,
      clicks: 3500,
      ctr: 2.33,
      frequency: 4.2,
      creativeFatigue: 78,
      audienceOverlap: 45,
      recommendation: "High creative fatigue detected. Refresh creatives urgently.",
      action: "pause_creatives",
      priority: "high"
    },
    {
      id: 2,
      name: "Google Search - Tiruppur Textiles",
      platform: "google",
      status: "success",
      spend: 18000,
      revenue: 54000,
      roas: 3.0,
      cpa: 320,
      targetCPA: 400,
      impressions: 85000,
      clicks: 2800,
      ctr: 3.29,
      frequency: 1.8,
      creativeFatigue: 25,
      audienceOverlap: 12,
      recommendation: "Excellent performance. Increase budget by 30%.",
      action: "increase_budget",
      priority: "medium"
    },
    {
      id: 3,
      name: "Instagram Reels - New Collection",
      platform: "meta",
      status: "danger",
      spend: 32000,
      revenue: 38400,
      roas: 1.2,
      cpa: 680,
      targetCPA: 400,
      impressions: 220000,
      clicks: 1800,
      ctr: 0.82,
      frequency: 6.5,
      creativeFatigue: 92,
      audienceOverlap: 67,
      recommendation: "Critical: CPA 70% above target. Pause immediately.",
      action: "pause_campaign",
      priority: "critical"
    }
  ];

  const insights = [
    {
      type: "time",
      title: "Peak Performance Hours",
      description: "Your ads convert 43% better between 7 PM - 10 PM. Shift 40% of budget to these hours.",
      impact: "₹8,500 potential savings/week",
      icon: Clock
    },
    {
      type: "audience",
      title: "Audience Overlap Alert",
      description: "45% overlap detected between Campaign 1 & 3. Consolidate to reduce wasted spend.",
      impact: "₹12,000 potential savings",
      icon: Users
    },
    {
      type: "creative",
      title: "Creative Fatigue Warning",
      description: "3 creatives showing declining CTR. Auto-refresh suggested with new variants.",
      impact: "Prevent 25% performance drop",
      icon: Palette
    },
    {
      type: "platform",
      title: "Platform Shift Opportunity",
      description: "Google Search shows 67% better ROAS. Consider reallocating ₹15,000 from Meta.",
      impact: "₹25,000+ additional revenue",
      icon: Globe
    }
  ];

  const creativeFatigueData = [
    { name: "Hero Banner 01", score: 92, status: "critical", ctr: 0.8, frequency: 6.5, days: 28 },
    { name: "Product Grid 03", score: 78, status: "warning", ctr: 1.2, frequency: 4.8, days: 21 },
    { name: "Video Ad 15s", score: 45, status: "good", ctr: 2.8, frequency: 2.1, days: 7 },
    { name: "Carousel - Collection", score: 28, status: "excellent", ctr: 3.5, frequency: 1.5, days: 3 }
  ];

  const weeklyPattern = {
    days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    conversions: [45, 52, 61, 78, 68, 95, 88],
    avgCPA: [520, 480, 445, 380, 410, 350, 365]
  };

  useEffect(() => {
    if (autoOptimize) {
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000);
    }
  }, [autoOptimize]);

  const getStatusColor = (status) => {
    const colors = {
      critical: 'bg-red-100 text-red-700 border-red-300',
      danger: 'bg-red-50 text-red-600 border-red-200',
      warning: 'bg-yellow-50 text-yellow-700 border-yellow-200',
      success: 'bg-green-50 text-green-700 border-green-200',
      good: 'bg-blue-50 text-blue-700 border-blue-200',
      excellent: 'bg-emerald-50 text-emerald-700 border-emerald-200'
    };
    return colors[status] || colors.good;
  };

  const getPriorityColor = (priority) => {
    const colors = {
      critical: 'bg-red-600',
      high: 'bg-orange-500',
      medium: 'bg-yellow-500',
      low: 'bg-green-500'
    };
    return colors[priority] || colors.medium;
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', { 
      style: 'currency', 
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const filteredCampaigns = selectedPlatform === 'all' 
    ? campaigns 
    : campaigns.filter(c => c.platform === selectedPlatform);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-6">
      {/* ...existing code... */}
      {/* Place the rest of the dashboard code here, unchanged from your provided code */}
    </div>
  );
};

export default AdScaleAIDashboard;
