"use client";

import { useEffect, useMemo, useState } from "react";

import { portfolio } from "@/data/portfolio";

type SectionId = "about" | "projects" | "experience" | "contact";

const navItems: Array<{ id: SectionId; label: string }> = [
  { id: "about", label: "/about" },
  { id: "projects", label: "/projects" },
  { id: "experience", label: "/experience" },
  { id: "contact", label: "/contact" },
];

const metrics = [
  {
    label: "Cache latency",
    value: "50ms -> 5ms",
    context: "via Redis caching, grocery platform",
  },
  {
    label: "Peak throughput",
    value: "2,935 msg/sec",
    context: "WebSocket benchmark, chat app",
  },
  {
    label: "Instances load-balanced",
    value: "4",
    context: "Nginx, grocery platform",
  },
  {
    label: "Problems solved",
    value: "1,400+",
    context: "Codeforces + LeetCode + CodeChef",
  },
] as const;

const projectStats = [
  ["19+ endpoints", "50ms->5ms", "4 instances"],
  ["2,935+ msg/sec", "OAuth + OTP", "Redis adapter"],
  ["Gmail API", "priority rules", "Vercel/Railway"],
] as const;

const primaryTech = ["Kafka", "Socket.IO", "BullMQ"] as const;

function useLocalTime() {
  const [time, setTime] = useState("");

  useEffect(() => {
    function updateTime() {
      setTime(
        new Intl.DateTimeFormat("en-IN", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }).format(new Date()),
      );
    }

    updateTime();
    const timer = window.setInterval(updateTime, 1000);
    return () => window.clearInterval(timer);
  }, []);

  return time;
}

function StatusStrip({ className = "" }: { className?: string }) {
  const time = useLocalTime();

  return (
    <div className={`status-strip ${className}`.trim()}>
      <span className="status-strip__line">
        <span className="status-strip__dot" aria-hidden="true" />
        STATUS: OPEN TO INTERNSHIPS
      </span>
      <span className="status-strip__time">{time || "--:--"} IST</span>
    </div>
  );
}

function SectionHeading({
  label,
  title,
  copy,
}: {
  label: string;
  title: string;
  copy: string;
}) {
  return (
    <div className="section-heading">
      <span className="section-label">{label}</span>
      <h2>{title}</h2>
      <p>{copy}</p>
    </div>
  );
}

export function ArenaPortfolio() {
  const [activeId, setActiveId] = useState<SectionId>("about");
  const [menuOpen, setMenuOpen] = useState(false);

  const contactLinks = useMemo(
    () => [
      { label: "Email", value: portfolio.email, href: `mailto:${portfolio.email}` },
      { label: "GitHub", value: "github.com/PatelDhruv2", href: portfolio.links.github },
      { label: "LinkedIn", value: "linkedin.com/in/pateldhruv22", href: portfolio.links.linkedin },
    ],
    [],
  );

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveId(visible.target.id as SectionId);
        }
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: [0.1, 0.3, 0.6] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <main className="ops-shell">
      <header className="mobile-topbar">
        <strong>{portfolio.name}</strong>
        <button
          className="menu-button"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <aside className={`ops-sidebar ${menuOpen ? "is-open" : ""}`}>
        <a className="ops-brand" href="#about" onClick={closeMenu}>
          {portfolio.name}
          <small>{portfolio.title}</small>
        </a>

        <nav className="ops-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a
              key={item.id}
              className={activeId === item.id ? "is-active" : ""}
              href={`#${item.id}`}
              onClick={() => {
                setActiveId(item.id);
                closeMenu();
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <StatusStrip />
      </aside>

      <div className="ops-main">
        <section className="hero-section" id="about">
          <div className="hero-copy">
            <span className="section-label">System status</span>
            <h1>{portfolio.name}</h1>
            <p>{portfolio.intro}</p>
          </div>

          <div className="metric-grid" aria-label="Portfolio metrics">
            {metrics.map((metric) => (
              <article key={metric.label} className="metric-card">
                <span className="metric-card__label">{metric.label}</span>
                <strong className="metric-card__value">{metric.value}</strong>
                <p className="metric-card__context">{metric.context}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section" id="projects">
          <SectionHeading
            label="Project log"
            title="Production-minded builds, logged by system impact."
            copy="Each row keeps the stack visible and lets the measured result lead the read."
          />

          <div className="project-log">
            {portfolio.projects.map((project, index) => (
              <article className="project-row" key={project.name}>
                <div className="project-stack" aria-label={`${project.name} stack`}>
                  {project.stack.map((item) => (
                    <span key={item} className={item === primaryTech[index] ? "is-primary" : ""}>
                      {item}
                    </span>
                  ))}
                </div>

                <div className="project-body">
                  <h3>{project.name}</h3>
                  <p>{project.summary}</p>

                  <div className="stat-row">
                    {projectStats[index].map((stat) => (
                      <span key={stat} className="stat-chip">
                        {stat}
                      </span>
                    ))}
                  </div>

                  <a className="source-link" href={project.href} target="_blank" rel="noreferrer">
                    view source -&gt;
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section" id="experience">
          <SectionHeading
            label="Experience"
            title="Work history and technical inventory."
            copy="No ratings or filler meters, just the role, the shipped work, and the stack I reach for."
          />

          <div className="experience-grid">
            {portfolio.experience.map((item) => (
              <article className="timeline-entry" key={item.company}>
                <div className="timeline-head">
                  <div>
                    <span className="section-label">{item.company}</span>
                    <h3>{item.role}</h3>
                  </div>
                  <span className="timeline-date">{item.period}</span>
                </div>

                <ul>
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </article>
            ))}

            <div className="skills-grid">
              {portfolio.skillGroups.map((group) => (
                <article className="skill-group" key={group.label}>
                  <span className="skill-group__label">{group.label}</span>
                  <div className="skill-token-row">
                    {group.items.map((item) => (
                      <span className="skill-token" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <footer className="content-section contact-footer" id="contact">
          <span className="section-label">Contact</span>
          <h2>let&apos;s talk</h2>

          <div className="contact-grid">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                className="contact-link"
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              >
                <span className="contact-link__label">{link.label}</span>
                <span className="contact-link__value">{link.value}</span>
              </a>
            ))}
          </div>

          <StatusStrip className="contact-status" />
        </footer>
      </div>
    </main>
  );
}
