import { useState } from 'react';
import ConstellationBackground from "./ConstellationBackground";
import heroImage from "../public/assets/hero-image.png";
import resume from "../public/assets/cv.pdf"; // <-- Uncomment this after adding resume.png to the assets folder
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import About from "./components/About";
import TechnicalArsenal from "./components/TechnicalArsenal";
import Stats from "./components/Stats";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
export default function App() {
  const [activePage, setActivePage] = useState('home');
  return (
    <div className="app-shell">
      <ConstellationBackground />

      <div className="overlay">
        <header className="navbar">
          <div className="logo-wrap">
            <div className="hex-logo">I</div>
          </div>

          <nav className="nav-links">
            <a href="#" className={activePage === 'home' ? 'active' : ''} onClick={(e) => { e.preventDefault(); setActivePage('home'); }}>Home</a>
            <a href="#projects" className={activePage === 'projects' ? 'active' : ''} onClick={(e) => { e.preventDefault(); setActivePage('projects'); }}>Projects</a>
            <a href="#certifications" className={activePage === 'certifications' ? 'active' : ''} onClick={(e) => { e.preventDefault(); setActivePage('certifications'); }}>Achievements</a>
            <a href="mailto:iqbalsingh2434@gmail.com">Contact</a>
            <button className="theme-btn" aria-label="theme button">
              ☼
            </button>
          </nav>
        </header>

        {activePage === 'home' ? (
          <>
            <main className="hero">
              <section className="hero-left">
                <div className="accent-line" />
                <h1>I&apos;m Iqbal</h1>
                <p className="subtitle">Software Developer By Curiosity</p>

                <div className="hero-buttons">
                  <a href="mailto:iqbalsingh2434@gmail.com">
                    <button className="contact-btn">CONTACT ME</button>
                  </a>
                  {/* Change href="#" to href={resumeImage} once you've uncommented the import above */}
                  <a href={resume} target="_blank" rel="noopener noreferrer">
                    <button className="resume-btn">VIEW RESUME</button>
                  </a>
                </div>

                <div className="socials">
                  <a
                    href="https://linkedin.com/in/iqbal-singh6586"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin size={20} />
                  </a>

                  <a
                    href="https://github.com/iqbal-singh-1"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                  >
                    <FaGithub size={20} />
                  </a>

                  <a
                    href="mailto:iqbalsingh2434@gmail.com"
                    aria-label="Email"
                  >
                    <MdEmail size={20} />
                  </a>

                  <a href="#" aria-label="Twitter">
                    <FaTwitter size={20} />
                  </a>

                  <a href="#" aria-label="Instagram">
                    <FaInstagram size={20} />
                  </a>
                </div>
              </section>

              <section className="hero-right">
                <div className="person-wrap">
                  <img src={heroImage} alt="Hero" className="hero-png" />
                </div>
              </section>
            </main>
            <About />
            {/* Technical Arsenal Section */}
            <TechnicalArsenal />
          </>
        ) : activePage === 'projects' ? (
          <Projects />
        ) : (
          <>
            <Stats />
            <Certifications />
          </>
        )}
      </div>
    </div>
  );
}