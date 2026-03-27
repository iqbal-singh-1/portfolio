import React from 'react';
import { FaTrophy, FaBriefcase } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="about-section" style={{ padding: '80px 48px', color: 'white' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div className="accent-line" style={{ margin: '0 0 20px 0', width: '88px', height: '4px', background: '#5bd5ee' }} />
        <h2 style={{ fontSize: '2.5rem', marginBottom: '40px', letterSpacing: '-1px' }}>About Me</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>

          {/* Left Side: Intro & Stats */}
          <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '24px', padding: '24px', display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ fontSize: '1.5rem', color: '#5bd5ee', marginBottom: '24px' }}>My Journey</h3>
            <p style={{ lineHeight: '1.6', color: 'rgba(255,255,255,0.85)', marginBottom: '16px', fontSize: '0.95rem' }}>
              Hello! I'm <span style={{ fontWeight: 'bold', color: 'white' }}>Iqbal</span>, a software developer passionate about building digital experiences. What started as curiosity about the web has evolved into a dedicated career.
            </p>
            <p style={{ lineHeight: '1.6', color: 'rgba(255,255,255,0.85)', fontSize: '0.95rem' }}>
              I specialize in creating high-performance, responsive applications using modern tech. Outside of coding, I enjoy exploring new tools or contributing to open-source.
            </p>

            <div style={{ marginTop: '24px' }}>
              <h4 style={{ fontSize: '1.1rem', color: 'white', marginBottom: '12px' }}>Soft Skills</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {['Adaptive', 'Soft-Spoken', 'Team Player', 'Problem Solver', 'Effective Communicator'].map((skill, index) => (
                  <span key={index} style={{ background: 'rgba(91, 213, 238, 0.1)', color: '#5bd5ee', padding: '6px 14px', borderRadius: '20px', fontSize: '0.85rem', border: '1px solid rgba(91, 213, 238, 0.2)' }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: '30px' }}>
              <div style={{ padding: '16px', background: 'rgba(255,255,255,0.03)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
                <h3 style={{ margin: 0, fontSize: '2rem', color: 'white', marginBottom: '8px' }}>2+</h3>
                <span style={{ fontSize: '0.85rem', color: '#5bd5ee', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>Certifications<br />Completed</span>
              </div>
              <div style={{ padding: '16px', background: 'rgba(255,255,255,0.03)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
                <h3 style={{ margin: 0, fontSize: '2rem', color: 'white', marginBottom: '8px' }}>15+</h3>
                <span style={{ fontSize: '0.85rem', color: '#5bd5ee', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>Projects<br />Completed</span>
              </div>
            </div>
          </div>

          {/* Right Side: Minimal Education Timeline */}
          <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '24px', padding: '24px', display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ fontSize: '1.5rem', color: 'white', marginBottom: '30px', display: 'inline-block', position: 'relative' }}>
              Education
              <div style={{ position: 'absolute', bottom: '-8px', left: '0', width: '40px', height: '3px', background: 'rgba(255,255,255,0.2)' }}></div>
            </h3>

            <div style={{ position: 'relative', paddingLeft: '24px' }}>
              {/* Vertical Line */}
              <div style={{ position: 'absolute', left: '0', top: '10px', bottom: '0', width: '2px', background: 'rgba(255,255,255,0.1)' }}></div>

              {/* Item 1 */}
              <div style={{ position: 'relative', marginBottom: '24px' }}>
                {/* Dot */}
                <div style={{ position: 'absolute', left: '-29px', top: '7px', width: '12px', height: '12px', background: 'rgba(255,255,255,0.6)', borderRadius: '50%' }}></div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px' }}>
                  <div>
                    <h4 style={{ margin: '0 0 6px 0', fontSize: '1.15rem', color: 'white' }}>Bachelor of Technology in CSE</h4>
                    <p style={{ margin: '0 0 10px 0', fontSize: '0.9rem', color: 'rgba(91, 213, 238, 0.8)' }}>Lovely Professional University, Punjab</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', alignItems: 'center' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><FaTrophy color="#F59E0B" /> CGPA: 8.6/10</span>
                    </div>
                  </div>
                  <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.05rem', letterSpacing: '0.5px' }}>
                    2023-2027
                  </div>
                </div>
              </div>

              {/* Item 2 */}
              <div style={{ position: 'relative', marginBottom: '24px' }}>
                {/* Dot */}
                <div style={{ position: 'absolute', left: '-29px', top: '7px', width: '12px', height: '12px', background: 'rgba(255,255,255,0.6)', borderRadius: '50%' }}></div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px' }}>
                  <div>
                    <h4 style={{ margin: '0 0 6px 0', fontSize: '1.15rem', color: 'white' }}>12th Passed</h4>
                    <p style={{ margin: '0 0 10px 0', fontSize: '0.9rem', color: 'rgba(91, 213, 238, 0.8)' }}>M.G.N. Public School, Kapurthala, Punjab</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', alignItems: 'center' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><FaTrophy color="#F59E0B" /> Grades: 90/100</span>
                    </div>
                  </div>
                  <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.05rem', letterSpacing: '0.5px' }}>
                    2022 - 2023
                  </div>
                </div>
              </div>
              <div style={{ position: 'relative' }}>
                {/* Dot */}
                <div style={{ position: 'absolute', left: '-29px', top: '7px', width: '12px', height: '12px', background: 'rgba(255,255,255,0.6)', borderRadius: '50%' }}></div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px' }}>
                  <div>
                    <h4 style={{ margin: '0 0 6px 0', fontSize: '1.15rem', color: 'white' }}>10th Passed</h4>
                    <p style={{ margin: '0 0 10px 0', fontSize: '0.9rem', color: 'rgba(91, 213, 238, 0.8)' }}>M.G.N. Public School, Kapurthala, Punjab</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', alignItems: 'center' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><FaTrophy color="#F59E0B" /> Grades: 90/100</span>
                    </div>
                  </div>
                  <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.05rem', letterSpacing: '0.5px' }}>
                    2020 - 2021
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
