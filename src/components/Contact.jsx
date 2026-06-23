import { FONT_DISPLAY, FONT_MONO } from "../constants";
import { socialLinks } from "../data";
import Icon from "./Icon";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <Reveal>
        <div className="section-kicker" style={{ fontFamily: FONT_MONO }}>
          05 / Let's Talk
        </div>
        <h2 className="contact-title" style={{ fontFamily: FONT_DISPLAY }}>
          Start a<br />Project
        </h2>
        <p className="contact-copy">
          Available for branding, social media creatives, illustration, signage, and production-ready print design.
        </p>
        <div className="contact-socials" style={{ fontFamily: FONT_MONO }}>
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="contact-social-card"
              aria-label={link.label}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
            >
              <span className="contact-social-icon">
                <Icon name={link.icon} size={18} />
              </span>
              <span>
                <strong>{link.label}</strong>
                <small>{link.text}</small>
              </span>
              <Icon name="arrowUpRight" size={12} />
            </a>
          ))}
          <span className="contact-location">
            <span className="contact-social-icon">
              <Icon name="mapPin" size={18} />
            </span>
            <span>
              <strong>Location</strong>
              <small>Ranipet, Tamil Nadu</small>
            </span>
          </span>
        </div>
      </Reveal>
    </section>
  );
}
