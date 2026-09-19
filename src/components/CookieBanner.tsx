import { useState } from "react";
import { Link } from "react-router-dom";

export function CookieBanner() {
  const [accepted, setAccepted] = useState(() => localStorage.getItem("stanzza-cookies") === "1");

  if (accepted) return null;

  return (
    <div className="cookie">
      <p>
        By continuing to use this site, you agree to our <Link to="/privacy">Privacy Policy</Link> and use of cookies.
      </p>
      <button
        className="pill"
        onClick={() => {
          localStorage.setItem("stanzza-cookies", "1");
          setAccepted(true);
        }}
      >
        Accept
      </button>
    </div>
  );
}
