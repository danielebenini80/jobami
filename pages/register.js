import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { useRouter } from 'next/router';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('assistente');
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      alert(error.message);
    } else {
      const user = data.user;
      if (user) {
        await supabase.from('utenti').insert({
          id: user.id,
          email,
          ruolo: role,
          nome: '',
          cognome: '',
        });
      }
      router.push('/dashboard');
    }
  };

  return (
    <form onSubmit={handleRegister} style={{ padding: 20 }}>
      <h2>Registrazione</h2>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <br />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <br />
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="assistente">Assistente</option>
        <option value="datore">Datore</option>
      </select>
      <br />
      <button type="submit">Registrati</button>
    </form>
  );
}