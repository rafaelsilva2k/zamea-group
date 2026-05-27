function SobreNosotros() {
  return (
    <section
      id="nosotros"
      style={{
        padding: '80px 40px',
        backgroundColor: 'white',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '60px',
            alignItems: 'center',
          }}
        >
          {/* Left side - Content */}
          <div>
            <h2
              style={{
                fontSize: '44px',
                color: '#2D3748',
                marginBottom: '24px',
                fontWeight: 'bold',
              }}
            >
              Sobre Nosotros
            </h2>

            <p
              style={{
                fontSize: '18px',
                color: '#666',
                lineHeight: '1.8',
                marginBottom: '20px',
              }}
            >
              ZAMEA GROUP es una empresa especializada en servicios financieros y asesoría para pensionados e jubilados del IMSS. Con más de una década de experiencia, hemos ayudado a miles de personas a maximizar sus ingresos de jubilación.
            </p>

            <p
              style={{
                fontSize: '18px',
                color: '#666',
                lineHeight: '1.8',
                marginBottom: '30px',
              }}
            >
              Nuestro equipo de expertos está comprometido con ofrecerte soluciones personalizadas que se adapten a tu situación específica. Creemos que cada persona merece asesoramiento profesional y honesto.
            </p>

            {/* Stats */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '20px',
                marginTop: '40px',
              }}
            >
              <div
                style={{
                  padding: '20px',
                  backgroundColor: '#f0f4ff',
                  borderRadius: '12px',
                  borderLeft: '4px solid #1E40AF',
                }}
              >
                <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#1E40AF' }}>
                  5000+
                </div>
                <div style={{ color: '#666', marginTop: '8px' }}>Clientes Satisfechos</div>
              </div>

              <div
                style={{
                  padding: '20px',
                  backgroundColor: '#f0fff4',
                  borderRadius: '12px',
                  borderLeft: '4px solid #4DD9A6',
                }}
              >
                <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#4DD9A6' }}>
                  10+ Años
                </div>
                <div style={{ color: '#666', marginTop: '8px' }}>De Experiencia</div>
              </div>
            </div>
          </div>

          {/* Right side - Visual */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
            }}
          >
            {/* Card 1 */}
            <div
              style={{
                backgroundColor: '#1E40AF',
                color: 'white',
                padding: '40px',
                borderRadius: '16px',
                boxShadow: '0 10px 30px rgba(30, 64, 175, 0.2)',
                transition: 'all 0.3s ease',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{ fontSize: '40px', marginBottom: '12px' }}>🎯</div>
              <h3 style={{ margin: '0 0 12px 0', fontSize: '20px', fontWeight: 'bold' }}>
                Nuestra Misión
              </h3>
              <p style={{ margin: 0, lineHeight: '1.6', opacity: 0.9 }}>
                Proporcionar asesoría financiera experta para maximizar los beneficios de jubilación de nuestros clientes.
              </p>
            </div>

            {/* Card 2 */}
            <div
              style={{
                backgroundColor: '#4DD9A6',
                color: '#2D3748',
                padding: '40px',
                borderRadius: '16px',
                boxShadow: '0 10px 30px rgba(77, 217, 166, 0.2)',
                transition: 'all 0.3s ease',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{ fontSize: '40px', marginBottom: '12px' }}>💼</div>
              <h3 style={{ margin: '0 0 12px 0', fontSize: '20px', fontWeight: 'bold' }}>
                Nuestros Valores
              </h3>
              <p style={{ margin: 0, lineHeight: '1.6' }}>
                Transparencia, profesionalismo e integridad en cada interacción con nuestros clientes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SobreNosotros;