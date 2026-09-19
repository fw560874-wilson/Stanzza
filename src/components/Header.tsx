import { Link, NavLink } from "react-router-dom";
import { nav } from "../data/content";
import { useUi } from "../context/UiContext";
import { Logo } from "./Logo";
import { CallIcon } from "./CallIcon";

export function Header() {
  const { setMenuOpen, setInquiryOpen, setSearchOpen } = useUi();

  return (
    <header className="header">
      <div className="nav-bar">
        <Link to="/" className="nav-brand" aria-label="Stanzza home">
          <Logo />
          <span>Stanzza</span>
        </Link>

        <nav className="nav-links" aria-label="Primary">
          {nav.map((item) => (
            <NavLink key={item.to} to={item.to} className={({ isActive }) => (isActive ? "active" : undefined)}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav-actions">
          <button className="search-btn" onClick={() => setSearchOpen(true)} aria-label="Search the site">
            <svg width="16" height="16" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <circle cx="8" cy="8" r="5.4" stroke="currentColor" strokeWidth="1.6" />
              <path d="M12.2 12.2 16 16" stroke="currentColor" strokeWidth="1.6" />
            </svg>
            <span>Search</span>
          </button>
          <button className="call-btn" onClick={() => setInquiryOpen(true)}>
            <CallIcon />
            <span>Request a call</span>
          </button>
          <button className="menu-pill" onClick={() => setMenuOpen(true)} aria-label="Open menu">
            <span>Menu</span>
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
              <path d="M0 1h14M0 5h14M4 9h10" stroke="currentColor" strokeWidth="1.4" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
