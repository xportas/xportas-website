import { useEffect, useRef, useState } from 'react';

export default function Projects() {
  const projectsRef = useRef(null);
  const [rendered, setRendered] = useState(false);


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !rendered) {
          setRendered(true);
          observer.disconnect(); // Disconnects the observer after the first intersection
        }
      },
      { threshold: 0.1 }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.disconnect();
      }
    };
  }, [rendered]);

  // a --> relative z-10

  return (
    <section ref={projectsRef}
      className={`numbered mb-12 md:mb-24 transition-all duration-500 ease-in ${rendered ? 'opacity-100 blur-0' : 'opacity-0 blur-md'}`}
      id='work'>
      <h3 /*ref={revealTitle}*/>
        Some Things I’ve Built
      </h3>

      <ul className="p-0 m-0" style={{ listStyle: 'none' }}>

      </ul>

    </section>
  );
}