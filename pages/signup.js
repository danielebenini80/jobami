// pages/signup.js

import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError(null);

    const { data, error } = await supabase.auth.signUp({
      email,
      password
    });

    if (error) {
      setError(error.message);
    } else {
      router.push('/dashboard');
    }
  };

  return (
    <>
      <Head>
        <title>Registrazione - Jobami</title>
      </Head>

      <div style={styles.container}>
        <h2>Crea un account Jobami</h2>
        <form onSubmit={handleSignup} style={styles.form}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />
          {error && <p style={styles.error}>{error}</p>}
          <button type="submit" style={styles.button}>Registrati</button>
        </form>
        <p style={styles.linkText}>
          Hai già un account? <a href="/login" style={styles.link}>Accedi</a>
        </p>
      </div>
    </>
  );
}

const styles = {
  container: {
    maxWidth: '400px', margin: '5rem auto', padding: '2rem', borderRadius: '10px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', backgroundColor: '#fff', textAlign: 'center'
  },
  form: {
    display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem'
  },
  input: {
    padding: '0.8rem', fontSize: '1rem', borderRadius: '5px', border: '1px solid #ccc'
  },
  button: {
    padding: '1rem', backgroundColor: '#0070f3', color: 'white', fontSize: '1rem', borderRadius: '5px', border: 'none', cursor: 'pointer'
  },
  error: {
    color: 'red', fontSize: '0.9rem'
  },
  linkText: {
    marginTop: '1rem', fontSize: '0.95rem'
  },
  link: {
    color: '#0070f3', textDecoration: 'none', fontWeight: 'bold'
  }
};
