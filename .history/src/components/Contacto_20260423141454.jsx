import { useState } from 'react';

function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    servicio: '',
    mensaje: '',
  });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
    setFormData({ nombre: '', email: '', telefono: '', servicio: '', mensaje: '' });
    setTimeout(() => setEnviado(false), 4000);
  };

  return (
    <section
      id="contacto"
      style={{
        padding: '100px 40px',
        background: 'linear-gradient(135deg, #4DD9A6 0%, #1E40AF 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative circles */}
      <div
        style={{
          position: 'absolute',
          top: '-100px',
          right: '-100px',
          width: '300px',
          height: '300px',
          backgroundColor: 'white',
          borderRadius: '50%',
          opacity: '0.05',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-50px',
          left: '-50px',
          width: '250px',
          height: '250px',
          backgroundColor: 'white',
          borderRadius: '50%',
          opacity: '0.05',
        }}
      />

      <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <h2
          style={{
            textAlign: 'center',
            fontSize: '44px',
            marginBottom: '50px',
            color: 'white',
            fontWeight: 'bold',
          }}
        >
          Contacta con Nosotros
        </h2>

        <div
          style={{
            backgroundColor: 'white',
            borderRadius: '20px',
            padding: '50px 40px',
            boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
          }}
        >
          {enviado && (
            <div
              style={{
                backgroundColor: '#4DD9A6',
                color: '#2D3748',
                padding: '16px 20px',
                borderRadius: '12px',
                marginBottom: '24px',
                textAlign: 'center',
                fontWeight: 'bold',
                animation: 'slideDown 0.4s ease',
              }}
            >
              ✅ ¡Consulta enviada! Te contactaremos pronto.
            </div>
          )}

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <label
                style={{
                  display: 'block',
                  color: '#2D3748',
                  fontWeight: '600',
                  marginBottom: '8px',
                  fontSize: '14px',
                }}
              >
                Tu Nombre *
              </label>
              <input
                type="text"
                name="nombre"
                placeholder="Juan García"
                value={formData.nombre}
                onChange={handleChange}
                required
                style={{
                  padding: '14px 16px',
                  border: '2px solid #e2e8f0',
                  borderRadius: '8px',
                  fontSize: '16px',
                  width: '100%',
                  boxSizing: 'border-box',
                  transition: 'all 0.3s ease',
                  fontFamily: 'inherit',
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#1E40AF';
                  e.target.style.boxShadow = '0 0 0 3px rgba(30, 64, 175, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#e2e8f0';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>

            <div>
              <label
                style={{
                  display: 'block',
                  color: '#2D3748',
                  fontWeight: '600',
                  marginBottom: '8px',
                  fontSize: '14px',
                }}
              >
                Tu Email *
              </label>
              <input
                type="email"
                name="email"
                placeholder="tu@email.com"
                value={formData.email}
                onChange={handleChange}
                required
                style={{
                  padding: '14px 16px',
                  border: '2px solid #e2e8f0',
                  borderRadius: '8px',
                  fontSize: '16px',
                  width: '100%',
                  boxSizing: 'border-box',
                  transition: 'all 0.3s ease',
                  fontFamily: 'inherit',
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#1E40AF';
                  e.target.style.boxShadow = '0 0 0 3px rgba(30, 64, 175, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#e2e8f0';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>

            <div>
              <label
                style={{
                  display: 'block',
                  color: '#2D3748',
                  fontWeight: '600',
                  marginBottom: '8px',
                  fontSize: '14px',
                }}
              >
                Tu Teléfono *
              </label>
              <input
                type="tel"
                name="telefono"
                placeholder="(55) 1234-5678"
                value={formData.telefono}
                onChange={handleChange}
                required
                style={{
                  padding: '14px 16px',
                  border: '2px solid #e2e8f0',
                  borderRadius: '8px',
                  fontSize: '16px',
                  width: '100%',
                  boxSizing: 'border-box',
                  transition: 'all 0.3s ease',
                  fontFamily: 'inherit',
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#1E40AF';
                  e.target.style.boxShadow = '0 0 0 3px rgba(30, 64, 175, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#e2e8f0';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>

            <div>
              <label
                style={{
                  display: 'block',
                  color: '#2D3748',
                  fontWeight: '600',
                  marginBottom: '8px',
                  fontSize: '14px',
                }}
              >
                ¿Qué servicio te interesa? *
              </label>
              <select
                name="servicio"
                value={formData.servicio}
                onChange={handleChange}
                required
                style={{
                  padding: '14px 16px',
                  border: '2px solid #e2e8f0',
                  borderRadius: '8px',
                  fontSize: '16px',
                  width: '100%',
                  boxSizing: 'border-box',
                  transition: 'all 0.3s ease',
                  fontFamily: 'inherit',
                  backgroundColor: 'white',
                  cursor: 'pointer',
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#1E40AF';
                  e.target.style.boxShadow = '0 0 0 3px rgba(30, 64, 175, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#e2e8f0';
                  e.target.style.boxShadow = 'none';
                }}
              >
                <option value="">Selecciona un servicio...</option>
                <option value="Modalidad 40">Modalidad 40</option>
                <option value="Asesorías gratuitas">Asesorías gratuitas</option>
                <option value="Ley 97">Ley 97</option>
                <option value="Ley 73">Ley 73</option>
                <option value="Modalidad 10">Modalidad 10</option>
                <option value="Créditos de pensionados">Créditos de pensionados</option>
              </select>
            </div>

            <div>
              <label
                style={{
                  display: 'block',
                  color: '#2D3748',
                  fontWeight: '600',
                  marginBottom: '8px',
                  fontSize: '14px',
                }}
              >
                Tu Mensaje
              </label>
              <textarea
                name="mensaje"
                placeholder="Cuéntanos más sobre tus necesidades..."
                value={formData.mensaje}
                onChange={handleChange}
                rows="5"
                style={{
                  padding: '14px 16px',
                  border: '2px solid #e2e8f0',
                  borderRadius: '8px',
                  fontSize: '16px',
                  width: '100%',
                  boxSizing: 'border-box',
                  transition: 'all 0.3s ease',
                  fontFamily: 'inherit',
                  resize: 'vertical',
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#1E40AF';
                  e.target.style.boxShadow = '0 0 0 3px rgba(30, 64, 175, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#e2e8f0';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>

            <button
              type="submit"
              style={{
                backgroundColor: '#1E40AF',
                color: 'white',
                padding: '16px 32px',
                fontSize: '16px',
                fontWeight: 'bold',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                marginTop: '10px',
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#1a3a8a';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 10px 25px rgba(30, 64, 175, 0.3)';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = '#1E40AF';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              Enviar Consulta
            </button>
          </form>

          {/* Contact options */}
          <div
            style={{
              marginTop: '40px',
              paddingTop: '40px',
              borderTop: '2px solid #e2e8f0',
            }}
          >
            <p
              style={{
                textAlign: 'center',
                color: '#666',
                marginBottom: '20px',
                fontSize: '16px',
              }}
            >
              O contacta directamente:
            </p>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '15px',
              }}
            >
              <a
                href="tel:524531285884"
                style={{
                  backgroundColor: '#f0f4ff',
                  color: '#1E40AF',
                  padding: '16px',
                  borderRadius: '8px',
                  textAlign: 'center',
                  textDecoration: 'none',
                  fontWeight: '600',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = '#1E40AF';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = '#f0f4ff';
                  e.currentTarget.style.color = '#1E40AF';
                }}
              >
                📞 Llamar: (55) 1234-5678
              </a>
              <a
                href="https://wa.me/4531285884?text=Hola%20tengo%20una%20consulta%20sobre%20ZAMEA%20GROUP"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: '#f0fff4',
                  color: '#4DD9A6',
                  padding: '16px',
                  borderRadius: '8px',
                  textAlign: 'center',
                  textDecoration: 'none',
                  fontWeight: '600',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = '#4DD9A6';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = '#f0fff4';
                  e.currentTarget.style.color = '#4DD9A6';
                }}
              >
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}

export default Contacto;