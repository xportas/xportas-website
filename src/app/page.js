'use client';
import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import ModernDeviceWarning from "./components/ModernDeviceWarning";
import Nav from "./components/Nav";
import RetroComputer from "./components/RetroComputer";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Jobs from "./sections/Jobs";
import Projects from "./sections/Projects";
import RetroScreen from "./sections/RetroScreen";
import i18n from './utils/i18n';
import { waitForMs } from "./utils/utils";



export default function Home() {

  const [currentLanguage, setCurrentLanguage] = useState(null);
  const [screenWidth, setScreenWidth] = useState(0);
  const [hiddenRetroComputer, setHiddenRetroComputer] = useState(false);
  const [scrollFactor, setScrollFactor] = useState(0);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [progress, setProgress] = useState(0);
  const [acceptedMDWarning, setAcceptedMDWarning] = useState(false);
  const [closeMDWarning, setCloseMDWarning] = useState(false);


  useEffect(() => {
    // to know whether it is a touch device or not
    setIsTouchDevice(('ontouchstart' in window) || (navigator.maxTouchPoints > 0));

    // effect to handle changes in screen width property
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

  const handleAcceptMDWarning = async () => {
    setCloseMDWarning(true);
    await waitForMs(700);
    setAcceptedMDWarning(true);
  };

  return (
    <>
      {progress < 100 &&
        <Loader progress={progress} />
      }

      {(progress >= 100 && isTouchDevice && !acceptedMDWarning) &&
        <ModernDeviceWarning closeMDWarning={closeMDWarning} handleAcceptMDWarning={handleAcceptMDWarning} />
      }

      <div style={{ display: currentLanguage ? "none" : "block" }}>
        <RetroScreen i18n={i18n} currentLanguage={currentLanguage} setCurrentLanguage={setCurrentLanguage} screenWidth={screenWidth} isTouchDevice={isTouchDevice} />
      </div>

      <div style={{ display: currentLanguage ? "block" : "none" }}>
        <Nav screenWidth={screenWidth} hiddenRetroComputer={hiddenRetroComputer} />

        <div className={'bg-white fixed inset-0 z-[999] animate-shuttingOffAnimation'} /> {/* Shutting OFF animation div */}
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