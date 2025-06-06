// pages/index.js

import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Jobami - Assistenza Domiciliare</title>
        <meta name="description" content="Trova o offri assistenza domiciliare in Italia con Jobami." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header style={styles.header}>
        <img src="/logo.svg" alt="Jobami Logo" style={{ height: '50px' }} />
        <nav>
          <Link href="/">Home</Link>
          <Link href="/login" style={styles.navLink}>Login</Link>
          <Link href="/contatti" style={styles.navLink}>Contatti</Link>
        </nav>
      </header>

      <main style={styles.main}>
        <h1 style={styles.title}>Trova o Offri Assistenza Domiciliare in Italia</h1>
        <p style={styles.subtitle}>Il punto d'incontro tra famiglie e professionisti dell'assistenza.</p>
        <div style={styles.buttonGroup}>
          <Link href="/badanti" style={styles.button}>Cerco una badante</Link>
          <Link href="/signup" style={styles.button}>Offro assistenza</Link>
        </div>

        <section style={styles.features}>
          <div style={styles.featureBox}>
            <h3>Recensioni verificate</h3>
            <p>Affidati all’esperienza di altri utenti prima di scegliere.</p>
          </div>
          <div style={styles.featureBox}>
            <h3>Profili dettagliati</h3>
            <p>Consulta competenze, lingue parlate, disponibilità e altro.</p>
          </div>
          <div style={styles.featureBox}>
            <h3>Servizio gratuito</h3>
            <p>Nessun costo per trovare o offrire assistenza.</p>
          </div>
        </section>
      </main>

      <footer style={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Jobami. Tutti i diritti riservati.</p>
      </footer>
    </>
  );
}

const styles = {
  header: {
    display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 2rem', backgroundColor: '#0070f3', color: 'white'
  },
  navLink: {
    marginLeft: '1rem', color: 'white', textDecoration: 'none'
  },
  main: {
    textAlign: 'center', padding: '3rem 1rem'
  },
  title: {
    fontSize: '2.5rem', marginBottom: '1rem'
  },
  subtitle: {
    fontSize: '1.2rem', marginBottom: '2rem'
  },
  buttonGroup: {
    display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '3rem'
  },
  button: {
    padding: '1rem 2rem', backgroundColor: '#0070f3', color: 'white', borderRadius: '8px', textDecoration: 'none'
  },
  features: {
    display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap'
  },
  featureBox: {
    maxWidth: '300px', padding: '1rem', border: '1px solid #eee', borderRadius: '8px'
  },
  footer: {
    textAlign: 'center', padding: '2rem 1rem', borderTop: '1px solid #eee', marginTop: '3rem'
  }
};
