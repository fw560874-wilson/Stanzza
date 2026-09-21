import { type CSSProperties } from "react";
import { Link } from "react-router-dom";
import { interiors, projects } from "../data/content";
import { ImageReel } from "../components/ImageReel";
import { InteriorGallery } from "../components/InteriorGallery";

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
        <ImageReel shots={interiors.projects.slice(0, 8)} />
      </section>
      {projects.map((project, index) => (
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
          <figure className="anim-shot" style={{ "--shot-delay": `${0.08 + index * 0.04}s` } as CSSProperties}>
            <img src={project.image} alt={project.title} />
          </figure>
        </article>
      ))}
      <section className="container" style={{ paddingBottom: 80 }}>
        <InteriorGallery shots={interiors.projects} title="Selected rooms" />
      </section>
    </main>
  );
}
