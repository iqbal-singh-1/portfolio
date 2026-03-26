import { FaGithub, FaFolderOpen } from 'react-icons/fa';

const projectsData = [
  {
    title: 'Vroomie',
    description: 'Vroomie is your AI vehicle assistant that answers your questions about vehicles and helps you find the best vehicle for your needs.',
    tags: ['React', 'TypeScript', 'Tailwind'],
    github: 'https://github.com/iqbal-singh-1/vroomie',
    accentColor: '#5bd5ee',
  },
  {
    title: 'Charix',
    description: 'Charix is a fund raising platform that uses raises funds for local artisits. Uses blockchain to provide security.',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Socket.io'],
    github: 'https://github.com/iqbal-singh-1/charix',
    accentColor: '#00b8a3',
  },
  {
    title: 'Advent of Code',
    description: 'Solved Advent of code which releases DSA questions every year in December. ',
    tags: ['', 'Data Structures', 'Algorithms', 'C++'],
    github: 'https://github.com/iqbal-singh-1/code-of-advent',
    accentColor: '#FFA116',
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio to showcase projects, skills, and achievements with a modern glassmorphic design and fully responsive navigation.',
    tags: ['React', 'CSS', 'Typescript'],
    github: 'https://github.com/iqbal-singh-1/portfolio',
    accentColor: '#ed1c24',
  }
];

const Projects = () => {
  return (
    <section id="projects" style={{ padding: '60px 48px 100px 48px', color: 'white' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Section header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '50px' }}>
          <div style={{ width: '4px', height: '48px', background: 'linear-gradient(180deg, #5bd5ee, transparent)', borderRadius: '2px' }} />
          <div>
            <p style={{ margin: 0, fontSize: '0.85rem', color: '#5bd5ee', fontWeight: '700', letterSpacing: '3px', textTransform: 'uppercase' }}>Built by Me</p>
            <h2 style={{ margin: 0, fontSize: '2.5rem', letterSpacing: '-1px' }}>Open Source Work</h2>
          </div>
        </div>

        {/* Projects Layout - Grid of Repository Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
          {projectsData.map((project, index) => {
            return (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                key={index}
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '16px',
                  padding: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  textDecoration: 'none',
                  color: 'inherit',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.borderColor = `rgba(255,255,255,0.15)`;
                  e.currentTarget.style.boxShadow = `0 10px 30px -10px ${project.accentColor}30`;
                  const folder = e.currentTarget.querySelector('.proj-folder') as HTMLElement;
                  if (folder) folder.style.color = project.accentColor;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                  e.currentTarget.style.boxShadow = 'none';
                  const folder = e.currentTarget.querySelector('.proj-folder') as HTMLElement;
                  if (folder) folder.style.color = 'white';
                }}
              >
                {/* Background faint logo */}
                <FaGithub
                  size={120}
                  style={{
                    position: 'absolute',
                    top: '-15px',
                    right: '-25px',
                    color: 'rgba(255,255,255,0.02)',
                    transform: 'rotate(15deg)',
                    pointerEvents: 'none'
                  }}
                />

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <FaFolderOpen className="proj-folder" size={24} style={{ color: 'white', transition: 'color 0.3s ease' }} />
                  <FaGithub size={18} style={{ color: 'rgba(255,255,255,0.6)' }} />
                </div>

                <h3 style={{
                  margin: '0 0 10px 0',
                  fontSize: '1.15rem',
                  fontWeight: '700',
                  letterSpacing: '-0.5px',
                  color: 'white'
                }}>
                  {project.title}
                </h3>

                <p style={{ margin: '0 0 20px 0', color: 'rgba(255,255,255,0.65)', lineHeight: '1.5', fontSize: '0.85rem', flex: 1 }}>
                  {project.description}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: 'auto' }}>
                  {project.tags.map((tag, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: project.accentColor }} />
                      <span style={{
                        fontSize: '0.75rem',
                        color: 'rgba(255,255,255,0.8)',
                        fontFamily: 'monospace',
                        fontWeight: '600'
                      }}>
                        {tag}
                      </span>
                    </div>
                  ))}
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
