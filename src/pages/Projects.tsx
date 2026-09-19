import { Link } from "react-router-dom";
import { projects } from "../data/content";

export function Projects() {
  return (
    <main id="main">
      <section className="container page-hero">
        <Link to="/" className="kicker">
          ← Home
        </Link>
        <div className="page-hero-top">
          <h1 className="serif">Projects</h1>
          <p className="count">+{projects.length}</p>
        </div>
      </section>
      {projects.map((project) => (
        <article className="container project-row" key={project.slug}>
          <div className="project-meta">
            <p>{project.date}</p>
            <h2 className="serif">{project.title}</h2>
            <p>Project executed</p>
            <p className="serif" style={{ fontSize: 32, color: "var(--ink)" }}>
              In {project.days} days
            </p>
            <p>Area</p>
            <p className="serif" style={{ fontSize: 32, color: "var(--ink)" }}>
              {project.area} m²
            </p>
            <p>Project location</p>
            <p className="serif" style={{ fontSize: 32, color: "var(--ink)" }}>
              {project.country}, {project.city}
            </p>
            <Link className="pill" to={`/projects/${project.slug}`} style={{ marginTop: 24 }}>
              View details
            </Link>
          </div>
          <img src={project.image} alt={project.title} />
        </article>
      ))}
    </main>
  );
}
