import { useEffect, useState } from 'react';
import profileImage from '../images/Profile.png';
import foodImage from '../images/projects/food.png';
import socialImage from '../images/projects/mockup-2.png';
import robotImage from '../images/projects/DrRobot.png';
import newsweekImage from '../images/projects/newsweek.png';
import loginImage from '../images/projects/php.png';
import eventsImage from '../images/projects/img1.png';
import resumeFile from '../docs/Resume.pdf';

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/princexz', icon: 'github' },
  { label: 'Twitter', href: 'https://twitter.com/angelprince_me', icon: 'twitter' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/princexz', icon: 'linkedin' },
];

const projects = [
  {
    title: 'Food E-commerce',
    category: 'Web app',
    filters: ['JavaScript', 'Bootstrap'],
    image: foodImage,
    description: 'A storefront concept for browsing food and placing an order online.',
    live: 'https://princexz.github.io/Food-E-commerce_Website-App/',
    source: 'https://github.com/Princexz/Food-E-commerce_Website-App',
    tone: 'peach',
  },
  {
    title: 'Social Network',
    category: 'Web app',
    filters: ['Ruby on Rails'],
    image: socialImage,
    description: 'A community app exploring the building blocks of a social platform.',
    live: '',
    source: 'https://github.com/dibdas/ror-social-scaffold',
    tone: 'blue',
  },
  {
    title: 'Dr. Robot',
    category: 'Open source',
    filters: ['JavaScript'],
    image: robotImage,
    description: 'A collaborative project built with a focus on thoughtful interactions.',
    live: '',
    source: 'https://github.com/udberg/DrRobot',
    tone: 'mint',
  },
  {
    title: 'Newsweek Replica',
    category: 'Website',
    filters: ['HTML & CSS', 'Bootstrap'],
    image: newsweekImage,
    description: 'A responsive recreation of the Newsweek editorial homepage.',
    live: 'https://princexz.github.io/Newsweek-Replica/',
    source: 'https://github.com/Princexz/Newsweek-Replica',
    tone: 'lavender',
  },
  {
    title: 'Login Form',
    category: 'Website',
    filters: ['PHP', 'HTML & CSS'],
    image: loginImage,
    description: 'A clean sign-in experience backed by a PHP form.',
    live: 'https://princexz.github.io/LOGIN-FORM/',
    source: 'https://github.com/Princexz/LOGIN-FORM',
    tone: 'sand',
  },
  {
    title: 'Upcoming Event',
    category: 'Website',
    filters: ['JavaScript', 'HTML & CSS'],
    image: eventsImage,
    description: 'An event-focused landing page designed to make the next step clear.',
    live: '',
    source: 'https://github.com/Princexz/Upcoming_Event_Web',
    tone: 'rose',
  },
];

const filters = ['All work', 'JavaScript', 'HTML & CSS', 'Bootstrap', 'PHP', 'Ruby on Rails'];

function Icon({ name, size = 18 }) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  };

  const paths = {
    arrow: <><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></>,
    upRight: <><path d="M7 17 17 7" /><path d="M8 7h9v9" /></>,
    github: <><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 6v-3.9a3.4 3.4 0 0 0-.9-2.6c3-.3 6.2-1.5 6.2-7A5.5 5.5 0 0 0 19 4.7 5.1 5.1 0 0 0 18.9 1S17.7.7 15 2.6a13.4 13.4 0 0 0-7 0C5.3.7 4.1 1 4.1 1A5.1 5.1 0 0 0 4 4.7a5.5 5.5 0 0 0-1.4 3.8c0 5.5 3.2 6.7 6.2 7A3.4 3.4 0 0 0 8 18.1V22" /></>,
    linkedin: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></>,
    twitter: <path d="M22 5.9a8.4 8.4 0 0 1-2.4.7 4.2 4.2 0 0 0 1.8-2.3 8.4 8.4 0 0 1-2.7 1 4.2 4.2 0 0 0-7.2 3.8 11.9 11.9 0 0 1-8.6-4.4 4.2 4.2 0 0 0 1.3 5.6 4.2 4.2 0 0 1-1.9-.5v.1a4.2 4.2 0 0 0 3.4 4.1 4.2 4.2 0 0 1-1.9.1 4.2 4.2 0 0 0 3.9 2.9A8.4 8.4 0 0 1 2 18.8a11.9 11.9 0 0 0 18.3-10 8.5 8.5 0 0 0 1.7-2.9Z" />,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
    pin: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    spark: <><path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" /><path d="m19 14 .9 2.1L22 17l-2.1.9L19 20l-.9-2.1L16 17l2.1-.9L19 14Z" /></>,
    menu: <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>,
    close: <><path d="m18 6-12 12" /><path d="m6 6 12 12" /></>,
    sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.42 1.42" /><path d="m17.65 17.65 1.42 1.42" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.35 17.65-1.42 1.42" /><path d="m19.07 4.93-1.42 1.42" /></>,
    moon: <path d="M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13Z" />,
  };

  return <svg {...common}>{paths[name]}</svg>;
}

