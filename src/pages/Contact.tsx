import { studio } from "../data/content";
import { InquiryForm } from "../components/InquiryForm";

export function Contact() {
  return (
    <main>
      <section className="container page-hero">
        <p className="kicker">Contact</p>
        <h1 className="serif">Start with a conversation.</h1>
        <div className="two-col" style={{ marginTop: 40, paddingBottom: 80 }}>
          <InquiryForm />
          <div>
            <p className="kicker">Studio</p>
            <p className="serif" style={{ fontSize: 36, margin: "12px 0 20px" }}>
              Barcelona
            </p>
            <p>
              <a href={studio.maps} target="_blank" rel="noreferrer">
                {studio.address}
              </a>
            </p>
            <p style={{ marginTop: 12 }}>
              <a href={studio.phoneHref}>{studio.phone}</a>
            </p>
            <p style={{ marginTop: 12 }}>
              <a href={`mailto:${studio.email}`}>{studio.email}</a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
