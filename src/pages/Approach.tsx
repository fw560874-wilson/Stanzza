import { delivery, interiors, pillars } from "../data/content";
import { ImageReel } from "../components/ImageReel";
import { InteriorGallery } from "../components/InteriorGallery";

export function Approach() {
  return (
    <main id="main">
      <section className="container page-hero">
        <p className="kicker">Approach</p>
        <h1 className="serif">How a home stays composed.</h1>
        <p className="lead" style={{ marginTop: 20, maxWidth: 680 }}>
          Architecture, design and delivery move as one process. Nothing is handed off, and nothing moves forward
          without your approval.
        </p>
        <ImageReel shots={interiors.approach.slice(0, 8)} />
      </section>
      <section className="container" style={{ marginBottom: 64 }}>
        <InteriorGallery shots={interiors.approach} title="Process rooms" />
      </section>
      <section className="band">
        <div className="container">
          <h2 className="serif">Three layers, one interior.</h2>
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
      <section className="container" style={{ paddingBottom: 80 }}>
        <h2 className="serif">Controlled delivery. Calm by design.</h2>
        <div className="grid-4">
          {delivery.map((item) => (
            <article className="card" key={item.n}>
              <p className="n">{item.n}</p>
              <h3 className="serif">{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
