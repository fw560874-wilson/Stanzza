import { Link } from "react-router-dom";
import { studio } from "../data/content";
import { useUi } from "../context/UiContext";
import { InquiryForm } from "./InquiryForm";

export function Footer() {
  const { setInquiryOpen } = useUi();

  return (
    <section id="footer">
      <div className="container cta">
        <p className="kicker">Get in touch</p>
        <h2 className="serif">Start with a conversation.</h2>
        <p style={{ color: "var(--muted)", maxWidth: 460, margin: "16px 0 28px" }}>
          Share a few details about your project and we'll come back with a clear plan.
        </p>
        <button className="pill" onClick={() => setInquiryOpen(true)}>
          Start a project
        </button>
        <div className="two-col" style={{ marginTop: 56 }}>
          <InquiryForm />
          <div>
            <p className="kicker">Call us</p>
            <a href={studio.phoneHref} className="serif" style={{ fontSize: 32, display: "block", marginTop: 8 }}>
              {studio.phone}
            </a>
            <p style={{ marginTop: 24, color: "var(--muted)" }}>{studio.address}</p>
            <p>
              <a href={`mailto:${studio.email}`}>{studio.email}</a>
            </p>
          </div>
        </div>
      </div>
      <footer className="container footer">
        <p>© Stanzza design Europe 2026</p>
        <nav>
          <Link to="/#composition">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/approach">Approach</Link>
          <Link to="/awards">Awards</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contacts</Link>
        </nav>
        <div className="footer-links">
          <a href={studio.socials.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={studio.socials.instagram} target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href={studio.socials.behance} target="_blank" rel="noreferrer">
            Behance
          </a>
          <a href={studio.socials.facebook} target="_blank" rel="noreferrer">
            Facebook
          </a>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
          <Link to="/cookies">Cookies Settings</Link>
        </div>
      </footer>
    </section>
  );
}
