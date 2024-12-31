'use client';
import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import RetroComputer from "./components/RetroComputer";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Jobs from "./sections/Jobs";
import Projects from "./sections/Projects";
import RetroScreen from "./sections/RetroScreen";



export default function Home() {

  const [currentLanguage, setCurrentLanguage] = useState(null);
  const [screenWidth, setScreenWidth] = useState(0);
  const [hiddenRetroComputer, setHiddenRetroComputer] = useState(false);
  const [scrollFactor, setScrollFactor] = useState(0);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [progress, setProgress] = useState(0);

  // to know whether it is a touch device or not
  useEffect(() => {
    setIsTouchDevice(('ontouchstart' in window) || (navigator.maxTouchPoints > 0));
  }, []);

  // effect to handle changes in screen width property
  useEffect(() => {
    setScreenWidth(window.innerWidth);
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    const updateScrollFactor = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const factor = Math.min(scrollY / maxScroll, 1);
      setScrollFactor(factor);
    };

    updateScrollFactor();
    window.addEventListener("scroll", updateScrollFactor, { passive: true });

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener("scroll", updateScrollFactor);
    };
  }, []);

  return (
    <>
      {progress < 100 && (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "#000", zIndex: 9999 }}>
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", textAlign: "center", color: "#fff" }}>
            <p>Loading... {progress}%</p>
            <div style={{ background: "#fff", width: "300px", height: "10px", borderRadius: "5px", overflow: "hidden" }}>
              <div style={{ background: "#0f0", width: `${progress}%`, height: "100%", transition: "width 0.3s ease" }}></div>
            </div>
          </div>
        </div>
      )}

      <div style={{ display: currentLanguage ? "none" : "block" }}>
        <RetroScreen setCurrentLanguage={setCurrentLanguage} screenWidth={screenWidth} isTouchDevice={isTouchDevice} />
      </div>

      <div style={{ display: currentLanguage ? "block" : "none" }}>
        <Nav screenWidth={screenWidth} hiddenRetroComputer={hiddenRetroComputer} />
        {/* <Nav screenWidth={screenWidth} hiddenRetroComputer={true} /> */}

        <RetroComputer setHiddenRetroComputer={setHiddenRetroComputer} scrollFactor={scrollFactor} setProgress={setProgress} />

        <Hero />
        <About />
        <Jobs screenWidth={screenWidth} />
        <Projects screenWidth={screenWidth} />
        <Contact />
        <Footer />
      </div>
    </>
  );
}