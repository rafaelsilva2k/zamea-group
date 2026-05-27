function Header() {
  return (
    <header style={{
      backgroundColor: '#4DD9A6',
      padding: '20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <h1 style={{ margin: '0', color: '#2D3748', fontSize: '24px' }}>ZAMEA GROUP</h1>
      </div>
      <nav style={{ display: 'flex', gap: '20px' }}>
        <a href="#inicio" style={{ color: '#2D3748', textDecoration: 'none', fontWeight: '500' }}>Inicio</a>
        <a href="#servicios" style={{ color: '#2D3748', textDecoration: 'none', fontWeight: '500' }}>Servicios</a>
        <a href="#sob" style={{ color: '#2D3748', textDecoration: 'none', fontWeight: '500' }}>Sobre Nosotros</a>
        <a href="#contacto" style={{ color: '#2D3748', textDecoration: 'none', fontWeight: '500' }}>Contacto</a>
      </nav>
    </header>
  );
}

export default Header;


