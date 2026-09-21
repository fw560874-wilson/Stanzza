import { Link, useParams } from "react-router-dom";
import { interiors, projects } from "../data/content";
import { InteriorGallery } from "../components/InteriorGallery";
import { ImageReel } from "../components/ImageReel";
import { NotFound } from "./NotFound";

export function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);
  if (!project) return <NotFound />;

  return (
    <main id="main">
      <section className="container detail-hero">
        <Link to="/projects" className="kicker">
          ← Projects
        </Link>
        <h1 className="serif">{project.title}</h1>
        <div className="detail-stats">
          <div>
            <small>City</small>
            <strong>{project.city}</strong>
          </div>
          <div>
            <small>Country</small>
            <strong>{project.country}</strong>
          </div>
          <div>
            <small>Area</small>
            <strong>{project.area} m²</strong>
          </div>
          <div>
            <small>Executed</small>
            <strong>In {project.days} days</strong>
          </div>
        </div>
        <ImageReel shots={project.gallery.map((src) => ({ src, alt: project.title }))} />
      </section>
      <section className="container prose" style={{ paddingBottom: 40 }}>
        <h3 className="serif">Client</h3>
        <p>{project.client}</p>
        <h3 className="serif">Objective</h3>
        <p>{project.objective}</p>
        <h3 className="serif">Solution</h3>
        <p>{project.solution}</p>
        {project.notes.map((note) => (
          <div key={note.title}>
            <h3 className="serif">{note.title}</h3>
            <p>{note.text}</p>
          </div>
        ))}
      </section>
      <section className="container gallery-stack">
        {project.gallery.map((src) => (
          <figure className="anim-shot" key={src}>
            <img src={src} alt={project.title} />
          </figure>
        ))}
      </section>
      <section className="container" style={{ paddingBottom: 80 }}>
        <InteriorGallery shots={interiors.projects} title="More rooms" />
      </section>
    </main>
  );
}
