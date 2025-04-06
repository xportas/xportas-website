'use client';
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { links, navLinks } from '../utils/config';
import { waitForMs } from "../utils/utils";
import RetroBtn from './RetroBtn';
import { icons } from "../utils/utils";


export default function Nav({ hiddenRetroComputer, screenWidth }) {

  const { t, i18n } = useTranslation(['strings']);
  const [showNavbar, setShowNavbar] = useState(false);
  const [navbarHidden, setNavbarHidden] = useState(true);
  const navbarInitialState = { home: false, about: false, work: false, experience: false, contact: false };
  const [navbarOnHoverState, setNavbarOnHoverState] = useState(navbarInitialState);

  const handleNavbarOnHover = (a, isHover) => {
    const newNavbarOnHoverState = { ...navbarInitialState, [a]: isHover };
    setNavbarOnHoverState(newNavbarOnHoverState);
  }

  useEffect(() => {
    const handleNavbar = async () => {
      if (!showNavbar) {
        await waitForMs(500);
        setNavbarHidden(true);
      } else {
        setNavbarHidden(false);
      }
    };
    handleNavbar();
  }, [showNavbar]);

  return (
    <>
      <header className="fixed m-1 md:m-5 z-50">
        <div className="flex items-center justify-between px-5 py-3">

          <div className="flex items-center z-40">

            {/* Show / hide nav button */}
            <RetroBtn
              styles={`px-5 py-1 z-50 ${!hiddenRetroComputer ? 'pointer-events-none opacity-0 blur-sm' : 'pointer-events-auto opacity-100 blur-0'}`}
              darkTheme={!navbarHidden && screenWidth < 1487}
              effect={() => setShowNavbar(!showNavbar)}
              child={navbarHidden || screenWidth >= 1487 ? icons.MenuIcon : icons.DarkMenuIcon}
            />

            {/* Redirect to LinkedIn btn */}
            <RetroBtn
              style={{ '--dynamic-duration': '0.5s', '--dynamic-translate': '-90%' }}
              styles={`ml-7 px-3 py-1 ${showNavbar ? 'animate-fadeIn' : 'animate-fadeOut'} ${navbarHidden ? 'hidden' : ''} z-40`}
              darkTheme={(navbarHidden && screenWidth >= 1487) || screenWidth < 1487}
              href={links.LinkedIn}
              target="_blank" rel="noopener noreferrer"
              child={navbarHidden || screenWidth >= 1487 ? icons.LinkedInIcon : icons.DarkLinkedInIcon}
            />

            {/* Redirect to my GitHub profile */}
            <RetroBtn
              style={{ '--dynamic-duration': '0.7s', '--dynamic-translate': '-90%' }}
              styles={`px-3 py-1 z-40 ${showNavbar ? 'animate-fadeIn ' : 'animate-fadeOut'} ${navbarHidden ? 'hidden' : ''}`}
              darkTheme={(navbarHidden && screenWidth >= 1487) || screenWidth < 1487}
              href={links.GitHub}
              target="_blank" rel="noopener noreferrer"
              child={navbarHidden || screenWidth >= 1487 ? icons.GitHubIcon : icons.DarkGitHubIcon}
            />
          </div>

          {/* Download CV btn */}
          <RetroBtn
            style={{ '--dynamic-duration': '0.9s', '--dynamic-translate': '-90%' }}
            styles={`px-3 py-1 z-40 ${showNavbar ? 'animate-fadeIn' : 'animate-fadeOut'} ${navbarHidden ? 'hidden' : ''}`}
            darkTheme={(navbarHidden && screenWidth >= 1487) || screenWidth < 1487}
            href={links.CV}
            download="cv-xportas.pdf"
            target="_blank" rel="noopener noreferrer"
            child={navbarHidden || screenWidth >= 1487 ? icons.CVIcon : icons.DarkCVIcon}
          />

          {/* Main nav (for large and traditional screens) */}
          {!(screenWidth < 1487) &&
            <div className="fixed left-1/2 transform -translate-x-1/2 z-20">
              <nav
                style={{ '--dynamic-duration': '1.1s', '--dynamic-translate': '-90%' }}
                className={`flex font-header text-orange-200 bg-main-gray px-5 py-1 border-solid border-2 border-orange-200 whitespace-nowrap shadow-custom ${showNavbar ? 'animate-fadeIn' : 'animate-fadeOut'} ${navbarHidden ? 'hidden' : ''}`}
              >
                <div className="absolute z-30 flex items-center justify-center numbered">
                  <span
                    style={{ '--dynamic-duration': '0.3s', '--dynamic-translate': '0' }}
                    className={`px-3 my-2 bg-orange-300 bg-clip-text text-transparent ${navbarOnHoverState.about ? 'blur-xs' : 'animate-fadeOut transition-all duration-75'} `}>
                    {t('NAV.ABOUT')}
                  </span>
                  <span
                    style={{ '--dynamic-duration': '0.3s', '--dynamic-translate': '0' }}
                    className={`px-3 my-2 bg-orange-300 bg-clip-text text-transparent ${navbarOnHoverState.experience ? 'blur-xs' : 'animate-fadeOut transition-all duration-75'} `}>
                    {t('NAV.EXPERIENCE')}
                  </span>
                  <span
                    style={{ '--dynamic-duration': '0.3s', '--dynamic-translate': '0' }}
                    className={`px-3 my-2 bg-orange-300 bg-clip-text text-transparent ${navbarOnHoverState.work ? 'blur-xs' : 'animate-fadeOut transition-all duration-75'} `}>
                    {t('NAV.WORK')}
                  </span>
                  <span
                    style={{ '--dynamic-duration': '0.3s', '--dynamic-translate': '0' }}
                    className={`px-3 my-2 bg-orange-300 bg-clip-text text-transparent ${navbarOnHoverState.contact ? 'blur-xs' : 'animate-fadeOut transition-all duration-75'} `}>
                    {t('NAV.CONTACT')}
                  </span>
                </div>

                <div className="relative z-40 flex items-center justify-center numbered">
                  <a
                    href={navLinks.About}
                    className="px-3 my-2 hover:-translate-y-1.5 hover:translate-x-1.5 hover:my-0 hover:pt-0 hover:pb-1 transition-all duration-150"
                    onMouseOver={() => handleNavbarOnHover('about', true)}
                    onMouseLeave={() => handleNavbarOnHover('about', false)}>
                    <span className={`bg-main-gray bg-clip-text`}>
                      {t('NAV.ABOUT')}
                    </span>
                  </a>
                  <a
                    href={navLinks.Experience}
                    className="px-3 my-2 hover:-translate-y-1.5 hover:translate-x-1.5 hover:my-0 hover:pt-0 hover:pb-1 transition-all duration-150"
                    onMouseOver={() => handleNavbarOnHover('experience', true)}
                    onMouseLeave={() => handleNavbarOnHover('experience', false)}>
                    <span className={`bg-main-gray bg-clip-text`}>
                      {t('NAV.EXPERIENCE')}
                    </span>
                  </a>
                  <a
                    href={navLinks.Work}
                    className="px-3 my-2 hover:-translate-y-1.5 hover:translate-x-1.5 hover:my-0 hover:pt-0 hover:pb-1 transition-all duration-150"
                    onMouseOver={() => handleNavbarOnHover('work', true)}
                    onMouseLeave={() => handleNavbarOnHover('work', false)}>
                    <span
                      className={`bg-main-gray bg-clip-text`}>
                      {t('NAV.WORK')}
                    </span>
                  </a>
                  <a
                    href={navLinks.Contact}
                    className="px-3 my-2 hover:-translate-y-1.5 hover:translate-x-1.5 hover:my-0 hover:pt-0 hover:pb-1 transition-all duration-150"
                    onMouseOver={() => handleNavbarOnHover('contact', true)}
                    onMouseLeave={() => handleNavbarOnHover('contact', false)}>
                    <span
                      className={`bg-main-gray bg-clip-text`}>
                      {t('NAV.CONTACT')}
                    </span>
                  </a>
                </div>
              </nav>
            </div>}

        </div>
      </header>


      {/* Multiplataform nav (small screens) */}
      {screenWidth < 1487 &&
        <div className={`fixed h-screen w-screen bg-main-gray z-40 ${showNavbar ? 'animate-wipeInRight' : 'animate-wipeOutLeft'} ${navbarHidden ? 'hidden' : ''}`}>
          <nav className="inline-flex items-baseline flex-col font-header text-orange-200 pt-24 p-7 w-full">
            <a
              href={navLinks.Home}
              className={`text-[3.5vh] w-full mb-2 ${navbarOnHoverState.home ? 'bg-orange-200 text-main-gray' : ''}`}
              onMouseOver={() => handleNavbarOnHover('home', true)} onMouseLeave={() => handleNavbarOnHover('home', false)}>
              <span className="ml-3" onClick={() => setShowNavbar(!showNavbar)}>
                {t('NAV.HERO')}
              </span>
            </a>
            <a
              href={navLinks.About}
              className={`text-[3.5vh] w-full mb-2 ${navbarOnHoverState.about ? 'bg-orange-200 text-main-gray' : ''}`}
              onMouseOver={() => handleNavbarOnHover('about', true)} onMouseLeave={() => handleNavbarOnHover('about', false)}>
              <span className="ml-3" onClick={() => setShowNavbar(!showNavbar)}>
                {t('NAV.ABOUT')}
              </span>
            </a>
            <a
              href={navLinks.Experience}
              className={`text-[3.5vh] w-full mb-2 ${navbarOnHoverState.experience ? 'bg-orange-200 text-main-gray' : ''}`}
              onMouseOver={() => handleNavbarOnHover('experience', true)} onMouseLeave={() => handleNavbarOnHover('experience', false)}>
              <span className="ml-3" onClick={() => setShowNavbar(!showNavbar)}>
                {t('NAV.EXPERIENCE')}
              </span>
            </a>
            <a
              href={navLinks.Work}
              className={`text-[3.5vh] w-full mb-2 ${navbarOnHoverState.work ? 'bg-orange-200 text-main-gray' : ''}`}
              onMouseOver={() => handleNavbarOnHover('work', true)}
              onMouseLeave={() => handleNavbarOnHover('work', false)}>
              <span className="ml-3" onClick={() => setShowNavbar(!showNavbar)}>
                {t('NAV.WORK')}
              </span>
            </a>
            <a
              href={navLinks.Contact}
              className={`text-[3.5vh] w-full mb-2 ${navbarOnHoverState.contact ? 'bg-orange-200 text-main-gray' : ''}`}
              onMouseOver={() => handleNavbarOnHover('contact', true)}
              onMouseLeave={() => handleNavbarOnHover('contact', false)} >
              <span className="ml-3" onClick={() => setShowNavbar(!showNavbar)}>
                {t('NAV.CONTACT')}
              </span>
            </a>
          </nav>
        </div>
      }
    </>
  );
}