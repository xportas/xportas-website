import { useEffect, useRef, useState } from 'react';
import { dashedLine } from '../utils/utils';
import { transition } from '../utils/utils';
import { projects } from '../utils/config';

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


  return (
    <section ref={projectsRef}
      className={`numbered mb-12 md:mb-24 transition-all duration-500 ease-in ${rendered ? 'opacity-100 blur-0' : 'opacity-0 blur-md'}`}
      id='work'>

      <h3 /*ref={revealTitle}*/
        style={{ '--dynamic-font-size': '-regular-heading' }}
        className={`flex items-center mb-7 font-header text-short-heading ${dashedLine}`}
      >
        Some Things I’ve Built
      </h3>

      <ul className="p-0 m-0" style={{ listStyle: 'none' }}> {/* TODO: todos los <a> descendientes de este componente hay que meterles "relative z-10" */}

        {projects && Object.entries(projects).map(([key, project], i) => {

          const { title, cover, github, tech, description } = project;

          return (
            <li key={i}
              className='relative grid gap-2.5 grid-cols-[repeat(12,1fr)] items-center max-[768px]:shadow-[0_10px_30px_-15px_var(rgba(2,12,27,0.7))] transition-all duration-300 ease-[cubic-bezier(0.645,0.045,0.355,1)]
                          max-[768px]:hover:shadow-[0_20px_30px_-15px_var(rgba(2,12,27,0.7))] max-[768px]:focus:shadow-[0_20px_30px_-15px_var(rgba(2,12,27,0.7))]
                          mb-24 max-[768px]:mb-16 max-[480px]:mb-8'
            >
              <div className='relative col-[1_/_7] row-span-full
                              max-[1080px]:col-[1_/_9] 
                              max-[768px]:flex max-[768px]:flex-col max-[768px]:justify-center max-[768px]:h-full max-[768px]:col-span-full max-[768px]:z-[5] max-[768px]:pt-10 max-[768px]:pb-[30px] max-[768px]:px-10
                              max-[480px]:pt-[30px] max-[480px]:pb-5 max-[480px]:px-[25px]'>
                <div>
                  <h4 className="text-red-600 text-[clamp(24px,5vw,28px)] md:mt-0 md:mb-5 md:mx-0 max-[768px]:text-blue-50">
                    <a href="relative z-10 static max-[768px]:before:content-[''] max-[768px]:before:block max-[768px]:before:absolute max-[768px]:before:z-0 max-[768px]:before:w-full max-[768px]:before:h-full max-[768px]:before:left-0 max-[768px]:before:top-0" />
                  </h4>

                  <div className="relative z-20 p-6 rounded bg-gray-900 text-red-600 text-lg
                                  max-[768px]:bg-transparent max-[768px]:shadow-none max-[768px]:px-0 max-[768px]:py-5 max-[768px]:hover:shadow-none
                                  shadow-[0_10px_30px_-15px_rgba(2,12,27,0.7)] transition-all duration-[0.25s] ease-[cubic-bezier(0.645,0.045,0.355,1)]
                                  hover:shadow-[0_20px_30px_-15px_rgba(2,12,27,0.7)] focus-visible:shadow-[0_20px_30px_-15px_rgba(2,12,27,0.7)]">
                    <p>{description}</p>
                  </div>
                  {/* TODO: en los <a> hijos de este componente hay que meter el estilo inlineLink de utils, no olvidar + relative z-10 */}

                  {tech.length && (
                    <ul className="flex flex-wrap relative z-20 mt-[25px] mb-2.5 mx-0 p-0 max-[768px]:mx-0 max-[768px]:my-2.5"
                      style={{ listStyle: 'none' }}>
                      {tech.map((tech, j) => (
                        <li key={j}
                          className="text-[#a8b2d1] text-[13px] whitespace-nowrap ml-0 mr-5 mt-0 mb-[5px] max-[768px]:text-[#ccd6f6)] max-[768px]:ml-0 max-[768px]:mr-2.5 max-[768px]:mt-0 max-[768px]:mb-[5px]">
                          {tech}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              <div className="shadow-[0_10px_30px_-15px_rgba(2,12,27,0.7)] transition-[var(--transition)] col-[6_/_-1] row-span-full relative z-[1]
                              hover:shadow-[0_20px_30px_-15px_rgba(2,12,27,0.7)] focus-visible:shadow-[0_20px_30px_-15px_rgba(2,12,27,0.7)]
                              max-[768px]:col-span-full max-[768px]:h-full max-[768px]:opacity-25">
                <a href={github ? github : '#'}
                  className={`relative z-10 w-full h-full bg-green-400 rounded align-middle before:content-[''] before:absolute before:w-full before:h-full before:z-[3]    before:transition-[${transition}] before:bg-[#0a192f] before:mix-blend-screen before:inset-0`}>
                  <img src={cover} alt={title}
                    className="rounded mix-blend-multiply grayscale contrast-100 brightness-[90%]
                              max-[768px]:object-cover max-[768px]:w-auto max-[768px]:h-full max-[768px]:grayscale max-[768px]:contrast-100 max-[768px]:brightness-[50%]"
                  />
                </a>
              </div>
            </li>
          );
        })
        }
      </ul>
    </section >
  );
}