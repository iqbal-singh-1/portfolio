import React from 'react';
import { FaReact, FaNodeJs, FaPython, FaJava, FaDocker, FaGithub, FaHtml5, FaCss3, FaJs, FaDatabase } from 'react-icons/fa';

const skillsList = [
  { name: 'React', icon: FaReact, isText: false, color: '#61DAFB' },
  { name: 'TypeScript', text: 'TS', icon: FaReact, isText: true, color: '#3178C6' },
  { name: 'Node.js', icon: FaNodeJs, isText: false, color: '#339933' },
  { name: 'Express.js', text: 'ex', icon: FaReact, isText: true, color: '#FFFFFF' }, 
  { name: 'MongoDB', text: 'Mdb', icon: FaReact, isText: true, color: '#47A248' },
  { name: 'Python', icon: FaPython, isText: false, color: '#3776AB' },
  { name: 'Java', icon: FaJava, isText: false, color: '#007396' },
  { name: 'C++', text: 'C++', icon: FaReact, isText: true, color: '#00599C' },
  { name: 'SQL', icon: FaDatabase, isText: false, color: '#F29111' },
  { name: 'Tailwind CSS', text: 'TW', icon: FaReact, isText: true, color: '#06B6D4' },
  { name: 'HTML5', icon: FaHtml5, isText: false, color: '#E34F26' },
  { name: 'CSS3', icon: FaCss3, isText: false, color: '#1572B6' },
  { name: 'JavaScript', icon: FaJs, isText: false, color: '#F7DF1E' },
];

const toolsList = [
  { name: 'VS Code', text: 'VS', icon: FaReact, isText: true, color: '#007ACC' },
  { name: 'Git & GitHub', icon: FaGithub, isText: false, color: '#FFFFFF' },
  { name: 'Docker', icon: FaDocker, isText: false, color: '#2496ED' },
  { name: 'Kubernetes', text: 'K8s', icon: FaReact, isText: true, color: '#326CE5' },
  { name: 'Figma', text: 'Fig', icon: FaReact, isText: true, color: '#F24E1E' },
  { name: 'Canva', text: 'Can', icon: FaReact, isText: true, color: '#00C4CC' },
];

const TechCard = ({ tech }: { tech: any }) => {
  return (
    <div 
      style={{
        background: 'rgba(255, 255, 255, 0.02)',
        border: '1px solid rgba(255,255,255,0.06)',
        borderRadius: '12px',
        padding: '16px 12px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        cursor: 'pointer'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-6px)';
        e.currentTarget.style.borderColor = tech.color !== '#FFFFFF' ? tech.color : 'rgba(255,255,255,0.4)';
        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'none';
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)';
      }}
    >
      {(() => {
        if (tech.isText) {
          return (
            <div style={{ fontSize: '1.2rem', fontWeight: '800', color: tech.color, marginBottom: '8px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {tech.text}
            </div>
          );
        }
        const Icon = tech.icon as React.ElementType;
        return <Icon size={24} color={tech.color} style={{ marginBottom: '8px' }} />;
      })()}
      <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.85)', fontWeight: '600', letterSpacing: '0.5px', textAlign: 'center' }}>
        {tech.name}
      </span>
    </div>
  );
};

const TechnicalArsenal = () => {
  return (
    <section id="arsenal" style={{ padding: '0 48px 80px 48px', color: 'white' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div className="accent-line" style={{ margin: '0 0 20px 0', width: '88px', height: '4px', background: '#5bd5ee' }} />
        <h2 style={{ fontSize: '2.5rem', marginBottom: '40px', letterSpacing: '-1px' }}>Technical Arsenal</h2>

        <div style={{ 
          background: 'rgba(255, 255, 255, 0.02)', 
          border: '1px solid rgba(255,255,255,0.05)', 
          borderRadius: '24px', 
          padding: '24px 40px' 
        }}>
          
          <div style={{ marginBottom: '32px' }}>
            <h3 style={{ fontSize: '1.4rem', color: '#5bd5ee', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
               <span style={{ width: '8px', height: '8px', background: '#5bd5ee', borderRadius: '50%' }}></span>
               Skills & Languages
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(110px, 1fr))', gap: '16px' }}>
              {skillsList.map((tech) => (
                <TechCard key={tech.name} tech={tech} />
              ))}
            </div>
          </div>

          {/* Divider to subtly separate but keep them connected */}
          <div style={{ width: '100%', height: '1px', background: 'rgba(255, 255, 255, 0.05)', marginBottom: '32px' }}></div>

          <div>
            <h3 style={{ fontSize: '1.4rem', color: '#5bd5ee', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
               <span style={{ width: '8px', height: '8px', background: '#5bd5ee', borderRadius: '50%' }}></span>
               Tools & Platforms
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(110px, 1fr))', gap: '16px' }}>
              {toolsList.map((tech) => (
                <TechCard key={tech.name} tech={tech} />
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default TechnicalArsenal;
