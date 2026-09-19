type LegalKind = "privacy" | "terms" | "cookies";

const copy: Record<LegalKind, { title: string; body: string[] }> = {
  privacy: {
    title: "Privacy Policy",
    body: [
      "Stanzza Design Europe collects only the information you send through the project inquiry form: name, email and message.",
      "We use this information to reply to your request and to prepare a first conversation about your project. We do not sell personal data.",
      "You can ask us to update or delete your details at any time by writing to kirill@stanzza.design.",
      "This site may use essential cookies to remember cookie consent. Analytics cookies are used only after you accept.",
    ],
  },
  terms: {
    title: "Terms of Service",
    body: [
      "The content on this website — texts, photographs and project documentation — belongs to Stanzza Design Europe unless otherwise stated.",
      "Project information is presented for reference. Fees, timelines and scope are confirmed only after a written agreement.",
      "Construction works are carried out by licensed general contractors. Warranties for works are defined in the contractor contract.",
    ],
  },
  cookies: {
    title: "Cookies Settings",
    body: [
      "Essential cookies remember that you have accepted this notice.",
      "If you previously accepted cookies, you can clear site data in your browser to reset the choice.",
      "We do not use advertising cookies.",
    ],
  },
};

export function Legal({ kind }: { kind: LegalKind }) {
  const page = copy[kind];
  return (
    <main>
      <section className="container page-hero prose" style={{ paddingBottom: 80 }}>
        <h1 className="serif">{page.title}</h1>
        {page.body.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </section>
    </main>
  );
}
