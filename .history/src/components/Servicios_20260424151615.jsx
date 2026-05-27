import { useState, useEffect } from 'react';

function Servicios() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const servicios = [
    {
      titulo: 'Modalidad 40',
      descripcion: 'Aumenta tu pensión hasta 300% con retro activos. Programa especialmente diseñado para trabajadores del IMSS que desean mejorar su jubilación.',
      icon: '📊',
      color: '#1E40AF',
      imagen: 'Modalidad40.png'
    },
    {
      titulo: 'Asesorías Gratuitas',
      descripcion: 'Consulta sin costo sobre tus opciones financieras. Nuestros expertos te guiarán en cada paso del proceso.',
      icon: '💼',
      color: '#4DD9A6',
      imagen: 'asesorias.png'
    },
    {
      titulo: 'Ley 97',
      descripcion: 'Financiamiento especializado en Ley 97. Conoce las mejores opciones según tu situación actual.',
      icon: '📋',
      color: '#2D3748',
    },
    {
      titulo: 'Ley 73',
      descripcion: 'Opciones personalizadas bajo la Ley 73. Te ayudamos a maximizar tus beneficios.',
      icon: '✅',
      color: '#1E40AF',
    },
    {
      titulo: 'Modalidad 10',
      descripcion: 'Financiamiento flexible bajo Modalidad 10. Soluciones adaptadas a tu realidad económica.',
      icon: '🎯',
      color: '#4DD9A6',
    },
    {
      titulo: 'Créditos de Pensionados',
      descripcion: 'Créditos especiales para personas jubiladas. Con tasas competitivas y plazos accesibles.',
      icon: '💰',
      color: '#2D3748',
    },
  ];

  return (
    <section
      id="servicios"
      style={{
        padding: isMobile ? '60px 20px' : '80px 40px',
        backgroundColor: '#f8f9fa',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2
          style={{
            textAlign: 'center',
            fontSize: isMobile ? '32px' : '48px',
            marginBottom: isMobile ? '40px' : '60px',
            color: '#2D3748',
            fontWeight: 'bold',
          }}
        >
          Nuestros Servicios
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '30px',
          }}
        >
          {servicios.map((servicio, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                backgroundColor: 'white',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: hoveredIndex === index
                  ? '0 20px 40px rgba(0,0,0,0.15)'
                  : '0 4px 12px rgba(0,0,0,0.08)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: hoveredIndex === index ? 'translateY(-8px)' : 'translateY(0)',
                cursor: 'pointer',
                position: 'relative',
                minHeight: isMobile ? '350px' : '400px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Icon/Color background - O IMAGEN si la tienes */}
              <div
                style={{
                  backgroundColor: servicio.color,
                  height: hoveredIndex === index ? '60px' : '120px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: hoveredIndex === index ? '24px' : '48px',
                  transition: 'all 0.4s ease',
                  color: 'white',
                  overflow: 'hidden',
                }}
              >
                {/* Si tienes una imagen, reemplaza lo de arriba con: */}
                {servicio.imagen ? (
                  <img
                    src={servicio.imagen}
                    alt={servicio.titulo}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.4s ease',
                      transform: hoveredIndex === index ? 'scale(0.8)' : 'scale(1)',
                    }}
                  />
                ) : (
                  servicio.icon
                )}
              </div>

              {/* Content area */}
              <div
                style={{
                  padding: isMobile ? '24px' : '30px 24px',
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: hoveredIndex === index ? 'center' : 'flex-start',
                  transition: 'all 0.4s ease',
                }}
              >
                <h3
                  style={{
                    color: servicio.color,
                    marginTop: 0,
                    marginBottom: '12px',
                    fontSize: isMobile ? '18px' : '22px',
                    fontWeight: 'bold',
                    transition: 'all 0.4s ease',
                  }}
                >
                  {servicio.titulo}
                </h3>

                <p
                  style={{
                    color: '#666',
                    margin: 0,
                    fontSize: isMobile ? '14px' : '15px',
                    lineHeight: '1.6',
                    opacity: hoveredIndex === index ? 1 : 0.7,
                    maxHeight: hoveredIndex === index ? '200px' : isMobile ? '80px' : '60px',
                    overflow: 'hidden',
                    transition: 'all 0.4s ease',
                  }}
                >
                  {servicio.descripcion}
                </p>
              </div>

              {/* Bottom border effect */}
              <div
                style={{
                  height: '4px',
                  backgroundColor: servicio.color,
                  transition: 'all 0.4s ease',
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Servicios;