import { useState, useEffect } from 'react';

function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
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
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [lastScrollY]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Inicio', id: 'inicio' },
    { label: 'Servicios', id: 'servicios' },
    { label: 'Sobre Nosotros', id: 'nosotros' },
    { label: 'Contactanos', id: 'contacto' },
  ];

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: '#004b23',
          padding: isMobile ? '12px 16px' : '15px 30px',
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
              fontSize: isMobile ? '18px' : '24px',
              fontWeight: 'bold',
            }}
          >
            ZAMEA GROUP
          </h1>
        </button>

        {/* Desktop Nav */}
        {!isMobile && (
          <nav style={{ display: 'flex', gap: '30px' }}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
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
                {item.label}
              </button>
            ))}
          </nav>
        )}

        {/* Mobile Hamburger Button */}
        {isMobile && (
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '28px',
              cursor: 'pointer',
              color: '#2D3748',
              padding: '5px',
            }}
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        )}
      </header>

      {/* Mobile Menu */}
      {isMobile && isMobileMenuOpen && (
        <>
          {/* Overlay */}
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0,0,0,0.3)',
              zIndex: 999,
            }}
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Menu */}
          <nav
            style={{
              position: 'fixed',
              top: '60px',
              left: 0,
              right: 0,
              backgroundColor: '#4DD9A6',
              zIndex: 1000,
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            }}
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#2D3748',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  padding: '12px 16px',
                  textAlign: 'left',
                  transition: 'all 0.3s',
                  borderRadius: '8px',
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = 'rgba(255,255,255,0.3)';
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                }}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </>
      )}
    </>
  );
}

export default Header;