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
        <div style={styles.logoContainer}>
          <img src="/logo.png" alt="Jobami Logo" style={styles.logo} />
          <h1 style={styles.logoText}>Jobami</h1>
        </div>
        <nav>
          <Link href="/" style={styles.navLink}>Home</Link>
          <Link href="/login" style={styles.navLink}>Login</Link>
          <Link href="/contatti" style={styles.navLink}>Contatti</Link>
        </nav>
      </header>

      <main style={styles.main}>
        <section style={styles.hero}>
          <h2 style={styles.heroTitle}>Trova o Offri Assistenza Domiciliare in Italia</h2>
          <p style={styles.subtitle}>Il punto d'incontro tra famiglie e professionisti dell'assistenza.</p>
          <div style={styles.buttonGroup}>
            <Link href="/badanti" style={styles.button}>Cerco una badante</Link>
            <Link href="/signup" style={styles.button}>Offro assistenza</Link>
          </div>
        </section>

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
  logoContainer: {
    display: 'flex', alignItems: 'center', gap: '0.5rem'
  },
  logo: {
    height: '60px'
  },
  logoText: {
    fontSize: '1.8rem', fontWeight: 'bold', margin: 0
  },
  navLink: {
    marginLeft: '1rem', color: 'white', textDecoration: 'none', fontSize: '1.1rem'
  },
  main: {
    textAlign: 'center', padding: '3rem 1rem'
  },
  hero: {
    backgroundColor: '#f0f4ff', padding: '3rem 1rem', borderRadius: '12px', marginBottom: '3rem'
  },
  heroTitle: {
    fontSize: '2.8rem', marginBottom: '1rem', color: '#0070f3'
  },
  subtitle: {
    fontSize: '1.2rem', marginBottom: '2rem', color: '#333'
  },
  buttonGroup: {
    display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap'
  },
  button: {
    padding: '1rem 2rem', backgroundColor: '#0070f3', color: 'white', borderRadius: '8px', textDecoration: 'none', fontSize: '1rem', fontWeight: 'bold'
  },
  features: {
    display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap'
  },
  featureBox: {
    maxWidth: '300px', padding: '1.5rem', border: '1px solid #eee', borderRadius: '8px', backgroundColor: 'white', boxShadow: '0 4px 10px rgba(0,0,0,0.05)'
  },
  footer: {
    textAlign: 'center', padding: '2rem 1rem', borderTop: '1px solid #eee', marginTop: '3rem', backgroundColor: '#f9f9f9'
  }
};
