import { useState, useEffect } from 'react';

function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Si scrollea hacia arriba o está casi al top, mostrar
      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        setIsVisible(true);
      }
      // Si scrollea hacia abajo más de 100px, ocultar
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };


    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: '#4DD9A6',
        padding: '15px 30px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0 2px 15px rgba(0,0,0,0.1)',
        zIndex: 1000,
        transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'transform 0.3s ease',
      }}
    >
      <button
        onClick={() => scrollToSection('inicio')}
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: 0,
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <h1
          style={{
            margin: 0,
            color: '#2D3748',
            fontSize: '24px',
            fontWeight: 'bold',
          }}
        >
          ZAMEA GROUP
        </h1>
      </button>

      <nav style={{ display: 'flex', gap: '30px' }}>
        <button
          onClick={() => scrollToSection('inicio')}
          style={{
            background: 'none',
            border: 'none',
            color: '#2D3748',
            fontSize: '16px',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'opacity 0.3s',
          }}
          onMouseOver={(e) => (e.target.style.opacity = '0.7')}
          onMouseOut={(e) => (e.target.style.opacity = '1')}
        >
          Inicio
        </button>
        <button
          onClick={() => scrollToSection('servicios')}
          style={{
            background: 'none',
            border: 'none',
            color: '#2D3748',
            fontSize: '16px',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'opacity 0.3s',
          }}
          onMouseOver={(e) => (e.target.style.opacity = '0.7')}
          onMouseOut={(e) => (e.target.style.opacity = '1')}
        >
          Servicios
        </button>
        <button
          onClick={() => scrollToSection('nosotros')}
          style={{
            background: 'none',
            border: 'none',
            color: '#2D3748',
            fontSize: '16px',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'opacity 0.3s',
          }}
          onMouseOver={(e) => (e.target.style.opacity = '0.7')}
          onMouseOut={(e) => (e.target.style.opacity = '1')}
        >
          Sobre Nosotros
        </button>
        <button
          onClick={() => scrollToSection('contacto')}
          style={{
            background: 'none',
            border: 'none',
            color: '#2D3748',
            fontSize: '16px',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'opacity 0.3s',
          }}
          onMouseOver={(e) => (e.target.style.opacity = '0.7')}
          onMouseOut={(e) => (e.target.style.opacity = '1')}
        >
          Contacto
        </button>
      </nav>
    </header>
  );
}

export default Header;