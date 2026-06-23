import { C, FONT_DISPLAY, FONT_MONO, RESUME_FILE } from "../constants";
import { socialLinks } from "../data";
import heroImage from "../assets/apsar.jpeg";
import Icon from "./Icon";
import Magnetic from "./Magnetic";

const roles = ["Brand Identity", "Illustration", "Signage & Print"];
const stats = [
  ["3+", "Design disciplines"],
  ["25+", "Portfolio works"],
  ["Print", "Ready output"],
];

export default function Hero() {
  const showProjects = (event) => {
    event.preventDefault();
    document.querySelector("#graphic")?.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", "#graphic");
  };

  return (
    <section className="hero-section">
      <div className="section-grid hero-grid">
        <div className="hero-copy">
          <div className="eyebrow" style={{ color: C.blue, fontFamily: FONT_MONO }}>
            <Icon name="sparkle" size={14} /> Graphic Designer / Visual Communicator
          </div>
          <h1 className="hero-title" style={{ fontFamily: FONT_DISPLAY }}>
            Mohideen<br />
            <span style={{ color: C.red }}>Shahul</span> Hameed
          </h1>
          <p className="hero-summary">
            Creative Graphic Designer focused on building memorable brands through strategic design, striking visuals, and cohesive visual communication across print and digital platforms.
          </p>
          <div className="tag-list">
            {roles.map((role, index) => (
              <span
                key={role}
                className="role-tag"
                style={{
                  border: `1px solid ${[C.red, C.blue, C.orange][index]}`,
                  color: [C.red, C.blue, C.orange][index],
                  fontFamily: FONT_MONO,
                  animationDelay: `${index * 0.3}s`,
                }}
              >
                {role}
              </span>
            ))}
          </div>
          <div className="hero-stats" style={{ fontFamily: FONT_MONO }}>
            {stats.map(([value, label]) => (
              <span key={label}>
                <strong>{value}</strong>
                <small>{label}</small>
              </span>
            ))}
          </div>
          <div className="hero-actions">
            <Magnetic as="a" href="#graphic" onClick={showProjects} className="button button-primary">
              View Projects <Icon name="arrowRight" size={14} />
            </Magnetic>
            <Magnetic as="a" href={RESUME_FILE} download="Mohideen_Shahul_Hameed_Resume.pdf" className="button button-secondary">
              Download Resume <Icon name="download" size={14} />
            </Magnetic>
          </div>
          <div className="hero-socials" aria-label="Contact and social links">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="social-icon-link"
                aria-label={link.label}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              >
                <Icon name={link.icon} size={17} />
              </a>
            ))}
          </div>
        </div>

        <div className="portrait-wrap">
          <div className="portrait-frame">
            <div className="portrait-backdrop" />
            <div className="portrait-pulse" style={{ borderColor: C.red }} />
            <div className="portrait-corner portrait-corner-a" style={{ borderColor: C.blue }} />
            <div className="portrait-corner portrait-corner-b" style={{ borderColor: C.orange }} />
            <img src={heroImage} alt="Mohideen Shahul Hameed K" />
            <div className="portrait-caption" style={{ fontFamily: FONT_MONO }}>
              <span>Ranipet, Tamil Nadu</span>
              <strong>Available for freelance</strong>
            </div>
            <span className="open-work" style={{ background: C.red, color: C.ink, fontFamily: FONT_MONO }}>
              Open to work
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
