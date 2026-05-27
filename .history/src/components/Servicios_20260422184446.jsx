function Servicios() {
  const servicios = [
    {
      titulo: 'Modalidad 40',
      descripcion: 'Aumenta tu pensión hasta 300% con retro activos'
    },
    {
      titulo: 'Asesorías Gratuitas',
      descripcion: 'Consulta sin costo sobre tus opciones financieras'
    },
    {
      titulo: 'Ley 97',
      descripcion: 'Financiamiento especializado en Ley 97'
    },
    {
      titulo: 'Ley 73',
      descripcion: 'Conoce cómo la Ley 73 puede beneficiarte'
    },
    {
      titulo: 'Modalidad 10',
      descripcion: 'Opciones de financiamiento bajo Modalidad 10'
    },
    {
      titulo: 'Créditos de Pensionados',
      descripcion: 'Créditos especiales para personas jubiladas'
    }
  ];

  return (
    <section id="servicios" style={{
      padding: '60px 20px',
      backgroundColor: '#f5f5f5'
    }}>
      <h2 style={{ textAlign: 'center', fontSize: '36px', marginBottom: '40px', color: '#2D3748' }}>
        Nuestros Servicios
      </h2>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '20px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {servicios.map((servicio, index) => (
          <div key={index} style={{
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            borderTop: '4px solid #4DD9A6'
          }}>
            <h3 style={{ color: '#1E40AF', marginTop: '0' }}>{servicio.titulo}</h3>
            <p style={{ color: '#666' }}>{servicio.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Servicios;
