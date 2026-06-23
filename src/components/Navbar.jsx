import { C, FONT_DISPLAY, FONT_MONO } from "../constants";
import { socialLinks } from "../data";
import Icon from "./Icon";

const links = [
  ["#about", "About"],
  ["#graphic", "Graphic"],
  ["#illustration", "Illustration"],
  ["#signage", "Signage"],
  ["#contact", "Contact"],
];

export default function Navbar({ navOpen, setNavOpen }) {
  const instagramLink = socialLinks.find((link) => link.label === "Instagram")?.href;

  const navLink = (href, label) => (
    <a
      key={href}
      href={href}
      className="nav-link"
      onClick={() => setNavOpen(false)}
      style={{
        fontFamily: FONT_MONO,
        fontSize: 12,
        letterSpacing: 1,
      }}
    >
      {label}
    </a>
  );

  return (
    <>
      <nav className="site-nav" style={{ borderBottom: `1px solid ${C.line}` }}>
        <a
          className="brand-mark"
          href={instagramLink}
          target="_blank"
          rel="noreferrer"
          aria-label="Open Instagram"
          style={{ fontFamily: FONT_DISPLAY }}
        >
          MSH<span style={{ color: C.red }}>.</span>
        </a>
        <div className="desktop-nav">{links.map(([href, label]) => navLink(href, label))}</div>
        <button
          className="mobile-menu-button"
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setNavOpen(!navOpen)}
          style={{ color: C.paper }}
        >
          <Icon name={navOpen ? "x" : "menu"} size={20} />
        </button>
      </nav>

      {navOpen && (
        <div className="mobile-nav" style={{ background: C.panel, borderBottom: `1px solid ${C.line}` }}>
          {links.map(([href, label]) => navLink(href, label))}
        </div>
      )}
    </>
  );
}
