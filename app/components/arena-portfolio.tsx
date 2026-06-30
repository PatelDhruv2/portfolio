"use client";

import { type ButtonHTMLAttributes, type CSSProperties, type FormEvent, useEffect, useState } from "react";

import { portfolio } from "@/data/portfolio";

type SectionId = "about" | "skills" | "projects" | "experience" | "contact";

const courtStops: Array<{
  id: SectionId;
  label: string;
  kicker: string;
  x: number;
  y: number;
  rot: number;
}> = [
  { id: "about", label: "About Me", kicker: "Center lane", x: 50, y: 50, rot: 0 },
  { id: "skills", label: "Skills", kicker: "Left lane", x: 18, y: 48, rot: -10 },
  { id: "projects", label: "Projects", kicker: "Right lane", x: 82, y: 48, rot: 10 },
  { id: "experience", label: "Experience", kicker: "Front pole", x: 50, y: 18, rot: -90 },
  { id: "contact", label: "Contact", kicker: "Back pole", x: 50, y: 82, rot: 90 },
] as const;

const projectAccents = [
  "linear-gradient(135deg, #d97706, #f59e0b)",
  "linear-gradient(135deg, #0f766e, #14b8a6)",
  "linear-gradient(135deg, #7c3aed, #c084fc)",
] as const;

const projectScenes = [
  {
    title: "Grocery hub",
    caption: "Catalog, cart, checkout",
    variant: "market",
  },
  {
    title: "Chat rooms",
    caption: "Presence, typing, delivery",
    variant: "chat",
  },
  {
    title: "Mail engine",
    caption: "Rules, triggers, sends",
    variant: "mail",
  },
] as const;

const skillIcons = ["R", "B", "D", "O", "C"] as const;

