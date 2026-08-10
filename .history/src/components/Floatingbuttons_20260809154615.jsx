

import { useState, useEffect } from 'react';

function FloatingButtons() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [showPhones, setShowPhones] = useState(false);

  // Detectar tamaño de pantalla
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Datos de contacto
  const whatsappLink =
    'https://wa.me/525574047058?text=Hola%20tengo%20una%20consulta%20sobre%20ZAMEA%20GROUP';

  const phones = [
    {
      name: 'Arturo Frías',
      number: '55 3471 7952',
      link: 'tel:+525534717952',
    },
    {
      name: 'Rogelio Soto',
      number: '55 1361 8119',
      link: 'tel:+525513618119',
    },
  ];

  // =========================
  // MÓVIL
  // =========================
  if (isMobile) {
    return (
      <>
        {/* Fondo transparente para cerrar el menú */}
        {isOpen && (
          <div
            onClick={() => {
              setIsOpen(false);
              setShowPhones(false);
            }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 998,
              backgroundColor: 'transparent',
            }}
          />
        )}

        {/* CONTENEDOR DE BOTONES */}
        <div
          style={{
            position: 'fixed',
            right: '16px',
            bottom: '16px',
            zIndex: 999,

            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            gap: '10px',

            width: 'auto',
          }}
        >
          {/* =========================
              MENÚ EXPANDIDO
          ========================= */}
          {isOpen && (
            <>
              {/* WHATSAPP */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  setIsOpen(false);
                  setShowPhones(false);
                }}
                style={{
                  width: '170px',
                  boxSizing: 'border-box',

                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',

                  backgroundColor: '#25D366',
                  color: 'white',

                  padding: '12px 18px',
                  borderRadius: '50px',

                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '14px',

                  boxShadow: '0 4px 15px rgba(0,0,0,0.2)',

                  animation: 'slideInRight 0.25s ease',
                }}
              >
                <span style={{ fontSize: '18px' }}>💬</span>
                WhatsApp
              </a>

              {/* OPCIONES DE TELÉFONO */}
              {showPhones && (
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',

                    width: '200px',

                    animation: 'slideInRight 0.25s ease',
                  }}
                >
                  {phones.map((phone, index) => (
                    <a
                      key={index}
                      href={phone.link}
                      onClick={() => {
                        setIsOpen(false);
                        setShowPhones(false);
                      }}
                      style={{
                        backgroundColor: 'white',
                        color: '#1E40AF',

                        padding: '10px 14px',

                        borderRadius: '12px',

                        textDecoration: 'none',

                        boxShadow: '0 4px 15px rgba(0,0,0,0.18)',

                        display: 'flex',
                        flexDirection: 'column',

                        alignItems: 'flex-start',

                        lineHeight: '1.3',
                      }}
                    >
                      <strong
                        style={{
                          fontSize: '13px',
                        }}
                      >
                        {phone.name}
                      </strong>

                      <span
                        style={{
                          fontSize: '12px',
                          marginTop: '3px',
                        }}
                      >
                        📞 {phone.number}
                      </span>
                    </a>
                  ))}
                </div>
              )}

              {/* LLAMAR */}
              <button
                onClick={() => setShowPhones(!showPhones)}
                style={{
                  width: '170px',
                  boxSizing: 'border-box',

                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',

                  backgroundColor: '#1E40AF',
                  color: 'white',

                  padding: '12px 18px',

                  borderRadius: '50px',
                  border: 'none',

                  fontWeight: '600',
                  fontSize: '14px',

                  cursor: 'pointer',

                  boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                }}
              >
                <span style={{ fontSize: '18px' }}>📞</span>

                Llamar

                <span style={{ fontSize: '12px' }}>
                  {showPhones ? '▲' : '▼'}
                </span>
              </button>

              {/* EMAIL */}
              <a
                href="mailto:info@zamea.com"
                onClick={() => {
                  setIsOpen(false);
                  setShowPhones(false);
                }}
                style={{
                  width: '170px',
                  boxSizing: 'border-box',

                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',

                  backgroundColor: '#4DD9A6',
                  color: 'white',

                  padding: '12px 18px',

                  borderRadius: '50px',

                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '14px',

                  boxShadow: '0 4px 15px rgba(0,0,0,0.2)',

                  animation: 'slideInRight 0.25s ease',
                }}
              >
                <span style={{ fontSize: '18px' }}>✉️</span>
                Email
              </a>
            </>
          )}

          {/* =========================
              BOTÓN PRINCIPAL
          ========================= */}
          <button
            onClick={() => {
              setIsOpen(!isOpen);

              if (isOpen) {
                setShowPhones(false);
              }
            }}
            style={{
              width: '58px',
              height: '58px',

              borderRadius: '50%',

              backgroundColor: '#1E40AF',
              color: 'white',

              border: 'none',

              fontSize: '24px',

              cursor: 'pointer',

              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',

              boxShadow: '0 6px 20px rgba(30,64,175,0.45)',

              transition: 'all 0.3s ease',
            }}
          >
            {isOpen ? '✕' : '💬'}
          </button>
        </div>

        <style>{`
          @keyframes slideInRight {
            from {
              opacity: 0;
              transform: translateX(30px);
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

  // =========================
  // ESCRITORIO
  // =========================

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
        gap: '10px',
      }}
    >
      {/* WHATSAPP */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',

          backgroundColor: '#25D366',
          color: 'white',

          padding: '14px 24px',
          borderRadius: '50px',

          textDecoration: 'none',
          fontWeight: '600',

          boxShadow: '0 4px 15px rgba(0,0,0,0.2)',

          transition: 'all 0.3s ease',
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'translateX(-8px)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'translateX(0)';
        }}
      >
        <span style={{ fontSize: '20px' }}>💬</span>
        WhatsApp
      </a>

      {/* TELÉFONOS */}
      {showPhones && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',

            width: '200px',

            animation: 'slideInRight 0.25s ease',
          }}
        >
          {phones.map((phone, index) => (
            <a
              key={index}
              href={phone.link}
              style={{
                backgroundColor: 'white',
                color: '#1E40AF',

                padding: '10px 14px',

                borderRadius: '12px',

                textDecoration: 'none',

                boxShadow: '0 4px 15px rgba(0,0,0,0.18)',

                display: 'flex',
                flexDirection: 'column',

                alignItems: 'flex-start',
              }}
            >
              <strong style={{ fontSize: '13px' }}>
                {phone.name}
              </strong>

              <span
                style={{
                  fontSize: '12px',
                  marginTop: '3px',
                }}
              >
                📞 {phone.number}
              </span>
            </a>
          ))}
        </div>
      )}

      {/* LLAMAR */}
      <button
        onClick={() => setShowPhones(!showPhones)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',

          backgroundColor: '#1E40AF',
          color: 'white',

          padding: '14px 24px',
          borderRadius: '50px',

          border: 'none',

          fontWeight: '600',
          fontSize: '16px',

          cursor: 'pointer',

          boxShadow: '0 4px 15px rgba(0,0,0,0.2)',

          transition: 'all 0.3s ease',
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'translateX(-8px)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'translateX(0)';
        }}
      >
        <span style={{ fontSize: '20px' }}>📞</span>

        Llamar

        <span style={{ fontSize: '12px' }}>
          {showPhones ? '▲' : '▼'}
        </span>
      </button>

      {/* EMAIL */}
      <a
        href="mailto:info@zamea.com"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',

          backgroundColor: '#4DD9A6',
          color: 'white',

          padding: '14px 24px',
          borderRadius: '50px',

          textDecoration: 'none',
          fontWeight: '600',

          boxShadow: '0 4px 15px rgba(0,0,0,0.2)',

          transition: 'all 0.3s ease',
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'translateX(-8px)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'translateX(0)';
        }}
      >
        <span style={{ fontSize: '20px' }}>✉️</span>
        Email
      </a>

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