function SocialLinks({ footer = false }) {
  return (
    <div className={`social-links${footer ? ' social-links--footer' : ''}`}>
      {socialLinks.map(({ label, href, icon }) => (
        <a key={label} href={href} aria-label={label} target="_blank" rel="noreferrer">
          <Icon name={icon} size={footer ? 17 : 18} />
        </a>
      ))}
    </div>
  );
}

function SectionHeading({ eyebrow, children, description }) {
  return (
    <div className="section-heading" data-reveal>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{children}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function PageLoader() {
  const [phase, setPhase] = useState('loading');

  useEffect(() => {
    const startedAt = performance.now();
    const minimumDuration = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ? 250
      : 850;
    let finished = false;
    let minimumTimer;
    let fallbackTimer;
    let exitTimer;

    const finishLoading = () => {
      if (finished) return;
      finished = true;
      window.clearTimeout(fallbackTimer);

      const remaining = Math.max(0, minimumDuration - (performance.now() - startedAt));
      minimumTimer = window.setTimeout(() => {
        setPhase('leaving');
        exitTimer = window.setTimeout(() => setPhase('hidden'), 550);
      }, remaining);
    };

    fallbackTimer = window.setTimeout(finishLoading, 4000);
    if (document.readyState === 'complete') {
      finishLoading();
    } else {
      window.addEventListener('load', finishLoading, { once: true });
    }

    return () => {
      window.removeEventListener('load', finishLoading);
      window.clearTimeout(minimumTimer);
      window.clearTimeout(fallbackTimer);
      window.clearTimeout(exitTimer);
    };
  }, []);

  if (phase === 'hidden') return null;

  return (
    <div
      className={`page-loader${phase === 'leaving' ? ' page-loader--leaving' : ''}`}
      role="status"
      aria-live="polite"
      aria-label="Loading Prince Solomon’s portfolio"
    >
      <div className="loader-content">
        <div className="loader-emblem" aria-hidden="true">
          <span className="loader-orbit loader-orbit--outer" />
          <span className="loader-orbit loader-orbit--inner" />
          <span className="loader-monogram">P<span>.</span></span>
          <span className="loader-spark loader-spark--one" />
          <span className="loader-spark loader-spark--two" />
        </div>
        <span className="loader-caption">A little bit of logic, a lot of curiosity.</span>
        <span className="loader-progress" aria-hidden="true"><span /></span>
        <span className="loader-status">Preparing your experience</span>
      </div>
    </div>
  );
}

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frameId = 0;

    const updateProgress = () => {
      frameId = 0;
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0);
    };

    const scheduleUpdate = () => {
      if (!frameId) frameId = window.requestAnimationFrame(updateProgress);
    };

    scheduleUpdate();
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);

    return () => {
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, []);

  const percentage = Math.round(progress * 100);

  return (
    <div
      className="scroll-progress"
      role="progressbar"
      aria-label="Page scroll progress"
      aria-valuemin="0"
      aria-valuemax="100"
      aria-valuenow={percentage}
    >
      <span style={{ transform: `scaleX(${progress})` }} />
    </div>
  );
}

