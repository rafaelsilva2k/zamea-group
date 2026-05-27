import { useState } from 'react';

function FloatingButtons() {
  const [isOpen, setIsOpen] = useState(false);

  const buttons = [
    {
      icon: '💬',
      label: 'WhatsApp',
      color: '#25D366',
      link: 'https://wa.me/5551234567?text=Hola%20tengo%20una%20consulta%20sobre%20ZAMEA%20GROUP',
    },
    {
      icon: '📞',
      label: 'Llamar',
      color: '#1E40AF',
      link: 'tel:+5551234567',
    },
    {
      icon: '✉️',
      label: 'Email',
      color: '#4DD9A6',
      link: 'mailto:info@zamea.com',
    },
  ];

  return (
    <>
      {/* Background overlay when menu is open */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            bottom: 0,
            right: 0,
            top: 0,
            left: 0,
            backgroundColor: 'transparent',
            zIndex: 998,
            cursor: 'pointer',
          }}
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Floating buttons */}
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
        {/* Individual buttons (visible when menu is open) */}
        {isOpen &&
          buttons.map((btn, index) => (
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
                padding: '12px 20px',
                borderRadius: '50px',
                textDecoration: 'none',
                fontWeight: '600',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                animation: `slideInRight 0.3s ease ${index * 0.1}s backwards`,
                transition: 'all 0.3s ease',
                cursor: 'pointer',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateX(-5px)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.2)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateX(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
              }}
            >
              <span style={{ fontSize: '20px' }}>{btn.icon}</span>
              {btn.label}
            </a>
          ))}

        {/* Main toggle button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            backgroundColor: '#1E40AF',
            color: 'white',
            border: 'none',
            fontSize: '28px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 6px 20px rgba(30, 64, 175, 0.4)',
            transition: 'all 0.3s ease',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'scale(1.1)';
            e.currentTarget.style.boxShadow = '0 8px 30px rgba(30, 64, 175, 0.5)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(30, 64, 175, 0.4)';
          }}
        >
          {isOpen ? '✕' : '💬'}
        </button>
      </div>

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
    </>
  );
}

export default FloatingButtons;