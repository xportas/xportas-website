import { useInView } from 'react-intersection-observer';

export default function Projects() {
  const { ref: projectsRef, inView } = useInView({
    threshold: 0.1,
  });

  // a --> relative z-10

  return (
    <section ref={projectsRef}
      className={`numbered mb-12 md:mb-24 transition-all duration-500 ease-in ${inView ? 'opacity-100 blur-0' : 'opacity-0 blur-md'}`}
      id='work'>
      <h3 /*ref={revealTitle}*/>
        Some Things I’ve Built
      </h3>

      <ul className="p-0 m-0" style={{ listStyle: 'none' }}>

      </ul>

    </section>
  );
}