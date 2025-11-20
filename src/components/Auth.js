import { useState } from 'react';
import { supabase } from '../supabaseClient';

export default function Auth() {
    const [view, setView] = useState('none'); // 'none', 'signin', 'signup', 'reserve'
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // Auth logic
    const handleSignIn = async (e) => {
        e.preventDefault();
        setError('');
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) setError(error.message);
    };

    const handleSignUp = async (e) => {
        e.preventDefault();
        setError('');
        // Add trial logic here if needed
        const { error } = await supabase.auth.signUp({ email, password });
        if (error) setError(error.message);
    };

    // Reservation form stub
    const handleReserve = async (e) => {
        e.preventDefault();
        // Implement reservation logic here
        alert('Reservation submitted!');
        setView('none');
    };

    return (
        <div style={{ maxWidth: 340, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 16 }}>
            {view === 'none' && (
                <>
                    <button onClick={() => setView('reserve')} style={{ marginBottom: 8 }}>Reserve My Spot</button>
                    <button onClick={() => setView('signin')} style={{ marginBottom: 8 }}>Sign In</button>
                    <button onClick={() => setView('signup')}>Get 14 Day Trial</button>
                </>
            )}

            {view === 'signin' && (
                <form onSubmit={handleSignIn} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required />
                    <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" required />
                    <button type="submit" style={{ marginTop: 8 }}>Sign In</button>
                    <button type="button" onClick={() => setView('none')} style={{ marginTop: 8 }}>Back</button>
                    {error && <div style={{ color: 'red', marginTop: 8 }}>{error}</div>}
                </form>
            )}

            {view === 'signup' && (
                <form onSubmit={handleSignUp} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required />
                    <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" required />
                    <button type="submit" style={{ marginTop: 8 }}>Sign Up & Start 14 Day Trial</button>
                    <button type="button" onClick={() => setView('none')} style={{ marginTop: 8 }}>Back</button>
                    {error && <div style={{ color: 'red', marginTop: 8 }}>{error}</div>}
                </form>
            )}

            {view === 'reserve' && (
                <form onSubmit={handleReserve} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    <input placeholder="Name" required />
                    <input placeholder="Email" required />
                    <button type="submit" style={{ marginTop: 8 }}>Reserve My Spot</button>
                    <button type="button" onClick={() => setView('none')} style={{ marginTop: 8 }}>Back</button>
                </form>
            )}
        </div>
    );
}