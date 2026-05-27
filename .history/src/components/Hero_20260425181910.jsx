import { useState, useEffect } from 'react';

function Hero() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
 
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section
      id="inicio"
      style={{
        backgroundColor: '#1E40AF',
        color: 'white',
        padding: isMobile ? '100px 20px 60px 20px' : '120px 40px 80px 40px',
        textAlign: 'center',
        marginTop: '60px',
        backgroundImage: 'linear-gradient(135deg, #1E40AF 0%, #1e3a8a 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative elements */}
      <div
        style={{
          position: 'absolute',
          top: '-50px',
          right: '-100px',
          width: '300px',
          height: '300px',
          backgroundColor: '#4DD9A6',
          borderRadius: '50%',
          opacity: '0.1',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-100px',
          left: '-50px',
          width: '400px',
          height: '400px',
          backgroundColor: '#4DD9A6',
          borderRadius: '50%',
          opacity: '0.1',
        }}
      />

      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Logo */}
        <div style={{ marginBottom: '30px' }}>
          <img
            src={require('images/Logo.png')}
            alt="ZAMEA GROUP Logo"
            style={{
              maxWidth: isMobile ? '120px' : '160px',
              height: 'auto',
              animation: 'fadeInDown 0.8s ease',
            }}
          />
        </div>

        <h2
          style={{
            fontSize: '56px',
            margin: '0 0 20px 0',
            fontWeight: 'bold',
            animation: 'fadeInDown 0.8s ease',
          }}
        >
          Aumenta tu Pensión
        </h2>
        <p
          style={{
            fontSize: '22px',
            margin: '0 0 30px 0',
            opacity: '0.95',
            animation: 'fadeInUp 0.8s ease 0.2s backwards',
          }}
        >
          Somos expertos en financiamiento IMSS. Modalidad 40, Ley 97, Ley 73 y más.
        </p>
        <button
          style={{
            backgroundColor: '#4DD9A6',
            color: '#2D3748',
            padding: '15px 40px',
            fontSize: '16px',
            fontWeight: 'bold',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            animation: 'fadeInUp 0.8s ease 0.4s backwards',
          }}
          onMouseOver={(e) => {
            e.target.style.transform = 'translateY(-3px)';
            e.target.style.boxShadow = '0 10px 25px rgba(0,0,0,0.2)';
          }}
          onMouseOut={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = 'none';
          }}
        >
          Consulta Gratis
        </button>
      </div>

      <style>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
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

export default Hero;