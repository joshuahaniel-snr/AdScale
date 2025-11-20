import { useState } from 'react';
import { supabase } from '../supabaseClient';

export default function Auth() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSignUp, setIsSignUp] = useState(false);
    const [error, setError] = useState('');

    const handleAuth = async(e) => {
        e.preventDefault();
        setError('');
        if (isSignUp) {
            const { error } = await supabase.auth.signUp({ email, password });
            if (error) setError(error.message);
        } else {
            const { error } = await supabase.auth.signInWithPassword({ email, password });
            if (error) setError(error.message);
        }
    };

    return ( <
        form onSubmit = { handleAuth }
        style = {
            { maxWidth: 320, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 12 } } >
        <
        input value = { email }
        onChange = { e => setEmail(e.target.value) }
        placeholder = "Email"
        required / >
        <
        input value = { password }
        onChange = { e => setPassword(e.target.value) }
        type = "password"
        placeholder = "Password"
        required / >
        <
        button type = "submit"
        style = {
            { marginTop: 8 } } > { isSignUp ? 'Sign Up' : 'Sign In' } < /button> <
        button type = "button"
        onClick = {
            () => setIsSignUp(!isSignUp) }
        style = {
            { marginTop: 8 } } > { isSignUp ? 'Already have an account? Sign In' : 'No account? Sign Up' } <
        /button> {
            error && < div style = {
                    { color: 'red', marginTop: 8 } } > { error } < /div>} <
                /form>
        );
    }