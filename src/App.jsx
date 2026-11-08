import { useEffect, useState } from 'react'

const projects = [
  {
    number: '01',
    name: 'bubble-n-tee',
    type: 'Laundry Website',
    description: 'A website for a laundry service.',
    theme: 'moss',
    shape: 'arch',
    technologies: ['Java'],
    href: 'https://github.com/Kalo-Aji/bubble-n-tee',
  },
  {
    number: '02',
    name: 'AlteredEgo',
    type: 'Turn-Based Game',
    description: 'A turn-based game where strategy shapes every move.',
    theme: 'after-hours',
    shape: 'orb',
    technologies: ['HTML', 'CSS'],
    href: 'https://github.com/Kalo-Aji/AlteredEgo',
  },
  {
    number: '03',
    name: 'git-rescue-lab',
    type: 'JavaScript · Completed',
    description: 'A JavaScript project available on GitHub.',
    theme: 'signal',
    shape: 'window',
    technologies: ['JavaScript'],
    href: 'https://github.com/Kalo-Aji/git-rescue-lab',
  },
]

const skillGroups = [
  { name: 'Frontend & UI', skills: ['React', 'HTML', 'CSS', 'Figma'] },
  { name: 'Languages & Core', skills: ['JavaScript', 'TypeScript', 'Java'] },
  { name: 'Backend & Runtime', skills: ['Node.js', 'Python'] },
  { name: 'Tools & DevOps', skills: ['Git'] },
  { name: 'Specialty & Other', skills: ['Linux'] },
]

function ArrowIcon({ diagonal = false }) {
  return (
    <svg
      aria-hidden="true"
      className="arrow-icon"
      viewBox="0 0 16 16"
      fill="none"
    >
      {diagonal ? (
        <path d="M4 12 12 4M5 4h7v7" />
      ) : (
        <path d="M2.5 8h10m-4-4 4 4-4 4" />
      )}
    </svg>
  )
}

function SocialIcon({ name }) {
  return (
    <svg aria-hidden="true" className="social-icon" viewBox="0 0 24 24">
      {name === 'GitHub' ? (
        <path fill="currentColor" d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.68-3.76-1.32-3.76-1.32-.5-1.3-1.24-1.64-1.24-1.64-1.01-.7.08-.69.08-.69 1.12.08 1.71 1.15 1.71 1.15 1 .1.62 2.45 3.75 1.74.1-.72.39-1.2.7-1.47-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.29-2.61 5.23-5.1 5.51.4.35.75 1.02.75 2.06v3.05c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
      ) : (
        <path fill="currentColor" d="M13.55 21v-8.2h2.76l.41-3.2h-3.17V7.56c0-.93.26-1.56 1.59-1.56h1.7V3.14c-.3-.04-1.32-.14-2.5-.14-2.48 0-4.18 1.51-4.18 4.29V9.6H7.35v3.2h2.81V21h3.39Z" />
      )}
    </svg>
  )
}

function PixelButton({ children, href, secondary = false, ...props }) {
  return (
    <a
      className={`pixel-button${secondary ? ' pixel-button--quiet' : ''}`}
      href={href}
      {...props}
    >
      <span>{children}</span>
      <ArrowIcon diagonal={href?.startsWith('mailto:') === false} />
    </a>
  )
}

function SectionHeading({ eyebrow, children, id }) {
  return (
    <div className="section-heading" id={id}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{children}</h2>
    </div>
  )
}

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <a
        className="project-art-link"
        href={project.href}
        target="_blank"
        rel="noreferrer"
        aria-label={`${project.name}, open source code on GitHub`}
      >
        <div className={`project-art project-art--${project.theme}`}>
          <div className={`artwork-shape artwork-shape--${project.shape}`}>
            <span className="artwork-placeholder">VIEW ON GITHUB</span>
          </div>
          <span className="artwork-index">{project.number} / 03</span>
          <span className="artwork-open" aria-hidden="true">
            <ArrowIcon diagonal />
          </span>
        </div>
      </a>
      <div className="project-copy">
        <div>
          <p className="project-type">{project.type}</p>
          <h3>{project.name}</h3>
        </div>
        <p className="project-description">{project.description}</p>
      </div>
    </article>
  )
}

