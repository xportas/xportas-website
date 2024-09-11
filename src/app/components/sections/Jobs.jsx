'use client';
import { useEffect, useRef, useState } from 'react';
import { dashedLine, linkStyle } from "../../utils/utils";


export default function Jobs() {

  const [activeTabId, setActiveTabId] = useState(0);
  const [tabFocus, setTabFocus] = useState(null);
  const tabs = useRef([]);
  
  
  const jobsData = []; // TODO: useEffect to get jobs data when component is mounted


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
    <section className="max-w-[700px]">

      <h3 style={{ '--dynamic-font-size': '-regular-heading' }}
        className={`flex items-center mb-7 font-header text-short-heading ${dashedLine}`}>
        Where I’ve Worked
      </h3>

      <div className="flex max-[600px]:block min-[700px]:min-h-[340px]">
        <div className="relative w-max p-0 m-0 list-none z-10
                        max-[480px]:w-[calc(100% + 50px)] max-[480px]:pl-6 max-[480px]:ml-6
                        max-[600px]:flex max-[600px]:overflow-x-auto max-[600px]:w-[calc(100% + 100px)]
                        max-[600px]:pl-[50px] max-[600px]:ml-[-50px] max-[600px]:mb-8
                        "
          onKeyDown={(e) => onKeyDown(e)}>

          {/* PARA EL DIV DE ARRIBA ME FALTA PONERLE LOS ESTILOS A LOS li HIJOS COMO ESTÁ COMENTADO AQUÍ ABAJO


<li className="first-of-type:max-[600px]:ml-8">
li {
    &:first-of-type {
      @media (max-width: 600px) {
        margin-left: 50px;
      }
      @media (max-width: 480px) {
        margin-left: 25px;
      }
    }
    &:last-of-type {
      @media (max-width: 600px) {
        padding-right: 50px;
      }
      @media (max-width: 480px) {
        padding-right: 25px;
      }
    }
  }
</li> */}

          {/* FIN DE ESTILOS PENDIENTES, AHORA CONTINÚO */}

          {jobsData &&
            jobsData.map(({ job }, i) => {
              return (
                <button
                  className={`${linkStyle} flex items-center w-full h-11 py-0 pb-5 border-l-2 border-solid border-main-gray
                              bg-transparent font-header text-xs text-left whitespace-nowrap`}
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



        </div>

      </div>
    </section>
  );
}