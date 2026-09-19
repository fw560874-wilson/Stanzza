import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";

export function InquiryForm({ onDone }: { onDone?: () => void }) {
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
    onDone?.();
  }

  if (sent) {
    return (
      <div className="success">
        <p className="kicker">Sent</p>
        <h3 className="serif">Your request has been sent.</h3>
        <p>We'll get back to you within 24 hours.</p>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={submit}>
      <input name="name" placeholder="Name*" required />
      <input name="email" type="email" placeholder="Email*" required />
      <textarea name="message" placeholder="Type your message..." />
      <label>
        <input type="checkbox" required defaultChecked />
        <span>
          By submitting this form, you agree to our <Link to="/privacy">Privacy Policy</Link>.
        </span>
      </label>
      <button className="pill" type="submit">
        Submit
      </button>
    </form>
  );
}
