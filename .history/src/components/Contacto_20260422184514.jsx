import { useState } from 'react';

function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    servicio: '',
    mensaje: ''
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Aquí irá la URL de Make.com cuando la tengas
      // await fetch('TU_URL_DE_WEBHOOK_DE_MAKE', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });

      setEnviado(true);
      setFormData({ nombre: '', email: '', telefono: '', servicio: '', mensaje: '' });
      
      setTimeout(() => setEnviado(false), 5000);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <section id="contacto" style={{
      padding: '60px 20px',
      backgroundColor: '#white'
    }}>
      <h2 style={{ textAlign: 'center', fontSize: '36px', marginBottom: '40px', color: '#2D3748' }}>
        Contacta con Nosotros
      </h2>

      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        {enviado && (
          <div style={{
            backgroundColor: '#4DD9A6',
            color: '#2D3748',
            padding: '15px',
            borderRadius: '5px',
            marginBottom: '20px',
            textAlign: 'center',
            fontWeight: 'bold'
          }}>
            ✅ ¡Consulta enviada! Te contactaremos pronto.
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <input
            type="text"
            name="nombre"
            placeholder="Tu nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
            style={{
              padding: '12px',
              border: '1px solid #ddd',
              borderRadius: '5px',
              fontSize: '14px'
            }}
          />

          <input
            type="email"
            name="email"
            placeholder="Tu email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              padding: '12px',
              border: '1px solid #ddd',
              borderRadius: '5px',
              fontSize: '14px'
            }}
          />

          <input
            type="tel"
            name="telefono"
            placeholder="Tu teléfono"
            value={formData.telefono}
            onChange={handleChange}
            required
            style={{
              padding: '12px',
              border: '1px solid #ddd',
              borderRadius: '5px',
              fontSize: '14px'
            }}
          />

          <select
            name="servicio"
            value={formData.servicio}
            onChange={handleChange}
            required
            style={{
              padding: '12px',
              border: '1px solid #ddd',
              borderRadius: '5px',
              fontSize: '14px'
            }}
          >
            <option value="">Elige un servicio</option>
            <option value="Modalidad 40">Modalidad 40</option>
            <option value="Asesorías gratuitas">Asesorías gratuitas</option>
            <option value="Ley 97">Ley 97</option>
            <option value="Ley 73">Ley 73</option>
            <option value="Modalidad 10">Modalidad 10</option>
            <option value="Créditos de pensionados">Créditos de pensionados</option>
          </select>

          <textarea
            name="mensaje"
            placeholder="Tu mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            rows="5"
            style={{
              padding: '12px',
              border: '1px solid #ddd',
              borderRadius: '5px',
              fontSize: '14px'
            }}
          />

          <button
            type="submit"
            style={{
              backgroundColor: '#1E40AF',
              color: 'white',
              padding: '15px',
              fontSize: '16px',
              fontWeight: 'bold',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Enviar Consulta
          </button>
        </form>

        <div style={{ marginTop: '30px', textAlign: 'center' }}>
          <p style={{ color: '#666', marginBottom: '10px' }}>O contacta directamente:</p>
          <a href="https://wa.me/5551234567?text=Hola%20tengo%20una%20consulta%20sobre%20ZAMEA%20GROUP"
             target="_blank"
             rel="noopener noreferrer"
             style={{
               backgroundColor: '#25D366',
               color: 'white',
               padding: '12px 24px',
               borderRadius: '5px',
               textDecoration: 'none',
               fontWeight: 'bold',
               display: 'inline-block'
             }}>
            💬 Contactar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contacto;
