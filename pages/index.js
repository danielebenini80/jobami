import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Benvenuto su Jobami</h1>
      <p>
        <Link href="/login">Accedi</Link> o <Link href="/register">Registrati</Link>
      </p>
    </div>
  );
}