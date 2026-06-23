import { useEffect, useRef, useState } from "react";
import "./App.css";
import { C, FONT_BODY } from "./constants";
import AmbientBackground from "./components/AmbientBackground";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import GraphicDesign from "./components/GraphicDesign";
import Hero from "./components/Hero";
import Illustration from "./components/Illustration";
import MarqueeStrip from "./components/MarqueeStrip";
import Navbar from "./components/Navbar";
import Signage from "./components/Signage";

export default function Portfolio() {
  const [navOpen, setNavOpen] = useState(false);
  const [illuTab, setIlluTab] = useState("manual");
  const [signTab, setSignTab] = useState("SDF");
  const [progress, setProgress] = useState(0);
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const onScroll = () => {
      const max = root.scrollHeight - root.clientHeight;
      setProgress(max > 0 ? Math.min(100, (root.scrollTop / max) * 100) : 0);
    };

    root.addEventListener("scroll", onScroll);
    onScroll();
    return () => root.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      ref={rootRef}
      className="portfolio-shell"
      style={{
        background: C.ink,
        color: C.paper,
        fontFamily: FONT_BODY,
      }}
    >
      <div
        className="scroll-progress"
        style={{
          width: `${progress}%`,
          background: `linear-gradient(90deg, ${C.red}, ${C.blue}, ${C.orange})`,
        }}
      />
      <AmbientBackground rootRef={rootRef} />
      <Navbar navOpen={navOpen} setNavOpen={setNavOpen} />
      <Hero />
      <MarqueeStrip />
      <About />
      <GraphicDesign />
      <Illustration activeTab={illuTab} setActiveTab={setIlluTab} />
      <Signage activeTab={signTab} setActiveTab={setSignTab} />
      <Contact />
      <Footer />
    </div>
  );
}
