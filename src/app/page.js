'use client';
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from './utils/i18n';
import Loader from "./components/Loader";
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
  const { t, i18n } = useTranslation(['strings']);


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

  return (
    <>
      {progress < 100 && (
        <Loader progress={progress} />
      )}

      <div style={{ display: currentLanguage ? "none" : "block" }}>
        <RetroScreen i18n={i18n} setCurrentLanguage={setCurrentLanguage} screenWidth={screenWidth} isTouchDevice={isTouchDevice} />
      </div>

      <div style={{ display: currentLanguage ? "block" : "none" }}>
        <Nav screenWidth={screenWidth} hiddenRetroComputer={hiddenRetroComputer} />
        {/* <Nav screenWidth={screenWidth} hiddenRetroComputer={true} /> */}
        <p>{t('welcome')}</p>{console.log(currentLanguage)}

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