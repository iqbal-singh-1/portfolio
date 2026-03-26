import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const certs = [
  {
    title: 'Oracle Cloud Infrastructure 2025 Certified DevOps Professional',
    issuer: 'Oracle',
    date: 'Dec 2025',
    link: 'https://drive.google.com/file/d/1euVn1FMv9Q0MP0Mb7kiwQho_jtbbuDFC/view',
    logo: 'https://www.pngmart.com/files/23/Oracle-Logo-PNG-File.png',
    accentColor: '#ed1c24',
  },
  {
    title: 'Privacy and Security in Online Social Media',
    issuer: 'Nptel',
    date: 'Oct 2025',
    link: 'https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL25CS117S135870165910534308',
    logo: 'https://sangamuniversity.ac.in/wp-content/uploads/2023/03/nptel.jpg',
    accentColor: '#0055a6',
  },
  {
    title: 'Responsive Web Design',
    issuer: 'FreeCodeCamp',
    date: 'Nov 2023',
    link: 'https://www.freecodecamp.org/certification/iqbal1213/responsive-web-design',
    logo: 'https://cdn-1.webcatalog.io/catalog/freecodecamp/freecodecamp-icon-filled-256.png?v=1773016992986',
    accentColor: '#3ab54a',
  }
];

const Certifications = () => {
  return (
    <section id="certifications" style={{ padding: '80px 48px 80px 48px', color: 'white' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Section header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '40px' }}>
          <div style={{ width: '4px', height: '48px', background: 'linear-gradient(180deg, #5bd5ee, transparent)', borderRadius: '2px' }} />
          <div>
            <p style={{ margin: 0, fontSize: '0.85rem', color: '#5bd5ee', fontWeight: '700', letterSpacing: '3px', textTransform: 'uppercase' }}>Earned</p>
            <h2 style={{ margin: 0, fontSize: '2.2rem', letterSpacing: '-1px' }}>Certifications</h2>
          </div>
        </div>

        {/* Cert cards — horizontal list layout */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {certs.map((cert, index) => (
            <div
              key={index}
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: `1px solid rgba(255,255,255,0.06)`,
                borderLeft: `3px solid ${cert.accentColor}`,
                borderRadius: '16px',
                padding: '24px 28px',
                display: 'flex',
                alignItems: 'center',
                gap: '24px',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                e.currentTarget.style.transform = 'translateX(6px)';
                e.currentTarget.style.boxShadow = `0 4px 30px -10px ${cert.accentColor}55`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Logo */}
              <div style={{
                width: '52px',
                height: '52px',
                background: 'white',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                flexShrink: 0,
                padding: '6px',
              }}>
                <img
                  src={cert.logo}
                  alt={`${cert.issuer} logo`}
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>

              {/* Content */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.45)', marginBottom: '4px', fontWeight: '600', letterSpacing: '1px' }}>
                  {cert.issuer.toUpperCase()}
                </div>
                <h3 style={{ margin: 0, fontSize: '1.05rem', lineHeight: '1.5', color: 'white', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {cert.title}
                </h3>
              </div>

              {/* Date + Link */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '12px', flexShrink: 0 }}>
                <span style={{ fontSize: '0.85rem', color: cert.accentColor, fontWeight: '700', whiteSpace: 'nowrap' }}>
                  {cert.date}
                </span>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: 'rgba(255,255,255,0.6)',
                    textDecoration: 'none',
                    fontSize: '0.8rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '6px 14px',
                    borderRadius: '8px',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = cert.accentColor;
                    e.currentTarget.style.borderColor = cert.accentColor;
                    e.currentTarget.style.background = `${cert.accentColor}15`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'rgba(255,255,255,0.6)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                  }}
                >
                  View <FaExternalLinkAlt size={10} />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;
