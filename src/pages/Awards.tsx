import { Link } from "react-router-dom";
import { awards, images, stats } from "../data/content";
import { useUi } from "../context/UiContext";

export function Awards() {
  const { setInquiryOpen } = useUi();

  return (
    <main>
      <section className="hero" id="hero">
        <div className="hero-media">
          <img src={images.hero} alt="Stanzza interior composed for award submission" />
          <div className="hero-shade" />
        </div>
        <div className="hero-copy reveal">
          <p className="script">Recognised work · Composed rooms</p>
          <h1 className="serif">Awards and recognition.</h1>
          <p>The studio, the site, and the interiors — judged by the same standard: nothing extra, nothing missing.</p>
          <button className="pill" onClick={() => setInquiryOpen(true)}>
            Request a call
          </button>
        </div>
      </section>

      <section className="composition">
        <div className="container">
          <p className="kicker">2026</p>
          <h2 className="serif">Awwwards nominee.</h2>
          <div className="two-col" style={{ marginTop: 28 }}>
            <p className="lead">
              STANZZA design was nominated on Awwwards in September 2026. The site was built as the studio works:
              proportion first, then material, then light. Editorial pacing, honest photography, and a complete path
              from first enquiry to handover.
            </p>
            <p className="lead">
              An award is useful only if the rooms behind it are true. The nomination sits next to 20 years of practice,
              10 years in Spain, and interiors delivered in Barcelona and Riyadh.
            </p>
          </div>
          <div className="award-grid">
            {awards.map((item) => (
              <article className="award-card" key={item.title}>
                <p className="year">
                  {item.year} · {item.org}
                </p>
                <h3 className="serif">{item.title}</h3>
                <p style={{ color: "var(--muted)" }}>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="featured">
        <article className="featured-card" style={{ background: "#7A8452" }}>
          <img src={images.pau} alt="Pau Claris Apartment" />
          <div className="featured-copy">
            <p className="kicker" style={{ color: "rgba(255,255,255,.8)" }}>
              Selected work
            </p>
            <h2 className="serif">The rooms that hold the standard.</h2>
            <p style={{ maxWidth: 520, margin: "0 auto 28px" }}>
              Pau Claris, Valencia, Jazean, Dose and Cafe Chok — interiors judged by how they live, not how they
              photograph.
            </p>
            <Link className="pill" to="/projects">
              View all projects
            </Link>
          </div>
        </article>
      </section>

      <section className="band">
        <div className="container">
          <p className="kicker">In years</p>
          <h2 className="serif">Numbers behind the work.</h2>
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
        </div>
      </section>
    </main>
  );
}
