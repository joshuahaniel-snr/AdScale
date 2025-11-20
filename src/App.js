import { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';
import Auth from './components/Auth';
import AdScaleAIDashboard from './components/adscale-ai-dashboard';

function App() {
    const [session, setSession] = useState(null);

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
        });
        const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        });
        return () => listener ? .subscription.unsubscribe();
    }, []);

    if (!session) {
        return (
            <>
                {/* Landing Page Content */}
                <h1 style={{ textAlign: 'center', marginTop: 40 }}>Welcome to AdScale</h1>
                <p style={{ textAlign: 'center', marginBottom: 32 }}>
                    Choose an option below:<br />
                    <strong>Reserve My Spot</strong> (waitlist), <strong>Sign In</strong> (existing users), or <strong>Get 14 Day Trial</strong> (new users).
                </p>
                <Auth />
            </>
        );
    }

    return ( <
        > { /* Dashboard for logged-in users */ } <
        AdScaleAIDashboard user = { session.user }
        /> <
        />
    );
}

export default App;