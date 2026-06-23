import { C, FONT_DISPLAY, FONT_MONO } from "../constants";
import { illustrationDigital, illustrationManual } from "../data";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

const tabs = [
  ["manual", "Manual Arts"],
  ["digital", "Digital Illustration"],
];

export default function Illustration({ activeTab, setActiveTab }) {
  const projects = activeTab === "manual" ? illustrationManual : illustrationDigital;

  return (
    <section id="illustration" className="content-section compact-section">
      <Reveal>
        <div className="section-kicker" style={{ color: C.blue, fontFamily: FONT_MONO }}>
          03 / Division Two
        </div>
        <h2 className="section-title" style={{ fontFamily: FONT_DISPLAY }}>
          Arts & Illustration
        </h2>
      </Reveal>

      <Reveal>
        <div className="tab-row">
          {tabs.map(([value, label]) => (
            <button
              key={value}
              type="button"
              onClick={() => setActiveTab(value)}
              className="tab-button"
              style={{
                borderColor: activeTab === value ? C.blue : C.lineStrong,
                background: activeTab === value ? C.blue : "transparent",
                color: activeTab === value ? C.ink : C.paper,
                fontFamily: FONT_MONO,
              }}
            >
              {label}
            </button>
          ))}
        </div>
      </Reveal>

      <div key={activeTab} className="project-grid four-column fade-section">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
