function FloatingButtons() {
  const buttons = [
    {
      icon: '💬',
      label: 'WhatsApp',
      color: '#25D366',
      link: 'https://wa.me/524531285884?text=Hola%20tengo%20una%20consulta%20sobre%20ZAMEA%20GROUP',
    },
    {
      icon: '📞',
      label: 'Llamar',
      color: '#1E40AF',
      link: 'tel:+524531285884',
    },
    {
      icon: '✉️',
      label: 'Email',
      color: '#4DD9A6',
      link: 'mailto:info@zamea.com',
    },
  ];

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        zIndex: 999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: '15px',
      }}
    >
      {/* Todos los botones siempre visibles */}
      {buttons.map((btn, index) => (
        <a
          key={index}
          href={btn.link}
          target={btn.link.startsWith('http') ? '_blank' : undefined}
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            backgroundColor: btn.color,
            color: 'white',
            padding: '14px 24px',
            borderRadius: '50px',
            textDecoration: 'none',
            fontWeight: '600',
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
            animation: `slideInRight 0.4s ease ${index * 0.1}s backwards`,
            transition: 'all 0.3s ease',
            cursor: 'pointer',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateX(-8px)';
            e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.3)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateX(0)';
            e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
          }}
        >
          <span style={{ fontSize: '20px' }}>{btn.icon}</span>
          {btn.label}
        </a>
      ))}

      <style>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}

export default FloatingButtons;