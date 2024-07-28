'use client'
import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import RetroComputer from "./components/RetroComputer";
import RetroScreen from "./components/sections/RetroScreen";
import Contact from "./components/sections/Contact";
import Footer from "./components/Footer";
import Hero from "./components/sections/Hero";



export default function Home() {

  const [currentLanguage, setCurrentLanguage] = useState(null);

  return (
    <>
      {/* {!currentLanguage ?
        <RetroScreen setCurrentLanguage={setCurrentLanguage} />
        :
        <>
          <Nav />
          <RetroComputer /> */}
          <Nav />
          <Hero /> 
          <Contact />
          <Footer />
        {/* </> */}
      {/* } */}
    </>
  );
}