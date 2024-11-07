'use client';
import { useEffect, useRef, useState } from 'react';
import { jobs } from '../utils/config';
import { dashedLine, linkStyle } from "../utils/utils";


export default function Jobs({ screenWidth }) {
  const [activeTabId, setActiveTabId] = useState(0);
  const [tabFocus, setTabFocus] = useState(null);
  const tabs = useRef([]);
  const jobsRef = useRef(null);
  const [rendered, setRendered] = useState(false);


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !rendered) {
          setRendered(true);
          observer.disconnect(); // Disconnects the observer after the first intersection
        }
      },
      { threshold: 0.07 }
    );

    if (jobsRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (jobsRef.current) {
        observer.disconnect();
      }
    };
  }, [rendered]);


  const focusTab = () => {
    if (tabs.current[tabFocus]) {
      tabs.current[tabFocus].focus();
      return;
    }
    // If we're at the last, go to the first
    if (tabFocus >= tabs.current.length) {
      setTabFocus(0);
    }
    // If we're at the first, move to the last
    if (tabFocus < 0) {
      setTabFocus(tabs.current.length - 1);
    }
  };

  // Only re-run the effect if tabFocus changes
  useEffect(() => focusTab(), [tabFocus]);


  // Handle event when user press up or down arrow keys
  const onKeyDown = (e) => {
    switch (e.key) {
      case 'ArrowUp': {
        e.preventDefault();
        setTabFocus(tabFocus - 1);
        break;
      }

      case 'ArrowDown': {
        e.preventDefault();
        setTabFocus(tabFocus + 1);
        break;
      }

      default: {
        break;
      }
    }
  };


  return (
    <section ref={jobsRef}
      className={`max-w-[750px] mx-auto numbered mb-12 md:mb-24 transition-all duration-300 ease-in ${rendered ? 'opacity-100 blur-0' : 'opacity-0 blur-md'}`}
      id='experience'>

      <h3 style={{ '--dynamic-font-size': '-regular-heading' }}
        className={`flex items-center mb-7 font-header text-short-heading ${dashedLine}`}>
        Where I’ve Worked
      </h3>

      <div className="flex max-[600px]:block min-[750px]:min-h-[340px]">
        <div onKeyDown={(e) => onKeyDown(e)}
          className="relative w-max p-0 m-0 list-none z-10
                        max-[480px]:w-[calc(100% + 50px)] max-[480px]:pl-6 max-[480px]:ml-6
                        max-[600px]:flex max-[600px]:overflow-x-auto max-[600px]:w-[calc(100% + 100px)]
                        max-[600px]:pl-[50px] max-[600px]:ml-[-50px] max-[600px]:mb-8" >
          {jobs && Object.entries(jobs).map(([key, job], i) => {
            return (
              <button
                className={`${linkStyle} flex justify-center items-center w-full h-11 py-0 border-l-4 border-solid border-main-gray
                              bg-transparent font-header text-xs text-left whitespace-nowrap max-[768px]:pt-0 max-[768px]:px-4 max-[768px]:pb-[2px]
                              max-[600px]:flex max-[600px]:justify-between max-[600px]:items-center max-[600px]:min-w-32 max-[600px]:py-0
                              max-[600px]:px-4 max-[600px]:border-l-0 max-[600px]:border-b-2 max-[600px]:border-[#a8947e8b] max-[600px]:text-center
                              hover:bg-[#a8947e8b] focus:bg-[#a8947e8b] ${activeTabId === i ? 'text-secondary-orange' : 'text-main-gray'}`}
                key={i}
                isActive={activeTabId === i}
                onClick={() => setActiveTabId(i)}
                ref={el => (tabs.current[i] = el)}
                id={`tab-${i}`}
                role="tab"
                tabIndex={activeTabId === i ? '0' : '-1'}
                aria-selected={activeTabId === i ? true : false}
                aria-controls={`panel-${i}`}>
                <span className='mx-2'>{job.company}</span>
              </button>
            );
          })}
          <div className='absolute top-0 left-0 z-20 w-1 h-11 bg-secondary-orange
                transition-transform ease-in-out duration-300 delay-100
                max-[480px]:ml-6 max-[600px]:top-auto max-[600px]:bottom-0 max-[600px]:w-full max-[600px]:max-w-[120px] max-[600px]:h-[2px] max-[600px]:ml-12'
            style={{
              transform: screenWidth > 600
                ? `translateY(calc(${activeTabId} * 44px))`
                : `translateX(calc(${activeTabId} * 120px))`
            }}></div>
        </div>


        <div className='relative w-full ml-5 max-[600px]:ml-0'>
          {jobs && Object.entries(jobs).map(([key, job], i) => {
            return (
              <div className='w-full h-auto py-[10px] px-1'
                id={`panel-${i}`}
                role="tabpanel"
                tabIndex={activeTabId === i ? '0' : '-1'}
                aria-labelledby={`tab-${i}`}
                aria-hidden={activeTabId !== i}
                hidden={activeTabId !== i}>

                <h3 className='mb-[2px] font-medium animate-wipeInRight' style={{ fontSize: '22px', lineHeight: 1.3 }}>
                  <span>{job.title}</span>
                  <span className="text-secondary-orange">
                    &nbsp;@&nbsp;
                    <a href={job.url}>
                      {job.company}
                    </a>
                  </span>
                </h3>

                <p className='mb-6 text-secondary-gray animate-wipeInRight' style={{ fontSize: '13px' }}>{job.range}</p>

                <div className='p-0 m-0'>
                  <ul className='p-0 m-0 list-none ' style={{ fontSize: '18px' }}>
                    {Object.values(job.duties).map((dutie, i) => {
                      return (
                        <li className={`relative pl-7 mb-3 before:absolute before:left-0 before:text-secondary-orange before:content-["▹"] 
                                        animate-wipeInRight`}
                          style={{ animationDelay: `${i * 100}ms` }}>
                          {dutie}
                        </li>
                      )
                    })}
                  </ul>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}