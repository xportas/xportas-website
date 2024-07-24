'use client'
import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import RetroComputer from "./components/RetroComputer";
import RetroScreen from "./components/sections/RetroScreen";
import Contact from "./components/sections/Contact";



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
          <Nav></Nav>
          <p>
            The universe, an expansive and awe-inspiring entity, stretches across unimaginable distances, holding within it galaxies, stars, planets, and vast regions of empty space. From the smallest subatomic particles to the largest cosmic structures, it encapsulates the entirety of existence as we know it.
            At its core, the universe began with the Big Bang, an event approximately 13.8 billion years ago, where space and time itself burst into existence from a singular point of infinite density and temperature. Since then, it has been expanding continuously, shaping the cosmic landscape we observe today.
            Galaxies, vast conglomerations of stars, dust, and dark matter, populate the cosmos in countless numbers. From spiral galaxies like our Milky Way to elliptical and irregular galaxies, each harbors billions to trillions of stars, each with their own unique characteristics and mysteries.
            Stars, the celestial engines of the universe, form from the gravitational collapse of dense clouds of gas and dust. They shine brilliantly, fueled by nuclear fusion processes that convert hydrogen into helium and release immense amounts of energy. Some stars live relatively short lives, burning brightly before ending in spectacular supernova explosions, while others, like our Sun, burn steadily for billions of years.
            Planets orbit these stars, ranging from rocky worlds like Earth to gas giants such as Jupiter and Neptune. Moons, asteroids, comets, and other celestial bodies populate their systems, each playing a role in the intricate dance of gravitational interactions that define their orbits and movements.
            Space itself is not empty but filled with a variety of phenomena. Nebulae, vast clouds of gas and dust, serve as stellar nurseries where new stars are born. Black holes, regions of spacetime with gravitational forces so strong that nothing, not even light, can escape their grasp, lurk at the centers of galaxies and throughout the universe, shaping their surroundings in profound ways.
            Dark matter and dark energy, though invisible and mysterious, make up the majority of the universe's mass-energy content. Dark matter exerts gravitational influence, binding galaxies together and providing the scaffolding for cosmic structure formation. Dark energy, on the other hand, accelerates the universe's expansion, pushing galaxies apart at ever-increasing speeds.
            Cosmology, the study of the origin, evolution, and eventual fate of the universe, continues to unravel its secrets. Observatories both on Earth and in space capture light from distant corners of the cosmos, allowing astronomers to peer back in time and explore the universe's history.
            In this vast and ever-changing tapestry, humanity occupies a tiny corner. Yet, our understanding of the universe grows with each discovery, revealing the interconnectedness of all cosmic phenomena and our place within this grand, cosmic story.
            From the smallest subatomic particles to the largest superclusters of galaxies, the universe remains a testament to the beauty of scientific inquiry and the boundless curiosity of the human spirit. As we gaze into the night sky, we are reminded of our shared journey through the cosmos and the limitless possibilities that await us in the vastness of space and time.
          </p>
          <Contact />
        {/* </> */}
      {/* } */}
    </>
  );
}