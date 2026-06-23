import { C, FONT_DISPLAY, FONT_MONO } from "../constants";
import { graphicProjects } from "../data";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

export default function GraphicDesign() {
  return (
    <section id="graphic" className="content-section compact-section">
      <Reveal>
        <div className="section-kicker" style={{ color: C.red, fontFamily: FONT_MONO }}>
          02 / Division One
        </div>
        <h2 className="section-title" style={{ fontFamily: FONT_DISPLAY }}>
          Graphic Design
        </h2>
      </Reveal>

      <div className="project-grid three-column">
        {graphicProjects.map((project, index) => (
          <Reveal key={project.title} delay={index * 80}>
            <ProjectCard {...project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
