import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  articles,
  clients,
  delivery,
  faqs,
  images,
  interiors,
  pillars,
  projects,
  stats,
  videos,
} from "../data/content";
import { useUi } from "../context/UiContext";
import { CallIcon } from "../components/CallIcon";
import { ImageReel } from "../components/ImageReel";
import { InteriorGallery } from "../components/InteriorGallery";

export function Home() {
  const { setInquiryOpen } = useUi();
  const { pathname, hash } = useLocation();
  const [active, setActive] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const cardRef = useRef<HTMLElement>(null);
  const project = projects[active];

  const showProject = (index: number) => {
    const total = projects.length;
    setActive(((index % total) + total) % total);
  };

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    let startX: number | null = null;

    const ignored = (target: EventTarget | null) =>
      target instanceof HTMLElement && Boolean(target.closest("a, button"));

    const onDown = (event: PointerEvent) => {
      if (ignored(event.target)) return;
      startX = event.clientX;
      try {
        card.setPointerCapture(event.pointerId);
      } catch {
        /* ignore when the pointer is not captured, for example in tests */
      }
    };
    const onUp = (event: PointerEvent) => {
      if (startX == null) return;
      const delta = event.clientX - startX;
      startX = null;
      if (Math.abs(delta) < 40) return;
      setActive((index) => {
        const total = projects.length;
        return delta > 0 ? (index + 1) % total : (index - 1 + total) % total;
      });
    };
    const onCancel = () => {
      startX = null;
    };

    card.addEventListener("pointerdown", onDown);
    card.addEventListener("pointerup", onUp);
    card.addEventListener("pointercancel", onCancel);
    return () => {
      card.removeEventListener("pointerdown", onDown);
      card.removeEventListener("pointerup", onUp);
      card.removeEventListener("pointercancel", onCancel);
    };
  }, []);

  return (
    <main className="snap-page" id="main">
      <section className="hero snap-section" id="hero">
        <div className="hero-media">
          <img src={images.hero} alt="" />
          <video autoPlay muted loop playsInline poster={images.hero}>
            <source src={videos.hero} type="video/webm" />
          </video>
          <div className="hero-shade" />
        </div>
        <div className="hero-copy reveal">
          <p className="script">Architecture × Design × Delivery</p>
          <h1 className="serif">A group of lines forming a unit within a poem.</h1>
          <p>Interiors designed as one complete whole.</p>
        </div>
        <button className="call-btn dark hero-cta" onClick={() => setInquiryOpen(true)}>
          <CallIcon />
          <span>Request a call</span>
        </button>
      </section>

      <section className="composition snap-section" id="composition">
        <div className="container composition-grid">
          <div className="composition-copy" data-reveal>
            <p className="kicker">01 · Studio</p>
            <h2 className="serif">A home is a composition.</h2>
            <p className="lead">
              In a well-composed interior, nothing is accidental. Proportion sets the structure, material sets the tone,
              and light shapes the space.
            </p>
            <p className="lead">
              We begin with how the home should work, refine how it should feel, and guide every decision through the
              build. This is how an interior stays coherent from concept to handover.
            </p>
            <ul className="composition-points">
              <li>
                <strong>Proportion</strong>
                <span>The structure of the room, before any finish is chosen.</span>
              </li>
              <li>
                <strong>Material</strong>
                <span>A quiet palette that ages, instead of performing.</span>
              </li>
              <li>
                <strong>Light</strong>
                <span>Day and evening scenarios laid out to the family’s rhythm.</span>
              </li>
            </ul>
          </div>
          <div className="composition-media" key={`${pathname}${hash}`}>
            <figure className="anim-shot" style={{ "--shot-delay": "0.05s" } as CSSProperties}>
              <img src={images.pauDetail} alt="Pau Claris living room" />
              <figcaption>Pau Claris · Barcelona</figcaption>
            </figure>
            <div className="composition-stack">
              <figure className="anim-shot" style={{ "--shot-delay": "0.14s" } as CSSProperties}>
                <img src={images.valencia} alt="Valencia apartment seating" />
                <figcaption>Valencia apartment</figcaption>
              </figure>
              <figure className="anim-shot" style={{ "--shot-delay": "0.22s" } as CSSProperties}>
                <img src={images.chok} alt="Cafe Chok facade" />
                <figcaption>Cafe Chok · Riyadh</figcaption>
              </figure>
            </div>
          </div>
        </div>
        <div className="container" style={{ marginTop: 48 }}>
          <ImageReel shots={interiors.about.slice(0, 8)} />
          <InteriorGallery shots={interiors.about} title="Rooms" />
        </div>
      </section>

      <section className="featured snap-section" data-reveal>
        <article ref={cardRef} className="featured-card" style={{ background: project.accent }}>
          <img key={project.slug} src={project.image} alt={project.title} />
          <div className="featured-copy">
            <p className="kicker" style={{ color: "rgba(255,255,255,.8)" }}>
              In years
            </p>
            <h2 className="serif">{project.title}</h2>
            <div className="meta-row">
              <div>
                <small>Project executed</small>
                <strong>In {project.days} days</strong>
              </div>
              <div>
                <small>Area</small>
                <strong>
                  {project.area} m<sup>2</sup>
                </strong>
              </div>
              <div>
                <small>City & country</small>
                <strong>
                  {project.city}, {project.country}
                </strong>
              </div>
            </div>
          </div>
          <div className="featured-actions">
            <Link className="pill" to={`/projects/${project.slug}`}>
              View project
            </Link>
            <Link className="pill light" to="/projects">
              View all projects
            </Link>
          </div>
        </article>
        <div className="project-dots">
          {projects.map((item, index) => (
            <button
              key={item.slug}
              className={index === active ? "active" : ""}
              onClick={() => showProject(index)}
              aria-label={`Show ${item.title}`}
            />
          ))}
        </div>
      </section>

      <section className="delivery snap-section" data-reveal>
        <div className="container">
          <p className="kicker">Composed</p>
          <h2 className="serif">
            Controlled delivery.
            <br />
            Calm by design.
          </h2>
          <p className="lead" style={{ marginTop: 20 }}>
            You always know what's happening, when, and what it costs. That's how we protect your budget, timing, and
            peace of mind.
          </p>
          <div className="grid-4">
            {delivery.map((item) => (
              <article className="card" key={item.n}>
                <p className="n">{item.n}</p>
                <h3 className="serif">{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="band">
        <div className="container">
          <p className="kicker">In years</p>
          <h2 className="serif">
            Architectural thinking.
            <br />
            Design sensibility.
            <br />
            Premium delivery.
          </h2>
          <div className="grid-3">
            {pillars.map((item) => (
              <article className="card" key={item.n}>
                <p className="n">{item.n}</p>
                <h3 className="serif">{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="band" id="about">
        <div className="container">
          <p className="kicker">In years</p>
          <h2 className="serif">About us.</h2>
          <div className="stats">
            {stats.map((item, index) => (
              <article className="stat" key={item.label}>
                <img
                  src={[images.yearsOne, images.yearsTwo, images.yearsThree, images.yearsFour][index]}
                  alt=""
                />
                <small>{item.label}</small>
                <span>{item.value}</span>
              </article>
            ))}
          </div>
          <div className="two-col">
            <p className="lead">
              In a well-composed interior, nothing is accidental. Proportion sets the structure, material sets the tone,
              and light shapes the space.
            </p>
            <div>
              <p className="lead">
                We begin with how the home should work, refine how it should feel, and guide every decision through the
                build. This is how an interior stays coherent from concept to handover.
              </p>
              <Link className="pill" to="/projects" style={{ marginTop: 24 }}>
                View projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="container">
          <p className="kicker">Trusted by</p>
          <h2 className="serif">Built together with.</h2>
          <div className="clients" style={{ marginTop: 36 }}>
            <div className="clients-track">
              {[...clients, ...clients].map((name, index) => (
                <span key={`${name}-${index}`}>{name}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="container">
          <p className="kicker">From the studio</p>
          <div className="page-hero-top">
            <h2 className="serif">Blog.</h2>
            <Link to="/blog">View all articles</Link>
          </div>
          <div className="blog-grid">
            {articles.map((article) => (
              <Link className="blog-card" to={`/blog/${article.slug}`} key={article.slug}>
                <img src={article.image} alt={article.title} />
                <div>
                  <p className="kicker">{article.date}</p>
                  <h3 className="serif">{article.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="quote container">
        <blockquote className="serif">“Good design feels inevitable. Nothing extra, nothing missing.”</blockquote>
        <p>Kirill · CEO & Founder</p>
      </section>

      <section className="container founder">
        <img src={images.kirill} alt="Kirill, founder of Stanzza" />
        <div>
          <p className="kicker">Kirill</p>
          <h2 className="serif">CEO & Founder</h2>
          <p className="lead" style={{ margin: "16px 0 24px" }}>
            Kirill works like an architect inside the interior. Proportion first, then material and light. Calm,
            precise, finished spaces.
          </p>
          <p>
            Email
            <br />
            <a href="mailto:kirill@stanzza.design">kirill@stanzza.design</a>
          </p>
          <p style={{ marginTop: 16 }}>
            Location
            <br />
            Barcelona
          </p>
        </div>
      </section>

      <section className="container faq">
        <p className="kicker">FAQs</p>
        <h2 className="serif">Questions clients often ask</h2>
        <div style={{ marginTop: 28 }}>
          {faqs.map((item, index) => (
            <article className="faq-item" key={item.q}>
              <button onClick={() => setOpenFaq(openFaq === index ? null : index)}>
                <span>{item.q}</span>
                <span>{openFaq === index ? "–" : "+"}</span>
              </button>
              {openFaq === index ? <p>{item.a}</p> : null}
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
