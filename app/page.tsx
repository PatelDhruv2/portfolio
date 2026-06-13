import type { ReactNode } from "react";

import { ReactionDock } from "./components/reaction-dock";
import { portfolio } from "@/data/portfolio";

function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="section-title">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

function SurfaceCard({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return <article className={`surface-card ${className}`.trim()}>{children}</article>;
}

export default function Home() {
  return (
    <main className="page-shell">
      <div className="ambient ambient-left" />
      <div className="ambient ambient-right" />
      <div className="grid-overlay" />

      <section className="hero section">
        <div className="hero-copy">
          <span className="eyebrow">Full-Stack Developer | Realtime Systems | Competitive Programmer</span>
          <h1>
            Building products that feel sharp on the surface and stay strong under the hood.
          </h1>
          <p className="hero-intro">{portfolio.intro}</p>

          <div className="hero-actions">
            <a className="button button-primary" href={`mailto:${portfolio.email}`}>
              Start a conversation
            </a>
            <a className="button button-secondary" href={portfolio.links.resume} target="_blank" rel="noreferrer">
              Download resume
            </a>
          </div>

          <ReactionDock />

          <div className="quick-facts">
            <span>{portfolio.location}</span>
            <span>{portfolio.education.school}</span>
            <span>{portfolio.education.period}</span>
          </div>

          <div className="hero-panels">
            <SurfaceCard className="hero-panel hero-panel-primary">
              <p className="panel-label">Now</p>
              <p className="panel-copy">{portfolio.status}</p>
            </SurfaceCard>

            <SurfaceCard className="hero-panel">
              <p className="panel-label">Strengths</p>
              <ul className="bullet-list compact">
                <li>Distributed system thinking for real product constraints</li>
                <li>Realtime UX with sockets, presence, and event-driven flows</li>
                <li>Competitive programming discipline applied to engineering speed</li>
              </ul>
            </SurfaceCard>
          </div>
        </div>

        <div className="hero-visual">
          <div className="orbit-stage">
            <div className="orbit-ring orbit-ring-large" />
            <div className="orbit-ring orbit-ring-small" />

            <div className="cube">
              <span className="cube-face cube-front">Next.js</span>
              <span className="cube-face cube-back">Kafka</span>
              <span className="cube-face cube-right">Redis</span>
              <span className="cube-face cube-left">Socket.IO</span>
              <span className="cube-face cube-top">Docker</span>
              <span className="cube-face cube-bottom">Prisma</span>
            </div>

            <SurfaceCard className="floating-card floating-card-top">
              <p className="panel-label">Focused on</p>
              <p className="floating-value">Scalable web systems</p>
            </SurfaceCard>

            <SurfaceCard className="floating-card floating-card-bottom">
              <p className="panel-label">Track record</p>
              <p className="floating-value">600+ LeetCode | 1200+ problems solved</p>
            </SurfaceCard>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="stats-strip">
          {portfolio.stats.map((stat) => (
            <SurfaceCard key={stat.label} className="stat-card">
              <p className="stat-value">{stat.value}</p>
              <p className="stat-label">{stat.label}</p>
            </SurfaceCard>
          ))}
        </div>
      </section>

      <section className="section section-grid">
        <div>
          <SectionTitle
            eyebrow="Featured Work"
            title="Projects built for scale, speed, and product realism"
            description="Each project is framed around real engineering decisions: throughput, auth, deployment, observability, and user flow clarity."
          />

          <div className="project-grid">
            {portfolio.projects.map((project) => (
              <SurfaceCard key={project.name} className="project-card">
                <div className="project-header">
                  <div>
                    <p className="project-kicker">Case study</p>
                    <h3>{project.name}</h3>
                  </div>
                  <a href={project.href} target="_blank" rel="noreferrer">
                    View code
                  </a>
                </div>

                <p className="project-summary">{project.summary}</p>

                <div className="tag-row">
                  {project.stack.map((item) => (
                    <span key={item} className="tag">
                      {item}
                    </span>
                  ))}
                </div>

                <ul className="bullet-list">
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </SurfaceCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section split-section">
        <div>
          <SectionTitle
            eyebrow="Experience"
            title="Shipping features in production-minded environments"
            description="Dhruv already has internship exposure to collaborative shipping, realtime features, and maintainable service architecture."
          />

          <div className="timeline">
            {portfolio.experience.map((item) => (
              <SurfaceCard key={item.company} className="timeline-card">
                <div className="timeline-meta">
                  <div>
                    <p className="project-kicker">{item.company}</p>
                    <h3>{item.role}</h3>
                  </div>
                  <span>{item.period}</span>
                </div>
                <p className="project-summary">{item.summary}</p>
                <ul className="bullet-list">
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </SurfaceCard>
            ))}
          </div>
        </div>

        <SurfaceCard className="education-card">
          <p className="project-kicker">Education</p>
          <h3>{portfolio.education.school}</h3>
          <p className="education-degree">{portfolio.education.degree}</p>
          <p className="education-period">{portfolio.education.period}</p>

          <div className="achievement-block">
            <p className="panel-label">Entrance and academic highlights</p>
            <div className="tag-row">
              {portfolio.education.achievements.map((item) => (
                <span key={item} className="tag">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="achievement-block">
            <p className="panel-label">Languages</p>
            <div className="tag-row">
              {portfolio.languages.map((item) => (
                <span key={item} className="tag">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="achievement-block">
            <p className="panel-label">Interests</p>
            <div className="tag-row">
              {portfolio.interests.map((item) => (
                <span key={item} className="tag">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </SurfaceCard>
      </section>

      <section className="section split-section">
        <div>
          <SectionTitle
            eyebrow="Skill Architecture"
            title="Comfortable across the product stack"
            description="The portfolio leans into breadth without losing the backend depth visible across distributed systems, data infrastructure, and deployment workflows."
          />

          <div className="skill-grid">
            {portfolio.skillGroups.map((group) => (
              <SurfaceCard key={group.label} className="skill-card">
                <h3>{group.label}</h3>
                <div className="tag-row">
                  {group.items.map((item) => (
                    <span key={item} className="tag">
                      {item}
                    </span>
                  ))}
                </div>
              </SurfaceCard>
            ))}
          </div>
        </div>

        <SurfaceCard className="profile-panel">
          <p className="project-kicker">Competitive Programming</p>
          <h3>Algorithmic rigor that shows up in engineering decisions</h3>
          <p className="project-summary">
            Strong problem-solving habits support how Dhruv approaches system design, optimization, and implementation detail.
          </p>

          <div className="profile-list">
            {portfolio.profiles.map((profile) => (
              <a
                key={profile.label}
                className="profile-item"
                href={profile.href}
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <p className="panel-label">{profile.label}</p>
                  <p className="profile-value">{profile.value}</p>
                </div>
                <span>{profile.detail}</span>
              </a>
            ))}
          </div>
        </SurfaceCard>
      </section>

      <section className="section">
        <SurfaceCard className="cta-card">
          <div>
            <span className="eyebrow">Let&apos;s Build</span>
            <h2>Open to internships, strong teams, and ambitious product work.</h2>
            <p>
              If you want someone who cares about both system depth and how the final experience feels, Dhruv would be a strong fit.
            </p>
          </div>

          <div className="cta-actions">
            <a className="button button-primary" href={`mailto:${portfolio.email}`}>
              {portfolio.email}
            </a>
            <a className="button button-secondary" href={portfolio.links.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="button button-secondary" href={portfolio.links.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </SurfaceCard>
      </section>
    </main>
  );
}
