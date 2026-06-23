import { useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { C, FONT_DISPLAY, FONT_MONO } from "../constants";

function Lightbox({ src, title, onClose }) {
  // Lock body scroll when open
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, []);

  // Close on Escape key
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
      {/* Close button — always visible top-right */}
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
          fontWeight: 400,
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

      {/* Image wrapper — perfectly centered, never overflow */}
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

/* ─── Tilt card wrapper ─────────────────────────────────── */
function TiltCard({ accent, children }) {
  const ref = useRef(null);

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const b = el.getBoundingClientRect();
    const px = (e.clientX - b.left) / b.width - 0.5;
    const py = (e.clientY - b.top) / b.height - 0.5;
    el.style.transform = `perspective(800px) rotateY(${px * 9}deg) rotateX(${-py * 9}deg) translateY(-6px) scale(1.015)`;
  };

  const reset = () => {
    if (ref.current)
      ref.current.style.transform =
        "perspective(800px) rotateY(0deg) rotateX(0deg) translateY(0) scale(1)";
  };

  return (
    <article
      ref={ref}
      className="project-card"
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{
        background: C.panel2,
        border: `1px solid ${C.line}`,
        borderBottom: `3px solid ${accent}`,
      }}
    >
      {children}
    </article>
  );
}

/* ─── Media area ────────────────────────────────────────── */
function ProjectMedia({ bg, art, media, mediaType, title, onImageClick }) {
  if (mediaType === "pdf") {
    return (
      <a
        className="project-media project-pdf"
        href={media}
        target="_blank"
        rel="noreferrer"
        style={{ background: bg }}
      >
        <iframe title={`${title} preview`} src={`${media}#toolbar=0&navpanes=0`} />
        <span>Open PDF</span>
      </a>
    );
  }

  if (media) {
    return (
      <div
        className="project-media"
        style={{ background: bg, cursor: "zoom-in" }}
        onClick={() => onImageClick(media)}
      >
        <img src={media} alt={title} loading="lazy" />
        <span className="media-reveal">View work</span>
      </div>
    );
  }

  return (
    <div className="project-art" style={{ background: bg }}>
      <svg viewBox="0 0 400 220">
        <rect width="400" height="220" fill={bg} />
        {art}
      </svg>
    </div>
  );
}

/* ─── Main export ───────────────────────────────────────── */
export default function ProjectCard({ accent, bg, cat, title, art, media, mediaType }) {
  const [lightbox, setLightbox] = useState(null);

  return (
    <>
      <TiltCard accent={accent}>
        <ProjectMedia
          bg={bg}
          art={art}
          media={media}
          mediaType={mediaType}
          title={title}
          onImageClick={setLightbox}
        />
        <div className="project-copy">
          <div
            style={{
              fontFamily: FONT_MONO,
              fontSize: 10,
              letterSpacing: 1.5,
              textTransform: "uppercase",
              opacity: 0.6,
            }}
          >
            {cat}
          </div>
          <h3
            style={{
              fontFamily: FONT_DISPLAY,
              fontSize: 18,
              textTransform: "uppercase",
              margin: "6px 0 0",
            }}
          >
            {title}
          </h3>
        </div>
      </TiltCard>

      {lightbox && (
        <Lightbox src={lightbox} title={title} onClose={() => setLightbox(null)} />
      )}
    </>
  );
}