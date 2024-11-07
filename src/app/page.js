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
      {!currentLanguage ?
        <RetroScreen setCurrentLanguage={setCurrentLanguage} />
        :
        <>
          <Nav screenWidth={screenWidth} hiddenRetroComputer={hiddenRetroComputer} />
          <RetroComputer setHiddenRetroComputer={setHiddenRetroComputer} scrollFactor={scrollFactor} />
          <div className="h-screen" />
          <Hero />
          <About />
          <Jobs screenWidth={screenWidth} />
          <Projects />
          <Contact />
          <Footer />
        </>
      }
    </>
  );
}