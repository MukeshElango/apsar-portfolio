import { C, FONT_DISPLAY, FONT_MONO, RESUME_FILE } from "../constants";
import { skillsList, softwareList } from "../data";
import Icon from "./Icon";
import Magnetic from "./Magnetic";
import Reveal from "./Reveal";

const stats = [
  ["BFA", "Visual Comm. Design"],
  ["20+", "Posters & Banners"],
  ["2", "Months Internship"],
  ["3", "Creative Divisions"],
];

export default function About() {
  return (
    <section id="about" className="content-section">
      <Reveal>
        <div className="section-kicker" style={{ fontFamily: FONT_MONO }}>
          01 / About & Resume
        </div>
        <h2 className="section-title" style={{ fontFamily: FONT_DISPLAY }}>
          The Designer
        </h2>
      </Reveal>

      <div className="section-grid two-column">
        <Reveal>
          <p className="about-intro">
            Innovative graphic designer with a keen eye for aesthetics, visual storytelling, and brand development.
            Trained in Visual Communication Design with hands-on experience producing impactful digital and print work,
            combining creative instinct with technical craft to build visual content that strengthens brand presence and
            audience engagement.
          </p>

          <div className="stat-grid">
            {stats.map(([number, label]) => (
              <div key={label}>
                <div style={{ fontFamily: FONT_DISPLAY, fontSize: 32, color: C.red }}>{number}</div>
                <div className="tiny-label" style={{ fontFamily: FONT_MONO }}>
                  {label}
                </div>
              </div>
            ))}
          </div>

          <div className="panel">
            <h3 className="panel-title" style={{ color: C.blue, fontFamily: FONT_MONO }}>
              Experience
            </h3>
            <ExperienceItem
              date="2 Mo."
              title="Graphic Designer Intern - Lil'Things Advertising Pvt. Ltd."
              copy="Designed a hospital calendar, social media posters and promotional creatives across platforms, collaborating with the team using Photoshop and Illustrator."
            />
            <ExperienceItem
              date="2025"
              title="Brand Identity - Student Project"
              copy="Built a complete brand identity with logo, colour system, typography guide, print mock-ups, digital mock-ups, and a 20+ piece poster and banner series."
            />
          </div>
        </Reveal>

        <Reveal delay={150}>
          <InfoPanel title="Skills" items={skillsList} />
          <InfoPanel title="Software" items={softwareList} />
          <div className="panel">
            <h3 className="panel-title" style={{ color: C.blue, fontFamily: FONT_MONO }}>
              Education
            </h3>
            <p className="small-copy">
              <strong>Bachelor of Fine Arts - Visual Communication Design</strong>
              <br />
              Government College of Fine Arts, Periamet, Chennai / 2021-2025
            </p>
          </div>
          <Magnetic as="a" href={RESUME_FILE} download="Mohideen_Shahul_Hameed_Resume.pdf" className="button button-accent full-width">
            Download Full Resume <Icon name="download" size={14} />
          </Magnetic>
        </Reveal>
      </div>
    </section>
  );
}

function ExperienceItem({ date, title, copy }) {
  return (
    <div className="experience-item">
      <div className="tiny-label" style={{ fontFamily: FONT_MONO }}>
        {date}
      </div>
      <strong>{title}</strong>
      <p className="small-copy">{copy}</p>
    </div>
  );
}

function InfoPanel({ title, items }) {
  return (
    <div className="panel">
      <h3 className="panel-title" style={{ color: C.blue, fontFamily: FONT_MONO }}>
        {title}
      </h3>
      <div className="chip-list">
        {items.map((item) => (
          <span key={item} style={{ fontFamily: FONT_MONO }}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
