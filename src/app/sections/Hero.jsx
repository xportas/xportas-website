import { useEffect, useRef, useState } from 'react';
import RetroBtn from '../components/RetroBtn';
import { links } from '../utils/config';
import { underlineEffect } from '../utils/utils';

export default function Hero() {
  const heroRef = useRef(null);
  const [rendered, setRendered] = useState(false);


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !rendered) {
          setRendered(true);
          observer.disconnect(); // Disconnects the observer after the first intersection
        }
      },
      { threshold: 0.25 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.disconnect();
      }
    };
  }, [rendered]);

  return (
    <section
      ref={heroRef}
      className={`flex flex-col items-start justify-center min-h-screen h-screen transition-all duration-500 ease-in ${rendered ? 'opacity-100 blur-0' : 'opacity-0 blur-md'}`}
    >
      <h3 className="text-xl text-secondary-orange">Hi, my name is</h3>
      <h1 className="text-big-heading mt-2">Xabier Portas.</h1>
      <h2 className="text-short-heading text-secondary-gray">I build things for the web.</h2>
      <p className="mt-5 pr-80">
        I am a passionate full-stack software engineer dedicated to building and designing exceptional digital experiences.
      </p>
      <p className="pr-80">
        Currently, I am focused on contributing to the Government of Navarra by developing innovative digital solutions at{' '}
        <a className={`text-secondary-orange ${underlineEffect}`} href="https://itracasa.es/" target="_blank" rel="noreferrer">
          Tracasa Instrumental
        </a>.
      </p>
      <RetroBtn
        href={links.GitHub}
        target="_blank"
        rel="author"
        styles="mt-12 px-10 py-4"
        child={<span className="text-orange-200">Check out my GitHub!</span>}
      />
    </section>
  );
}