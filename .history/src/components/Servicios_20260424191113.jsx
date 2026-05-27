import { useState, useEffect } from 'react';

function Servicios() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [selectedIndex, setSelectedIndex] = useState(null);

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
      imagen: 'Modalidad40.png'
    },
    {
      titulo: 'Ley 73',
      descripcion: 'Opciones personalizadas bajo la Ley 73. Te ayudamos a maximizar tus beneficios.',
      icon: '✅',
      color: '#1E40AF',
      imagen: 'asesorias.png'
    },
    {
      titulo: 'Modalidad 10',
      descripcion: 'Financiamiento flexible bajo Modalidad 10. Soluciones adaptadas a tu realidad económica.',
      icon: '🎯',
      color: '#4DD9A6',
      imagen: 'Modalidad40.png'
      
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
              onClick={() => {
                if (isMobile) {
                  setSelectedIndex(selectedIndex === index ? null : index);
                }
              }}
              onMouseEnter={() => !isMobile && setHoveredIndex(index)}
              onMouseLeave={() => !isMobile && setHoveredIndex(null)}
              style={{
                backgroundColor: servicio.color,
                color: 'white',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: hoveredIndex === index
                  ? '0 20px 40px rgba(0,0,0,0.2)'
                  : '0 4px 12px rgba(0,0,0,0.1)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: hoveredIndex === index ? 'translateY(-8px)' : 'translateY(0)',
                cursor: 'pointer',
                position: 'relative',
                minHeight: isMobile ? '280px' : '360px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Icon/Color background - GRANDE POR DEFECTO */}
              <div
                style={{
                  backgroundColor: servicio.color,
                  height: (isMobile && selectedIndex === index) ? '80px' : hoveredIndex === index ? '80px' : isMobile ? '200px' : '220px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: (isMobile && selectedIndex === index) ? '24px' : hoveredIndex === index ? '24px' : '56px',
                  transition: 'all 0.4s ease',
                  color: 'white',
                  overflow: 'hidden',
                  flexShrink: 0,
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
                      transform: (isMobile && selectedIndex === index) || hoveredIndex === index ? 'scale(0.8)' : 'scale(1)',
                    }}
                  />
                ) : (
                  servicio.icon
                )}
              </div>

              {/* Content area - TÍTULO SIEMPRE, DESCRIPCIÓN AL HOVER */}
              <div
                style={{
                  padding: isMobile ? '20px' : '24px',
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  transition: 'all 0.4s ease',
                  backgroundColor: servicio.color,
                }}
              >
                <h3
                  style={{
                    marginTop: 0,
                    marginBottom: (isMobile && selectedIndex === index) || hoveredIndex === index ? '12px' : '0px',
                    fontSize: isMobile ? '20px' : '22px',
                    fontWeight: 'bold',
                    transition: 'all 0.4s ease',
                    color: 'white',
                  }}
                >
                  {servicio.titulo}
                </h3>

                {/* Descripción - APARECE AL HOVER EN DESKTOP O CLICK EN MÓVIL */}
                {(isMobile ? selectedIndex === index : hoveredIndex === index) && (
                  <p
                    style={{
                      color: 'white',
                      margin: 0,
                      fontSize: '14px',
                      lineHeight: '1.6',
                      opacity: 1,
                      animation: 'fadeIn 0.3s ease',
                      transition: 'all 0.4s ease',
                    }}
                  >
                    {servicio.descripcion}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}

export default Servicios;