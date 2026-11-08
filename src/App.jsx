const projects = [
  {
    number: '01',
    name: 'Five-Six',
    type: 'Java · Completed',
    description: 'A jack-en-poy RPG.',
    theme: 'moss',
    shape: 'arch',
    href: 'https://github.com/siiinbad/Five-Six',
  },
  {
    number: '02',
    name: 'Baiby',
    type: 'CSS / HTML · Completed',
    description: 'A web project built with CSS and HTML.',
    theme: 'after-hours',
    shape: 'orb',
    href: 'https://github.com/siiinbad/Baiby',
  },
  {
    number: '03',
    name: 'git-rescue-lab',
    type: 'JavaScript · Completed',
    description: 'A JavaScript project available on GitHub.',
    theme: 'signal',
    shape: 'window',
    href: 'https://github.com/siiinbad/git-rescue-lab',
  },
]

const skills = [
  'React',
  'HTML',
  'CSS',
  'Figma',
  'JavaScript',
  'TypeScript',
  'Java',
  'Node.js',
  'Python',
  'Git',
  'Linux',
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
  return (
    <div className="portfolio">
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Alieyandrew Juhanes B. Idala, home">
          <span className="brand-mark">A<span>I</span></span>
          <span className="brand-label">ALIEYANDREW IDALA<br />SOFTWARE / DEVELOPMENT</span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#work">Selected work</a>
          <a href="#about">A little about me</a>
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
              <PixelButton href="#work">Selected work</PixelButton>
              <a className="text-link" href="https://github.com/siiinbad" target="_blank" rel="noreferrer">
                GitHub <ArrowIcon diagonal />
              </a>
            </div>
            <div className="hero-socials" aria-label="Social profiles">
              <span>ELSEWHERE</span>
              <a href="https://www.linkedin.com/in/nimuel-jumao-as-1406893b7/" target="_blank" rel="noreferrer">LinkedIn <ArrowIcon diagonal /></a>
              <a href="https://github.com/siiinbad" target="_blank" rel="noreferrer">GitHub <ArrowIcon diagonal /></a>
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
          <a className="scroll-cue" href="#work"><span /> SCROLL TO EXPLORE</a>
        </section>

        <section className="marquee" aria-label="Design and development">
          <div className="marquee-track">
            <span>IMPACTFUL DIGITAL EXPERIENCES</span><i>✳</i><span>FULL-STACK DEVELOPMENT</span><i>✳</i><span>CLEAN CODE · THOUGHTFUL UX</span><i>✳</i>
            <span aria-hidden="true">IMPACTFUL DIGITAL EXPERIENCES</span><i aria-hidden="true">✳</i><span aria-hidden="true">FULL-STACK DEVELOPMENT</span><i aria-hidden="true">✳</i><span aria-hidden="true">CLEAN CODE · THOUGHTFUL UX</span><i aria-hidden="true">✳</i>
          </div>
        </section>

        <section className="work-section section-wrap" id="work">
          <SectionHeading eyebrow="SELECTED PROJECTS" >
            Selected <span className="heading-accent">work</span>
          </SectionHeading>
          <p className="section-intro">
            Projects built with Java, web technologies, and JavaScript.
          </p>
          <div className="project-grid">
            {projects.map((project) => <ProjectCard key={project.number} project={project} />)}
          </div>
          <a className="work-footnote" href="https://github.com/siiinbad" target="_blank" rel="noreferrer">
            <span>✳</span> EXPLORE MORE PUBLIC REPOSITORIES ON GITHUB <ArrowIcon diagonal />
          </a>
        </section>

        <section className="about-section" id="about">
          <div className="about-inner section-wrap">
            <div className="about-side">
              <p className="eyebrow"><span className="pink-square" /> DEVELOPER / EXPERIENCE</p>
              <div className="about-note">1+ years<br />building web apps <span>↘</span></div>
            </div>
            <div className="about-copy">
              <SectionHeading eyebrow="A LITTLE ABOUT ME">
                Passionate developer.<br /><span className="heading-accent">Impactful</span> experiences.
              </SectionHeading>
              <p>
                I’m a passionate developer with 1+ years of experience building
                web applications. I love clean code, thoughtful UX, and turning
                complex problems into simple solutions.
              </p>
              <div className="experience-entry">
                <p className="eyebrow">JANUARY 2026 – APRIL 2026</p>
                <h3>Game Dev &amp; Q.A.</h3>
                <p>
                  Helped develop Five-Six, a final project for OOP 2, using
                  Java Swing and Java AWT, and handled quality assurance and testing.
                </p>
                <a className="text-link about-link" href="https://github.com/siiinbad/Five-Six" target="_blank" rel="noreferrer">
                  View source code <ArrowIcon diagonal />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="approach-section section-wrap">
          <div className="approach-heading">
            <SectionHeading eyebrow="TECHNOLOGIES &amp; TOOLS">
              Building across <span className="heading-accent">the stack.</span>
            </SectionHeading>
          </div>
          <div className="skill-list">
            {skills.map((skill, index) => (
              <div className="skill-item" key={skill}>
                <span className="skill-number">{String(index + 1).padStart(2, '0')}</span>
                <span>{skill}</span>
                <span className="skill-spark" aria-hidden="true">✳</span>
              </div>
            ))}
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
            <PixelButton href="mailto:alieyandrewjuhanesbring@gmail.com">alieyandrewjuhanesbring@gmail.com</PixelButton>
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
