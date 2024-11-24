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
    <div className='flex items-center justify-center'>
      <section
        ref={heroRef}
        className={`flex flex-col items-start justify-center min-h-screen h-auto mx-auto transition-all duration-500 ease-in 
                  ${rendered ? 'opacity-100 blur-0' : 'opacity-0 blur-md'} max-[768px]:py-auto max-[768px]:mx-7 max-[768px]:mb-32
                  min-[768px]:mx-32 min-[1080px]:max-w-[980px]`}
      >
        <h3 className="text-xl text-secondary-orange">Hi, my name is</h3>
        <h1 className="text-[clamp(33px,7vw,80px)] mt-2 whitespace-nowrap">Xabier Portas.</h1>
        <h2 className="text-short-heading text-secondary-gray">I build things for the web.</h2>
        <p className="mt-5 min-[1080px]:w-1/2 pb-3">
          I am a passionate full-stack software engineer dedicated to building and designing exceptional digital experiences.
        </p>
        <p className="min-[1080px]:w-1/2">
          Currently, I am focused on contributing to the Government of Navarra by developing innovative digital solutions at{' '}
          <a className={`text-secondary-orange ${underlineEffect}`} href="https://itracasa.es/" target="_blank" rel="noreferrer">
            Tracasa Instrumental
          </a>.
        </p>
        <RetroBtn
          href={links.GitHub}
          target="_blank"
          rel="author"
          styles="mt-12 px-10 py-4 max-[350px]:px-5"
          child={<span className="text-orange-200">Check out my GitHub!</span>}
        />
      </section>
    </div>
  );
}