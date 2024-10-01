'use client';
import { useEffect, useRef, useState } from 'react';
import { jobs } from '../../utils/config';
import { dashedLine, linkStyle } from "../../utils/utils";


export default function Jobs() {

  const [activeTabId, setActiveTabId] = useState(0);
  const [tabFocus, setTabFocus] = useState(null);
  const tabs = useRef([]);


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
    <section className="max-w-[700px] mx-auto numbered mb-12 md:mb-24" id='experience'>

      <h3 style={{ '--dynamic-font-size': '-regular-heading' }}
        className={`flex items-center mb-7 font-header text-short-heading ${dashedLine}`}>
        Where I’ve Worked
      </h3>

      <div className="flex max-[600px]:block min-[700px]:min-h-[340px]">
        <div onKeyDown={(e) => onKeyDown(e)}
          className="relative w-max p-0 m-0 list-none z-10
                        max-[480px]:w-[calc(100% + 50px)] max-[480px]:pl-6 max-[480px]:ml-6
                        max-[600px]:flex max-[600px]:overflow-x-auto max-[600px]:w-[calc(100% + 100px)]
                        max-[600px]:pl-[50px] max-[600px]:ml-[-50px] max-[600px]:mb-8" >
          {jobs && Object.entries(jobs).map(([key, job], i) => {
            return (
              <button
                className={`${linkStyle} flex items-center w-full h-11 py-0 pb-5 border-l-2 border-solid border-main-gray
                              bg-transparent font-header text-xs text-left whitespace-nowrap max-[768px]:pt-0 max-[768px]:px-4 max-[768px]:pb-[2px]
                              max-[600px]:flex max-[600px]:justify-between max-[600px]:items-center max-[600px]:min-w-32 max-[600px]:py-0
                              max-[600px]:px-4 max-[600px]:border-l-0 max-[600px]:border-b-2 max-[600px]:border-slate-400 max-[600px]:text-center
                              hover:bg-slate-400 focus:bg-slate-400 ${activeTabId === i ? 'text-green-500' : 'text-gray-500'}`}
                key={i}
                isActive={activeTabId === i}
                onClick={() => setActiveTabId(i)}
                ref={el => (tabs.current[i] = el)}
                id={`tab-${i}`}
                role="tab"
                tabIndex={activeTabId === i ? '0' : '-1'}
                aria-selected={activeTabId === i ? true : false}
                aria-controls={`panel-${i}`}>
                <span>{job.company}</span>
              </button>
            );
          })}
          <div className='absolute top-0 left-0 z-20 w-[2px] h-11 rounded bg-green-300
                transition-transform ease-in-out duration-200 delay-100
                max-[480px]:ml-6 max-[600px]:top-auto max-[600px]:bottom-0 max-[600px]:w-full max-[600px]:max-w-[120px] max-[600px]:h-[2px] max-[600px]:ml-12'
            style={{
              transform: window.innerWidth > 600
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

                <h3 className='mb-[2px] font-medium' style={{ fontSize: '22px', lineHeight: 1.3 }}>
                  <span>{job.title}</span>
                  <span className="text-green-500">
                    &nbsp;@&nbsp;
                    <a href={job.url} className="inline-link">
                      {job.company}
                    </a>
                  </span>
                </h3>

                <p className='mb-6 text-[#a8b2d1]' style={{ fontSize: '13px' }}>{job.range}</p>

                <div className='p-0 m-0'>
                  <ul className='p-0 m-0 list-none ' style={{ fontSize: '18px' }}>
                    {Object.values(job.duties).map(dutie => {
                      return (
                        <li className='relative pl-7 mb-3 before:absolute before:left-0 before:text-green-400 before:content-["▹"]'>
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