function App() {
  const [selectedTechnology, setSelectedTechnology] = useState(null)
  const [introPhase, setIntroPhase] = useState(() => (
    window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'done' : 'show'
  ))
  const visibleProjects = selectedTechnology
    ? projects.filter((project) => project.technologies.includes(selectedTechnology))
    : projects

  useEffect(() => {
    if (introPhase === 'done') {
      return undefined
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const timer = window.setTimeout(() => {
      setIntroPhase(introPhase === 'show' ? 'exit' : 'done')
    }, introPhase === 'show' ? 3900 : 1300)

    return () => {
      window.clearTimeout(timer)
      document.body.style.overflow = previousOverflow
    }
  }, [introPhase])

  return (
    <div className="portfolio">
      {introPhase !== 'done' && (
        <div className={`intro-screen${introPhase === 'exit' ? ' is-exiting' : ''}`} role="status" aria-label="Loading portfolio">
          <div className="intro-content">
            <span className="intro-mark">A<span>I</span></span>
            <p className="intro-name">ALIEYANDREW IDALA</p>
            <p className="intro-caption">SOFTWARE / DEVELOPMENT</p>
          </div>
        </div>
      )}
      {introPhase !== 'done' && (
        <div className="intro-train-layer" aria-hidden="true">
          <div className="intro-track">
            <span className="intro-rail" />
            <div className="intro-train">
              {Array.from({ length: 6 }, (_, index) => (
                <div className="train-car" key={index}><i /><i /><i /></div>
              ))}
              <div className="train-engine">
                <i className="train-cabin" />
                <i className="train-window" />
                <i className="train-nose" />
                <i className="train-light" />
              </div>
            </div>
          </div>
        </div>
      )}
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Alieyandrew Juhanes B. Idala, home">
          <span className="brand-mark">A<span>I</span></span>
          <span className="brand-label">ALIEYANDREW IDALA<br />SOFTWARE / DEVELOPMENT</span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#work">Projects</a>
          <a href="#about">About me</a>
          <a className="nav-contact" href="#contact">Say hello <ArrowIcon diagonal /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> SOFTWARE / DEVELOPMENT</p>
            <h1>
              Alieyandrew Juhanes B. <span className="pink-underline">Idala_</span>
            </h1>
            <p className="hero-description">
              Full-stack developer crafting impactful digital experiences.
            </p>
            <div className="hero-actions">
              <PixelButton href="#contact">Get in touch</PixelButton>
              <a className="text-link" href="https://github.com/Kalo-Aji" target="_blank" rel="noreferrer">
                GitHub <ArrowIcon diagonal />
              </a>
            </div>
            <div className="hero-socials" aria-label="Social profiles">
              <span>ELSEWHERE</span>
              <a href="https://github.com/Kalo-Aji" target="_blank" rel="noreferrer" aria-label="GitHub">
                <SocialIcon name="GitHub" />
              </a>
              <a href="https://www.facebook.com/alieyandrew.juhanes.bring/" target="_blank" rel="noreferrer" aria-label="Facebook">
                <SocialIcon name="Facebook" />
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-label="Illustrated portrait of Alieyandrew Juhanes B. Idala">
            <div className="portrait-frame">
              <div className="portrait-grid" />
              <div className="portrait-sun" />
              <div className="portrait-figure">
                <div className="figure-hair" />
                <div className="figure-head">
                  <span className="figure-ear" />
                  <span className="figure-neck" />
                </div>
                <div className="figure-body" />
                <div className="figure-shine" />
              </div>
              <div className="portrait-note"><span>✳</span> ALIEYANDREW IDALA</div>
            </div>
            <div className="visual-sticker" aria-hidden="true">MADE<br />WITH<br /><span>CARE</span></div>
            <p className="visual-caption">A SMALL INTRODUCTION <span>↘</span></p>
          </div>
        </section>

        <section className="work-section section-wrap" id="work">
          <SectionHeading eyebrow="PROJECTS">
            My <span className="heading-accent">Projects</span>
          </SectionHeading>
          <p className="section-intro">
            {selectedTechnology
              ? `Projects built with ${selectedTechnology}. Select it again to show all projects.`
              : 'Projects built with Java, web technologies, and JavaScript.'}
          </p>
          <div className="project-grid">
            {visibleProjects.length > 0
              ? visibleProjects.map((project) => <ProjectCard key={project.number} project={project} />)
              : <p className="project-empty">No featured projects use {selectedTechnology} yet.</p>}
          </div>
          <a className="work-footnote" href="https://github.com/Kalo-Aji" target="_blank" rel="noreferrer">
            <span>✳</span> EXPLORE MORE PUBLIC REPOSITORIES ON GITHUB <ArrowIcon diagonal />
          </a>
        </section>

        <section className="experience-section section-wrap" id="experience">
          <div className="experience-heading">
            <SectionHeading eyebrow="CAREER / PROJECTS">
              Experience <span className="heading-accent">&amp; Leadership</span>
            </SectionHeading>
            <p className="section-intro">
              Student leadership and project experience across technology and campus organizations.
            </p>
          </div>
          <div className="experience-list">
            <article className="experience-card">
              <div className="experience-card-meta">
                <span className="experience-card-mark" aria-hidden="true">✳</span>
                <span className="experience-card-tag">CURRENT ROLE</span>
              </div>
              <h3>Quality Assurance Officer</h3>
              <p className="experience-card-context">CIT-U Computer Students’ Society · Committee on Public Relations</p>
            </article>
            <article className="experience-card">
              <div className="experience-card-meta">
                <span className="experience-card-mark" aria-hidden="true">✳</span>
                <span className="experience-card-tag">CURRENT ROLE</span>
              </div>
              <h3>Budget Management Officer</h3>
              <p className="experience-card-context">Google Developer Group in CIT-U · Committee on Finance</p>
            </article>
            <article className="experience-card">
              <div className="experience-card-meta">
                <span className="experience-card-mark" aria-hidden="true">✳</span>
                <span className="experience-card-tag">PROJECT EXPERIENCE</span>
                <span className="experience-card-date">JAN 2026 — APR 2026</span>
              </div>
              <h3>Game Developer &amp; Q.A.</h3>
              <p className="experience-card-context">Five-Six · OOP 2 Final Project</p>
              <p className="experience-card-description">
                Helped develop Five-Six using Java Swing and Java AWT, and handled
                quality assurance and testing.
              </p>
              <a className="text-link experience-card-link" href="https://github.com/Kalo-Aji/Five-Six" target="_blank" rel="noreferrer">
                View source code <ArrowIcon diagonal />
              </a>
            </article>
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="about-inner">
            <div className="about-content">
              <div className="about-intro">
                <SectionHeading eyebrow="A LITTLE ABOUT ME">
                  About <span className="heading-accent">me</span>
                </SectionHeading>
                <p className="about-summary">
                  I’m Alieyandrew Juhanes B. Idala, a developer who enjoys turning
                  ideas into useful digital experiences. I care about clean code,
                  thoughtful interfaces, and solving problems through software.
                </p>
              </div>
              <div className="about-tech">
                <p className="eyebrow about-tech-heading">TECHNOLOGIES &amp; TOOLS</p>
                <div className="about-skills">
                  {skillGroups.map((group) => (
                    <div className="about-skill-group" key={group.name}>
                      <p>{group.name}</p>
                      <div className="about-skill-list">
                        {group.skills.map((skill) => (
                          <button
                            className={`about-skill${selectedTechnology === skill ? ' is-selected' : ''}`}
                            type="button"
                            aria-pressed={selectedTechnology === skill}
                            key={skill}
                            onClick={() => setSelectedTechnology(selectedTechnology === skill ? null : skill)}
                          >
                            {skill}<span aria-hidden="true">+</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                {selectedTechnology && (
                  <p className="about-tech-selection">
                    Filtering projects by {selectedTechnology}.{' '}
                    <a className="text-link" href="#work">View projects <ArrowIcon /></a>
                  </p>
                )}
              </div>
              <div className="about-highlights">
                <article className="about-highlight">
                  <span className="about-highlight-number">01.</span>
                  <h3>What I build</h3>
                  <p>Websites and software projects that make everyday ideas useful and engaging.</p>
                </article>
                <article className="about-highlight">
                  <span className="about-highlight-number">02.</span>
                  <h3>What I value</h3>
                  <p>Clean code, thoughtful user experiences, collaboration, and careful testing.</p>
                </article>
                <article className="about-highlight">
                  <span className="about-highlight-number">03.</span>
                  <h3>Where I contribute</h3>
                  <p>Supporting student technology communities through quality assurance and budget management.</p>
                </article>
              </div>
              <div className="about-role-tags" aria-label="Current leadership roles">
                <span>CSS · Quality Assurance Officer</span>
                <span>GDG CIT-U · Budget Management Officer</span>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-inner section-wrap">
            <div className="contact-orbit" aria-hidden="true"><span>✳</span></div>
            <p className="eyebrow"><span className="status-dot" /> GET IN TOUCH</p>
            <h2>Let’s<br /><span>talk.</span></h2>
            <p className="contact-description">
              For roles, projects, or a quick hello.
            </p>
            <div className="contact-actions">
              <PixelButton href="mailto:alieyandrewjuhanesbring@gmail.com">
                alieyandrewjuhanesbring@gmail.com
              </PixelButton>
              <a className="resume-button" href="/Resume.pdf" download>
                Download resume <ArrowIcon />
              </a>
            </div>
            <div className="contact-bottom">
              <span>GITHUB &amp; LINKEDIN</span>
              <a href="#home">BACK TO TOP ↑</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <a className="brand" href="#home" aria-label="Alieyandrew Juhanes B. Idala, back to top">
          <span className="brand-mark">A<span>I</span></span>
          <span className="brand-label">ALIEYANDREW IDALA<br />SOFTWARE / DEVELOPMENT</span>
        </a>
        <p>FULL-STACK DEVELOPER · IMPACTFUL DIGITAL EXPERIENCES</p>
        <span className="footer-year">© 2026 Alieyandrew Juhanes B. Idala</span>
      </footer>
    </div>
  )
}

export default App
