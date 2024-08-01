'use client'
import { useState } from "react";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import RetroComputer from "./components/RetroComputer";
import Contact from "./components/sections/Contact";
import Hero from "./components/sections/Hero";
import RetroScreen from "./components/sections/RetroScreen";



export default function Home() {

  const [currentLanguage, setCurrentLanguage] = useState(null);

  return (
    <>
      {/* {!currentLanguage ?
        <RetroScreen setCurrentLanguage={setCurrentLanguage} />
        :
        <> */}
          <Nav />
          {/* <RetroComputer /> */}
          <Hero /> 
          <Contact />
          <Footer />
        </>
    //   }
    // </>
  );
}