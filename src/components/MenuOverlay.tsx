import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { nav, studio } from "../data/content";
import { useUi } from "../context/UiContext";
import { CallIcon } from "./CallIcon";

export function MenuOverlay() {
  const { menuOpen, setMenuOpen, setInquiryOpen } = useUi();
  const [active, setActive] = useState(0);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <div className={menuOpen ? "menu open" : "menu"} role="dialog" aria-modal="true" aria-hidden={!menuOpen}>
      <button className="menu-scrim" onClick={() => setMenuOpen(false)} aria-label="Close menu backdrop" />
      <aside className="menu-drawer">
        <div className="menu-preview">
          <img src={nav[active].image} alt="" />
          <p>{nav[active].label}</p>
        </div>
        <div className="menu-panel">
          <div className="menu-top">
            <p className="kicker">Index</p>
            <button className="icon-btn menu-close" onClick={() => setMenuOpen(false)} aria-label="Close menu">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M2 2l12 12M14 2 2 14" stroke="currentColor" strokeWidth="1.6" />
              </svg>
            </button>
          </div>
          <nav>
            {nav.map((item, index) => (
              <Link
                key={item.to}
                to={item.to}
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                onClick={() => setMenuOpen(false)}
              >
                <img src={item.image} alt="" />
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
          <div className="menu-meta">
            <a href={studio.phoneHref} className="call-btn dark">
              <CallIcon />
              <span>{studio.phone}</span>
            </a>
          </div>
        </div>
      </aside>
    </div>
  );
}
