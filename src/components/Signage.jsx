import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { C, FONT_DISPLAY, FONT_MONO } from "../constants";
import { signageArt, signageData } from "../data";
import Reveal from "./Reveal";

/* ─── Lightbox (portal — escapes all parent transforms) ─── */
function Lightbox({ src, title, onClose }) {
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, []);

  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return createPortal(
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(0,0,0,0.92)",
        zIndex: 99999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        boxSizing: "border-box",
        padding: "64px 32px 48px",
      }}
    >
      {/* Close button */}
      <button
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        style={{
          position: "fixed",
          top: 18,
          right: 18,
          width: 44,
          height: 44,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.15)",
          border: "1.5px solid rgba(255,255,255,0.35)",
          color: "#ffffff",
          fontSize: 20,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 100000,
          lineHeight: 1,
        }}
        aria-label="Close lightbox"
      >
        ✕
      </button>

      {/* Image */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          maxWidth: 960,
          flex: 1,
          minHeight: 0,
        }}
      >
        <img
          src={src}
          alt={title}
          style={{
            display: "block",
            maxWidth: "100%",
            maxHeight: "calc(100vh - 160px)",
            width: "auto",
            height: "auto",
            objectFit: "contain",
            borderRadius: 10,
          }}
        />
      </div>

      {/* Title */}
      {title && (
        <p
          onClick={(e) => e.stopPropagation()}
          style={{
            margin: "16px 0 0",
            color: "rgba(255,255,255,0.55)",
            fontFamily: FONT_MONO,
            fontSize: 11,
            letterSpacing: 2.5,
            textTransform: "uppercase",
            textAlign: "center",
            flexShrink: 0,
          }}
        >
          {title}
        </p>
      )}
    </div>,
    document.body
  );
}

/* ─── Main Signage component ────────────────────────────── */
export default function Signage({ activeTab, setActiveTab }) {
  const [lightbox, setLightbox] = useState(null); // { src, title }

  return (
    <section id="signage" className="content-section compact-section bottom-section">
      <Reveal>
        <div className="section-kicker" style={{ color: C.orange, fontFamily: FONT_MONO }}>
          04 / Division Three
        </div>
        <h2 className="section-title" style={{ fontFamily: FONT_DISPLAY }}>
          Signage
        </h2>
      </Reveal>

      <Reveal>
        <div className="tab-row">
          {Object.keys(signageData).map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className="tab-button"
              style={{
                borderColor: activeTab === tab ? C.orange : C.lineStrong,
                background: activeTab === tab ? C.orange : "transparent",
                color: activeTab === tab ? C.ink : C.paper,
                fontFamily: FONT_MONO,
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </Reveal>

      <div key={activeTab} className="project-grid three-column fade-section">
        {signageData[activeTab].map((project) => (
          <div
            key={project.title}
            className="project-card"
            style={{
              background: "#170d06",
              cursor: project.image ? "zoom-in" : "default",
            }}
            onClick={() => {
              if (project.image) setLightbox({ src: project.image, title: project.title });
            }}
          >
            {/* Image or SVG art */}
            <div className="card-media">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              ) : (
                <svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
                  {signageArt(project.art)}
                </svg>
              )}
              <span className="media-reveal">View signage</span>
            </div>

            {/* Card footer */}
            <div
              className="card-footer"
              style={{ borderTop: `2px solid ${C.orange}` }}
            >
              <div
                className="card-cat"
                style={{ color: C.orange, fontFamily: FONT_MONO }}
              >
                {project.cat}
              </div>
              <div
                className="card-title"
                style={{ fontFamily: FONT_DISPLAY }}
              >
                {project.title}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox portal */}
      {lightbox && (
        <Lightbox
          src={lightbox.src}
          title={lightbox.title}
          onClose={() => setLightbox(null)}
        />
      )}
    </section>
  );
}