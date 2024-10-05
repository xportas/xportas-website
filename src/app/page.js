'use client'
import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import RetroComputer from "./components/RetroComputer";
import Contact from "./components/sections/Contact";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import RetroScreen from "./components/sections/RetroScreen";
import Jobs from "./components/sections/Jobs";



export default function Home() {

  const [currentLanguage, setCurrentLanguage] = useState(null);
  const [screenWidth, setScreenWidth] = useState(0);

  // effect to handle changes in screen width property
  useEffect(() => {
    setScreenWidth(window.innerWidth);
    window.addEventListener('resize', () => {
      setScreenWidth(window.innerWidth);
    });
  }, []);

  return (
    <>
      {/* {!currentLanguage ?
        <RetroScreen setCurrentLanguage={setCurrentLanguage} />
        :
        <> */}
      <Nav screenWidth={screenWidth} />
      {/* <RetroComputer /> */}
      <Hero />
      <About />
      <Jobs screenWidth={screenWidth} />
      <Contact />
      <Footer />
    </>
    //   }
    // </>
  );
}