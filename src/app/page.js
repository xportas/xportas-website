'use client'
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

  // effect to handle changes in screen width property
  useEffect(() => {
    setScreenWidth(window.innerWidth);
    window.addEventListener('resize', () => {
      setScreenWidth(window.innerWidth);
    });
  }, []);

  return (
    <>
      {!currentLanguage ?
        <RetroScreen setCurrentLanguage={setCurrentLanguage} />
        :
        <>
          <Nav screenWidth={screenWidth} hiddenRetroComputer={hiddenRetroComputer} />
          <RetroComputer hiddenRetCompState={{ hiddenRetroComputer, setHiddenRetroComputer }} />
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