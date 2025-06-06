// pages/profilo.js

import { useState } from 'react';
import Head from 'next/head';

export default function Profilo() {
  const [formData, setFormData] = useState({
    nome: '',
    zona: '',
    servizi: [],
    lingue: '',
    descrizione: '',
    contatto: ''
  });

  const [foto, setFoto] = useState(null);
  const serviziDisponibili = ['Assistenza anziani', 'Pulizie', 'Cucina', 'Assistenza disabili', 'Accompagnamento', 'Somministrazione farmaci'];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        servizi: checked
          ? [...prev.servizi, value]
          : prev.servizi.filter((s) => s !== value)
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Profilo inviato:', formData, foto);
    alert('Dati salvati con successo!');
  };

  return (
    <>
      <Head>
        <title>Profilo Badante - Jobami</title>
      </Head>

      <div style={styles.container}>
        <h2>Completa il tuo profilo</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input name="nome" placeholder="Nome completo" onChange={handleChange} style={styles.input} required />
          <input name="zona" placeholder="Zona di lavoro (es. Roma, Milano...)" onChange={handleChange} style={styles.input} required />

          <label style={styles.label}>Servizi offerti:</label>
          <div style={styles.checkboxGroup}>
            {serviziDisponibili.map((servizio) => (
              <label key={servizio} style={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  value={servizio}
                  checked={formData.servizi.includes(servizio)}
                  onChange={handleChange}
                />{' '}
                {servizio}
              </label>
            ))}
          </div>

          <input name="lingue" placeholder="Lingue parlate" onChange={handleChange} style={styles.input} />
          <textarea
            name="descrizione"
            placeholder="Presentati in poche righe"
            onChange={handleChange}
            style={styles.textarea}
          />
          <input name="contatto" placeholder="Numero di telefono o WhatsApp" onChange={handleChange} style={styles.input} required />

          <label style={styles.label}>Foto profilo:</label>
          <input type="file" accept="image/*" onChange={(e) => setFoto(e.target.files[0])} style={styles.input} />

          <button type="submit" style={styles.button}>Salva profilo</button>
        </form>
      </div>
    </>
  );
}

const styles = {
  container: {
    maxWidth: '600px', margin: '3rem auto', padding: '2rem', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)', backgroundColor: '#fff'
  },
  form: {
    display: 'flex', flexDirection: 'column', gap: '1.2rem'
  },
  input: {
    padding: '0.9rem', fontSize: '1rem', borderRadius: '6px', border: '1px solid #ccc'
  },
  textarea: {
    padding: '1rem', fontSize: '1rem', borderRadius: '6px', border: '1px solid #ccc', resize: 'vertical', minHeight: '100px'
  },
  label: {
    fontWeight: 'bold', marginTop: '1rem'
  },
  checkboxGroup: {
    display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem'
  },
  checkboxLabel: {
    display: 'flex', alignItems: 'center', gap: '0.4rem'
  },
  button: {
    padding: '1rem', backgroundColor: '#0070f3', color: 'white', fontSize: '1rem', borderRadius: '6px', border: 'none', cursor: 'pointer'
  }
};
