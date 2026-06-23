import { C, FONT_DISPLAY } from "../constants";

const items = ["BRAND IDENTITY", "LOGO DESIGN", "ILLUSTRATION", "SIGNAGE DESIGN", "TYPOGRAPHY", "PRINT PRODUCTION"];

export default function MarqueeStrip() {
  return (
    <div className="marquee-strip" style={{ background: C.panel, borderColor: C.line }}>
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <div key={copy} className="marquee-copy">
            {items.map((item) => (
              <span key={`${copy}-${item}`} style={{ fontFamily: FONT_DISPLAY }}>
                {item} *
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
