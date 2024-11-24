import { useEffect, useRef, useState } from 'react';
import Plumber from '../components/Plumber';
import { projects } from '../utils/config';
import { dashedLine, underlineEffect } from '../utils/utils';


export default function Projects() {
  const projectsRef = useRef(null);
  const [rendered, setRendered] = useState(false);


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !rendered) {
          setRendered(true);
          observer.disconnect();
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
    <section
      ref={projectsRef}
      className={`numbered mb-12 mx-auto md:mb-24 transition-all duration-500 ease-in max-w-[1200px] ${rendered ? 'opacity-100 blur-0' : 'opacity-0 blur-md'}`}
      id='work'
    >
      <h3
        style={{ '--dynamic-font-size': '-regular-heading' }}
        className={`flex items-center justify-center mb-14 font-header text-short-heading whitespace-nowrap ${dashedLine}`}
      >
        Some Things I’ve Built
      </h3>

      <ul className="p-0 m-0 flex flex-wrap items-center justify-center max-w-[1200px] mx-auto max-[768px]:m-7" style={{ listStyle: 'none' }}>
        {projects &&
          Object.entries(projects).map(([key, project], i) => {
            const { title, cover, github, tech, description } = project;

            return (
              <li
                key={i}
                className="relative grid gap-2.5 grid-cols-[repeat(12,1fr)] items-center mb-24 max-[768px]:mb-16 max-[480px]:mb-8"
              >
                <div className="relative col-[1_/_7] row-span-full max-[1080px]:col-[1_/_9] max-[768px]:flex max-[768px]:flex-col max-[768px]:justify-center
                                max-[768px]:h-full max-[768px]:col-span-full max-[768px]:z-[5] max-[768px]:pt-10 max-[768px]:pb-[30px] max-[768px]:px-10 
                                max-[480px]:pt-[30px] max-[480px]:pb-5 max-[480px]:px-[25px]"
                >
                  <div>
                    <h6 className={`text-secondary-orange text-[clamp(24px,5vw,28px)] font-header md:mt-0 md:mb-5 md:mx-0 ${underlineEffect}`}>
                      <a href={github || '#'} target={"_blank"}>
                        {title}
                      </a>
                    </h6>

                    <div className="relative z-20 p-6 rounded bg-main-gray text-orange-200 text-lg max-[768px]:text-main-gray max-[768px]:bg-transparent
                                    max-[768px]:shadow-none max-[768px]:px-0 max-[768px]:py-5 shadow-custom transition-all duration-[0.25s] ease-out 
                                    hover:shadow-custom-hover hover:-translate-x-1 hover:-translate-y-1 focus:shadow-custom-hover focus:-translate-x-1 focus:-translate-y-1"
                    >
                      <p>{description}</p>
                    </div>

                    {tech.length && (
                      <ul
                        className="flex flex-wrap relative z-20 mt-[25px] mb-2.5 mx-0 p-0 max-[768px]:mx-0 max-[768px]:my-2.5"
                        style={{ listStyle: 'none' }}
                      >
                        {tech.map((skill, j) => (
                          <li
                            key={j}
                            className="text-secondary-gray max-[768px]:text-orange-800 text-[13px] whitespace-nowrap ml-0 mr-5 mt-0 mb-[5px] 
                                        max-[768px]:text-[#ccd6f6)] max-[768px]:ml-0 max-[768px]:mr-2.5 max-[768px]:mt-0 max-[768px]:mb-[5px]"
                          >
                            {skill}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>

                <div className="col-[6_/_-1] row-span-full relative z-[1] max-[768px]:col-span-full max-[768px]:h-full max-[768px]:opacity-30">
                  <a href={github || '#'} target={"_blank"} className={`relative z-10 w-full h-full rounded align-middle`}>
                    <img
                      src={cover} alt={title}
                      className="shadow-custom rounded brightness-[70%] max-[768px]:object-cover max-[768px]:w-full max-[768px]:h-full
                                max-[768px]:grayscale max-[768px]:contrast-100 max-[768px]:brightness-[50%] 
                                transition-all duration-500 ease-out hover:shadow-custom-hover hover:-translate-x-1 hover:-translate-y-1
                                focus:shadow-custom-hover focus:-translate-x-1 focus:-translate-y-1"
                    />
                  </a>
                </div>
              </li>
            );
          })}

        <li><Plumber /></li> {/* TODO: DELETE when the rest of the projects are completed */}

      </ul>
    </section>
  );
}