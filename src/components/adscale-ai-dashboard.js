import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, AlertTriangle, CheckCircle, Clock, DollarSign, Target, Users, Zap, BarChart3, Eye, Palette, MessageSquare, Globe } from 'lucide-react';

const AdScaleAIDashboard = ({ user }) => {
    const [activeTab, setActiveTab] = useState('overview');
    const [selectedPlatform, setSelectedPlatform] = useState('all');
    const [autoOptimize, setAutoOptimize] = useState(false);
    const [showNotification, setShowNotification] = useState(false);

    // ...existing code for campaigns, insights, creativeFatigueData, weeklyPattern...
    // (Paste your dashboard logic and JSX here, as previously provided)

    return ( <
        div style = {
            { minHeight: '80vh', background: 'linear-gradient(135deg,#f8fafc,#e0e7ff)', padding: 24 } } >
        <
        h2 style = {
            { textAlign: 'center', marginBottom: 24 } } > Welcome, { user.email } < /h2> { /* ...rest of your dashboard code... */ } <
        div style = {
            { textAlign: 'center', marginTop: 32 } } >
        <
        span style = {
            { color: '#6366f1', fontWeight: 'bold' } } > AdScale AI Dashboard(Demo) < /span> <
        /div> <
        /div>
    );
};

export default AdScaleAIDashboard;