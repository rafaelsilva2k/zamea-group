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
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        padding: isMobile ? '140px 20px 120px' : '180px 40px 140px',
        textAlign: 'center',
        marginTop: '60px',
        backgroundImage:
          "linear-gradient(rgba(0,0,0,.45), rgba(0,0,0,.45)), url('/images/tryout.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: isMobile ? '75vh' : '90vh',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '900px', width: '100%', }}>
        {/* Logo */}
        

        <h2
          style={{
            fontSize: isMobile ? '36px' : '56px',
            margin: '0 0 10px 0',
            fontWeight: 'bold',
            animation: 'fadeInDown 0.8s ease 0.1s backwards',
          }}
        >
          Aumenta tu Pensión
        </h2>
        <p
          style={{
            fontSize: isMobile ? '16px' : '22px',
            margin: '0 0 30px 0',
            opacity: '0.95',
            animation: 'fadeInUp 0.8s ease 0.2s backwards',
          }}
        >
          Transformado años de trabajo en tranquilidad
        </p>
        <button
          onClick={() => {
            const contactoSection = document.getElementById('contacto');
            if (contactoSection) {
              contactoSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          style={{
            backgroundColor: '#63ab32',
            color: '#f4f5f5',
            padding: isMobile ? '12px 30px' : '15px 40px',
            fontSize: isMobile ? '14px' : '16px',
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
      {/* Mensaje inferior */}
<div
  style={{
    position: 'absolute',
    bottom: isMobile ? '25px' : '35px',
    left: isMobile ? '20px' : '50px',
    maxWidth: isMobile ? '90%' : '420px',
    textAlign: 'left',
    zIndex: 2,
  }}
>
  <div
      style={{
          width:'60px', 
          height:'4px',
          background:'#63ab32',
          borderRadius:'20px',
          marginBottom:'18px'
      }}
  />
  <p
    style={{
      fontSize: isMobile ? '160px' : '20px',
      fontWeight: '600',
      marginBottom: '8px',
      color: '#ffffff',
      lineHeight: '1.4',
    }}
  >
    Tu tranquilidad es nuestra prioridad.
  </p>

  <p
    style={{
      fontSize: isMobile ? '14px' : '16px',
      color: 'rgba(255,255,255,.85)',
      lineHeight: '1.6',
      margin: 0,
    }}
  >
    Te acompañamos desde la primera asesoría hasta que
    recibes tu pensión o el financiamiento que necesitas.
  </p>
</div>
    </section>
  );
}

export default Hero;
