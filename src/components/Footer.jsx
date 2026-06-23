import { C, FONT_MONO } from "../constants";

export default function Footer() {
  return (
    <footer className="site-footer" style={{ borderTop: `1px solid ${C.line}`, fontFamily: FONT_MONO }}>
      <span>Copyright 2026 Mohideen Shahul Hameed K</span>
      <span>Open to full-time & freelance opportunities</span>
    </footer>
  );
}