function App() {
  const [activeFilter, setActiveFilter] = useState('All work');
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(
    () => window.localStorage.getItem('portfolio-theme') === 'light' ? 'light' : 'dark',
  );
  const visibleProjects = projects.filter(
    (project) => activeFilter === 'All work' || project.filters.includes(activeFilter),
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      'content',
      theme === 'dark' ? '#171310' : '#f6efe6',
    );
    window.localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.12 },
    );
    document.querySelectorAll('[data-reveal]').forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [activeFilter]);

  function handleContactSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const subject = encodeURIComponent(formData.get('subject'));
    const body = encodeURIComponent(
      `Hi Prince Solomon,\n\n${formData.get('message')}\n\nFrom: ${formData.get('name')} (${formData.get('email')})`,
    );
    window.location.href = `mailto:Prince_Solomon@yahoo.com?subject=${subject}&body=${body}`;
  }

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <PageLoader />
      <ScrollProgress />
      <header className="site-header">
        <nav className="nav-shell" aria-label="Main navigation">
          <a className="wordmark" href="#home" onClick={closeMenu} aria-label="Prince Solomon home">
            <span className="wordmark-mark">P<span>.</span></span>
            <span className="wordmark-name"><span>Prince</span><span className="wordmark-light">Solomon</span></span>
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <Icon name={menuOpen ? 'close' : 'menu'} size={22} />
          </button>
          <div className={`nav-links${menuOpen ? ' nav-links--open' : ''}`}>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#work" onClick={closeMenu}>Selected work</a>
            <a href="#experience" onClick={closeMenu}>Experience</a>
            <button
              className="theme-toggle"
              type="button"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
              onClick={() => setTheme((current) => current === 'dark' ? 'light' : 'dark')}
            >
              <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={16} />
              <span>{theme === 'dark' ? 'Light mode' : 'Dark mode'}</span>
            </button>
            <a className="nav-contact" href="#contact" onClick={closeMenu}>
              Let’s talk <Icon name="arrow" size={15} />
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="availability-pill" data-reveal>
              <span className="availability-dot" /> Open to new opportunities
            </div>
            <p className="hero-kicker" data-reveal>Software engineer · Lagos, Nigeria</p>
            <h1 data-reveal>
              Thoughtful code.<br />
              <span>Meaningful</span> experiences.
            </h1>
            <p className="hero-intro" data-reveal>
              Hey, I’m Prince Solomon — a software engineer who loves turning complex ideas into
              simple, useful things for the web.
            </p>
            <div className="hero-actions" data-reveal>
              <a className="button button--primary" href="#work">
                Explore my work <Icon name="arrow" size={17} />
              </a>
              <a className="text-link" href="#contact">Get in touch <Icon name="upRight" size={16} /></a>
            </div>
            <div className="hero-social" data-reveal>
              <span>Find me elsewhere</span>
              <SocialLinks />
            </div>
          </div>
          <div className="hero-visual" data-reveal="zoom">
            <div className="hero-visual-orbit" />
            <div className="portrait-frame">
              <img src={profileImage} alt="Portrait of Prince Solomon" />
            </div>
            <div className="floating-note floating-note--top">
              <span className="note-icon"><Icon name="spark" size={18} /></span>
              <span><strong>Curious by nature</strong><small>Always learning, always building</small></span>
            </div>
            <div className="floating-note floating-note--bottom">
              <span className="location-icon"><Icon name="pin" size={17} /></span>
              <span><strong>Lagos, Nigeria</strong><small>Working everywhere</small></span>
            </div>
            <span className="visual-caption">A little bit of logic, a lot of curiosity.</span>
          </div>
          <a className="scroll-cue" href="#about" aria-label="Scroll to about section">
            <span className="scroll-cue-line" /> Scroll to explore
          </a>
        </section>

        <section className="about section-wrap" id="about">
          <SectionHeading
            eyebrow="A little about me"
            description="I enjoy the space where thoughtful engineering meets a great user experience."
          >
            Building for people,<br className="desktop-break" /> one detail at a time.
          </SectionHeading>
          <div className="about-grid">
            <div className="about-story" data-reveal="left">
              <p className="about-lead">
                I’m a software engineer drawn to the craft of making the web feel a little
                more human.
              </p>
              <p>
                Whether I’m untangling a tricky problem or polishing an interface, I’m
                happiest learning something new and turning it into a product people can
                actually use. I value clear communication, useful collaboration, and the
                small details that make a big difference.
              </p>
              <a className="text-link about-resume" href={resumeFile} target="_blank" rel="noreferrer">
                Take a look at my resume <Icon name="upRight" size={16} />
              </a>
            </div>
            <div className="skill-panel" data-reveal="right">
              <div className="skill-panel-heading">
                <span className="skill-spark"><Icon name="spark" size={19} /></span>
                <div><strong>My toolkit</strong><span>Things I like to build with</span></div>
              </div>
              <div className="skill-list">
                {[
                  ['01', 'Frontend', 'JavaScript · HTML · CSS · Bootstrap'],
                  ['02', 'Backend', 'PHP · Ruby on Rails'],
                  ['03', 'What matters', 'Accessible UI · Responsive design · Teamwork'],
                ].map(([number, heading, details]) => (
                  <div className="skill-row" key={heading}>
                    <span className="skill-number">{number}</span>
                    <div><h3>{heading}</h3><p>{details}</p></div>
                    <Icon name="upRight" size={15} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="work section-wrap" id="work">
          <SectionHeading
            eyebrow="A few things I’ve made"
            description="A mix of personal experiments and collaborative projects. Each one taught me something new."
          >
            Selected work<span className="heading-period">.</span>
          </SectionHeading>
          <div className="work-toolbar" data-reveal>
            <div className="filter-list" role="group" aria-label="Filter projects">
              {filters.map((filter) => (
                <button
                  key={filter}
                  className={`filter-button${activeFilter === filter ? ' is-active' : ''}`}
                  type="button"
                  aria-pressed={activeFilter === filter}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
            <span className="project-count">{String(visibleProjects.length).padStart(2, '0')} projects</span>
          </div>
          <div className="project-grid">
            {visibleProjects.map((project) => (
              <article className="project-card" key={project.title} data-reveal="zoom">
                <div className={`project-image project-image--${project.tone}`}>
                  <img src={project.image} alt={`${project.title} project preview`} loading="lazy" />
                  <span className="project-index">{String(projects.indexOf(project) + 1).padStart(2, '0')}</span>
                  <a
                    className="project-open"
                    href={project.live || project.source}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${project.title}`}
                  >
                    <Icon name="upRight" size={18} />
                  </a>
                </div>
                <div className="project-info">
                  <div>
                    <span className="project-category">{project.category}</span>
                    <h3>{project.title}</h3>
                  </div>
                  <p>{project.description}</p>
                  <div className="project-footer">
                    <div className="project-tags">
                      {project.filters.map((filter) => <span key={filter}>{filter}</span>)}
                    </div>
                    <div className="project-links">
                      {project.live && (
                        <a href={project.live} target="_blank" rel="noreferrer" aria-label={`${project.title} live site`}>
                          Live <Icon name="upRight" size={14} />
                        </a>
                      )}
                      <a href={project.source} target="_blank" rel="noreferrer" aria-label={`${project.title} source code`}>
                        Code <Icon name="github" size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="work-note" data-reveal>
            <span /> More ideas are always in progress. <a href="https://github.com/princexz" target="_blank" rel="noreferrer">See what’s cooking on GitHub <Icon name="arrow" size={14} /></a>
          </p>
        </section>

        <section className="experience section-wrap" id="experience">
          <div className="experience-intro" data-reveal="left">
            <span className="eyebrow">The learning never stops</span>
            <h2>Growing through<br />every experience.</h2>
            <p>A few of the places and programs that have shaped the way I work.</p>
          </div>
          <div className="timeline" data-reveal="right">
            {[
              ['2023 — now', 'Computer & Robotic Engineering', 'University of Uyo, Nigeria'],
              ['2022 — now', 'Software Engineering', 'ALX Africa'],
              ['2020 — 2021', 'Full Stack Web Development', 'Tech Studio Academy'],
            ].map(([date, title, institution]) => (
              <div className="timeline-item" key={title}>
                <span className="timeline-dot" />
                <span className="timeline-date">{date}</span>
                <h3>{title}</h3>
                <p>{institution}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="contact section-wrap" id="contact">
          <div className="contact-card">
            <div className="contact-copy" data-reveal="left">
              <span className="eyebrow">Have a good one in mind?</span>
              <h2>Let’s make<br />something <span>matter.</span></h2>
              <p>
                Have a project, an opportunity, or just want to talk about making useful
                things for the web? My inbox is open.
              </p>
              <a className="contact-email" href="mailto:Prince_Solomon@yahoo.com">
                <Icon name="mail" size={18} /> Prince_Solomon@yahoo.com
              </a>
              <div className="contact-location"><Icon name="pin" size={16} /> Lagos, Nigeria <span>·</span> Available worldwide</div>
            </div>
            <form className="contact-form" onSubmit={handleContactSubmit} data-reveal="right">
              <div className="form-row">
                <label>
                  Your name
                  <input type="text" name="name" placeholder="Jane Smith" autoComplete="name" required />
                </label>
                <label>
                  Email address
                  <input type="email" name="email" placeholder="jane@company.com" autoComplete="email" required />
                </label>
              </div>
              <label>
                What’s it about?
                <input type="text" name="subject" placeholder="A project, an opportunity..." required />
              </label>
              <label>
                Your message
                <textarea name="message" rows="4" placeholder="A little about what you have in mind..." required />
              </label>
              <button className="button button--light" type="submit">
                Start a conversation <Icon name="arrow" size={17} />
              </button>
              <span className="form-note">This opens your email app with your message ready to send.</span>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <a className="wordmark footer-wordmark" href="#home" aria-label="Back to top">
          <span className="wordmark-mark">P<span>.</span></span>
          <span className="wordmark-name"><span>Prince</span><span className="wordmark-light">Solomon</span></span>
        </a>
        <p>Designed with care. Built with curiosity.</p>
        <SocialLinks footer />
        <span className="copyright">© {new Date().getFullYear()} Prince Solomon</span>
      </footer>
    </>
  );
}

export default App;