function ArenaButton({
  className = "",
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { className?: string }) {
  return (
    <button type={props.type ?? "button"} className={`arena-button ${className}`.trim()} {...props}>
      {children}
    </button>
  );
}

function SectionBadge({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy: string;
}) {
  return (
    <div className="arena-section-badge">
      <span className="arena-eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{copy}</p>
    </div>
  );
}

function SectionContent({
  activeId,
  onOpenSection,
}: {
  activeId: SectionId;
  onOpenSection: (id: SectionId) => void;
}) {
  if (activeId === "about") {
    return (
      <section className="arena-view is-about" id="about">
        <SectionBadge
          eyebrow="About Me"
          title={portfolio.name}
          copy="A backend-first builder who likes clean systems, clear motion, and interfaces that feel like the game is moving under your fingertips."
        />

        <div className="about-grid">
          <article className="arena-card arena-card--soft">
            <p className="arena-card__kicker">Quick read</p>
            <p className="arena-card__lead">{portfolio.intro}</p>
            <p className="arena-card__muted">{portfolio.status}</p>
          </article>

          <article className="arena-card">
            <p className="arena-card__kicker">Highlights</p>
            <div className="tag-row">
              <span className="tag-chip">{portfolio.location}</span>
              <span className="tag-chip">{portfolio.education.school}</span>
              <span className="tag-chip">{portfolio.education.period}</span>
              {portfolio.languages.map((item) => (
                <span key={item} className="tag-chip">
                  {item}
                </span>
              ))}
            </div>
          </article>

          <article className="arena-card arena-card--actions">
            <p className="arena-card__kicker">Jump to a lane</p>
            <div className="tag-row">
              <ArenaButton onClick={() => onOpenSection("skills")}>Skills</ArenaButton>
              <ArenaButton onClick={() => onOpenSection("projects")}>Projects</ArenaButton>
              <ArenaButton onClick={() => onOpenSection("experience")}>Experience</ArenaButton>
              <ArenaButton onClick={() => onOpenSection("contact")}>Contact</ArenaButton>
            </div>
          </article>
        </div>
      </section>
    );
  }

  if (activeId === "skills") {
    return (
      <section className="arena-view" id="skills">
        <SectionBadge
          eyebrow="Skills"
          title="Players on the lane"
          copy="Each row behaves like a different unit on the field, keeping the stack readable and quick to scan."
        />

        <div className="skill-roster">
          {portfolio.skillGroups.map((group, index) => (
            <article key={group.label} className="skill-card" style={{ "--skill-delay": `${index * 90}ms` } as CSSProperties}>
              <div className="skill-card__head">
                <span className="skill-card__icon">{skillIcons[index % skillIcons.length]}</span>
                <div>
                  <p className="arena-card__kicker">{group.label}</p>
                  <h3>{group.label}</h3>
                </div>
              </div>

              <div className="tag-row">
                {group.items.map((item) => (
                  <span key={item} className="tag-chip">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    );
  }

  if (activeId === "projects") {
    return (
      <section className="arena-view" id="projects">
        <SectionBadge
          eyebrow="Projects"
          title="Poles and stops"
          copy="Three main builds are staged like marked stops along the lane. Each one has a visual tile, stack, and a direct link."
        />

        <div className="project-grid">
          {portfolio.projects.map((project, index) => (
            <a
              key={project.name}
              className="project-pole"
              href={project.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.name} repository`}
            >
              <div
                className={`project-pole__art project-pole__art--${projectScenes[index].variant}`}
                style={{ "--project-accent": projectAccents[index] } as CSSProperties}
              >
                <span className="project-pole__number">0{index + 1}</span>

                <div className="project-pole__photo" aria-hidden="true">
                  <span className="project-pole__photo-badge">{projectScenes[index].title}</span>
                  <div className="project-pole__photo-panel">
                    <span className="project-pole__photo-line project-pole__photo-line--wide" />
                    <span className="project-pole__photo-line" />
                    <span className="project-pole__photo-line project-pole__photo-line--short" />
                  </div>
                  <span className="project-pole__photo-caption">{projectScenes[index].caption}</span>
                </div>
              </div>

              <div className="project-pole__body">
                <h3>{project.name}</h3>
                <p>{project.summary}</p>

                <div className="tag-row">
                  {project.stack.slice(0, 5).map((item) => (
                    <span key={item} className="tag-chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
    );
  }

  if (activeId === "experience") {
    return (
      <section className="arena-view" id="experience">
        <SectionBadge
          eyebrow="Experience"
          title="Timeline on the field"
          copy="The lane stays simple: one internship, one academic track, and the wins that explain how the work got stronger."
        />

        <div className="timeline-stack">
          {portfolio.experience.map((item) => (
            <article key={item.company} className="timeline-card">
              <div className="timeline-card__head">
                <div>
                  <p className="arena-card__kicker">{item.company}</p>
                  <h3>{item.role}</h3>
                </div>
                <span>{item.period}</span>
              </div>

              <p className="arena-card__lead">{item.summary}</p>

              <ul className="bullet-list">
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </article>
          ))}

          <article className="timeline-card timeline-card--education">
            <div className="timeline-card__head">
              <div>
                <p className="arena-card__kicker">Education</p>
                <h3>{portfolio.education.school}</h3>
              </div>
              <span>{portfolio.education.period}</span>
            </div>

            <p className="arena-card__lead">{portfolio.education.degree}</p>

            <div className="tag-row">
              {portfolio.education.achievements.map((item) => (
                <span key={item} className="tag-chip">
                  {item}
                </span>
              ))}
            </div>
          </article>
        </div>
      </section>
    );
  }

  return (
    <section className="arena-view" id="contact">
      <SectionBadge
        eyebrow="Contact"
        title="Call the next play"
        copy="A lightweight form and social links make it easy to start a conversation without leaving the ground."
      />

      <div className="contact-layout">
        <form
          className="contact-form arena-card"
          onSubmit={(event: FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const name = String(formData.get("name") ?? "").trim();
            const email = String(formData.get("email") ?? "").trim();
            const message = String(formData.get("message") ?? "").trim();
            const subject = encodeURIComponent(`Portfolio inquiry from ${name || "a visitor"}`);
            const body = encodeURIComponent(
              [`Name: ${name || "Anonymous"}`, `Email: ${email || "Not provided"}`, "", message || "Hello Dhruv,"].join(
                "\n",
              ),
            );
            window.location.href = `mailto:${portfolio.email}?subject=${subject}&body=${body}`;
          }}
        >
          <p className="arena-card__kicker">Contact form</p>

          <label>
            Name
            <input name="name" type="text" placeholder="Your name" />
          </label>

          <label>
            Email
            <input name="email" type="email" placeholder="you@example.com" />
          </label>

          <label>
            Message
            <textarea name="message" rows={5} placeholder="Tell me what you want to build." />
          </label>

          <ArenaButton type="submit">Send message</ArenaButton>
        </form>

        <div className="contact-links-stack">
          <article className="arena-card arena-card--soft">
            <p className="arena-card__kicker">Direct links</p>
            <div className="contact-link-list">
              <a href={`mailto:${portfolio.email}`}>{portfolio.email}</a>
              <a href={portfolio.links.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href={portfolio.links.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href={portfolio.links.resume} target="_blank" rel="noreferrer">
                Resume
              </a>
            </div>
          </article>

          <article className="arena-card">
            <p className="arena-card__kicker">Favorite territory</p>
            <div className="tag-row">
              {portfolio.interests.map((item) => (
                <span key={item} className="tag-chip">
                  {item}
                </span>
              ))}
              <span className="tag-chip">{portfolio.location}</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function PlayerFigure({
  active,
  running,
  onOpenAbout,
}: {
  active: (typeof courtStops)[number];
  running: boolean;
  onOpenAbout: () => void;
}) {
  return (
    <button
      type="button"
      className={`player ${running ? "is-running" : ""}`}
      style={
        {
          "--player-x": `${active.x}%`,
          "--player-y": `${active.y}%`,
          "--player-rot": `${active.rot}deg`,
        } as CSSProperties
      }
      onClick={() => {
        onOpenAbout();
      }}
      aria-label="About Me"
    >
      <span className="player-shadow" />
      <span className="player-figure" aria-hidden="true">
        <span className="player-head" />
        <span className="player-body" />
        <span className="player-arm player-arm--left" />
        <span className="player-arm player-arm--right" />
        <span className="player-leg player-leg--left" />
        <span className="player-leg player-leg--right" />
      </span>
      <span className="player-caption">About Me</span>
    </button>
  );
}

export function ArenaPortfolio() {
  const [activeId, setActiveId] = useState<SectionId>("about");
  const [running, setRunning] = useState(false);
  const [spot, setSpot] = useState({ x: 50, y: 50 });

  const activeStop = courtStops.find((stop) => stop.id === activeId) ?? courtStops[0];

  function activateSection(id: SectionId) {
    setRunning(true);
    setActiveId(id);
  }

  useEffect(() => {
    const timer = window.setTimeout(() => setRunning(false), 520);
    return () => window.clearTimeout(timer);
  }, [activeId]);

  return (
    <main className="arena-shell">
      <div className="arena-noise" />
      <div className="arena-glow arena-glow--left" />
      <div className="arena-glow arena-glow--right" />

      <header className="arena-topbar">
        <a className="arena-brand" href="#ground" aria-label={`${portfolio.name} home`}>
          <span className="arena-brand__mark">DP</span>
          <span className="arena-brand__copy">
            <strong>{portfolio.name}</strong>
            <small>Interactive field map</small>
          </span>
        </a>

        <nav className="arena-nav" aria-label="Primary">
          {courtStops.map((stop) => (
            <ArenaButton
              key={stop.id}
              className={activeId === stop.id ? "is-active" : ""}
              onClick={() => activateSection(stop.id)}
            >
              {stop.label}
            </ArenaButton>
          ))}
        </nav>
      </header>

      <section id="ground" className="arena-hero">
        <div className="arena-hero__copy">
          <span className="arena-eyebrow">Interactive ground navigation</span>
          <h1>A single court where every lane opens a different part of my work.</h1>
          <p className="arena-hero__lead">
            Tap the center player or any lane seat to reveal the matching section beside the court.
          </p>

          <div className="arena-actions">
            <ArenaButton
              className="arena-button--primary"
              onClick={() => activateSection("about")}
            >
              Start at center
            </ArenaButton>
            <a className="arena-button arena-button--ghost" href={`mailto:${portfolio.email}`}>
              Contact directly
            </a>
          </div>

          <div className="arena-pills">
            <span>{portfolio.location}</span>
            <span>{portfolio.education.school}</span>
            <span>{portfolio.education.period}</span>
          </div>
        </div>

        <div className="arena-stage" onPointerMove={(event) => {
          const rect = event.currentTarget.getBoundingClientRect();
          const x = ((event.clientX - rect.left) / rect.width) * 100;
          const y = ((event.clientY - rect.top) / rect.height) * 100;
          setSpot({ x, y });
        }}>
          <div className="arena-court" style={{ "--spot-x": `${spot.x}%`, "--spot-y": `${spot.y}%` } as CSSProperties}>
            <div className="arena-court__edge" />
            <div className="arena-court__lane arena-court__lane--main" />
            <div className="arena-court__lane arena-court__lane--cross arena-court__lane--cross-a" />
            <div className="arena-court__lane arena-court__lane--cross arena-court__lane--cross-b" />
            <div className="arena-court__dust" />

            {courtStops.map((stop) => (
              <ArenaButton
                key={stop.id}
                className={`court-seat court-seat--${stop.id} ${activeId === stop.id ? "is-active" : ""}`}
                onClick={() => activateSection(stop.id)}
              >
                <span className="court-seat__kicker">{stop.kicker}</span>
                <strong>{stop.label}</strong>
              </ArenaButton>
            ))}

            <PlayerFigure
              active={activeStop}
              running={running}
              onOpenAbout={() => activateSection("about")}
            />
          </div>
        </div>
      </section>

      <section className="arena-drawer" aria-live="polite">
        <SectionContent activeId={activeId} onOpenSection={activateSection} />
      </section>
    </main>
  );
}
