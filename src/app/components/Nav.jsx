'use client';
import { useCallback, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { links, navLinks } from '../utils/config';
import { icons, waitForMs } from "../utils/utils";
import RetroBtn from './RetroBtn';


export default function Nav({ hiddenRetroComputer, screenWidth }) {

  const { t } = useTranslation(['strings']);
  const [showNavbar, setShowNavbar] = useState(false);
  const [navbarHidden, setNavbarHidden] = useState(true);
  const [navbarOnHoverState, setNavbarOnHoverState] = useState({});
  const isSmallScreen = screenWidth < 1487;
  const commonDarkTheme = (navbarHidden && !isSmallScreen) || isSmallScreen;
  const navItems = useMemo(() => ([
    { key: 'about', href: navLinks.About },
    { key: 'experience', href: navLinks.Experience },
    { key: 'work', href: navLinks.Work },
    { key: 'contact', href: navLinks.Contact },
  ]), []);

  const handleNavbarOnHover = useCallback((section, isHover) => {
    setNavbarOnHoverState(prev => ({ ...prev, [section]: isHover }));
  }, []);

  useEffect(() => {
    const toggleNavbar = async () => {
      if (!showNavbar) {
        await waitForMs(500);
        setNavbarHidden(true);
      } else {
        setNavbarHidden(false);
      }
    };
    toggleNavbar();
  }, [showNavbar]);

  return (
    <>
      <header className="fixed m-1 md:m-5 z-50">
        <div className="flex items-center justify-between px-5 py-3">

          <div className="flex items-center z-40">

            {/* Show / hide nav button */}
            <RetroBtn
              styles={`px-5 py-1 z-50 ${!hiddenRetroComputer ? 'pointer-events-none opacity-0 blur-sm' : 'pointer-events-auto opacity-100 blur-0'}`}
              darkTheme={!navbarHidden && isSmallScreen}
              effect={() => setShowNavbar(prev => !prev)}
              child={navbarHidden || !isSmallScreen ? icons.MenuIcon : icons.DarkMenuIcon}
            />

            {/* Redirect to LinkedIn btn */}
            <RetroBtn
              style={{ '--dynamic-duration': '0.5s', '--dynamic-translate': '-90%' }}
              styles={`ml-7 px-3 py-1 ${showNavbar ? 'animate-fadeIn' : 'animate-fadeOut'} ${navbarHidden ? 'hidden' : ''} z-40`}
              darkTheme={commonDarkTheme}
              href={links.LinkedIn}
              target="_blank" rel="noopener noreferrer"
              child={navbarHidden || !isSmallScreen ? icons.LinkedInIcon : icons.DarkLinkedInIcon}
            />

            {/* Redirect to my GitHub profile */}
            <RetroBtn
              style={{ '--dynamic-duration': '0.7s', '--dynamic-translate': '-90%' }}
              styles={`px-3 py-1 z-40 ${showNavbar ? 'animate-fadeIn ' : 'animate-fadeOut'} ${navbarHidden ? 'hidden' : ''}`}
              darkTheme={commonDarkTheme}
              href={links.GitHub}
              target="_blank" rel="noopener noreferrer"
              child={navbarHidden || !isSmallScreen ? icons.GitHubIcon : icons.DarkGitHubIcon}
            />
          </div>

          {/* Download CV btn */}
          <RetroBtn
            style={{ '--dynamic-duration': '0.9s', '--dynamic-translate': '-90%' }}
            styles={`px-3 py-1 z-40 ${showNavbar ? 'animate-fadeIn' : 'animate-fadeOut'} ${navbarHidden ? 'hidden' : ''}`}
            darkTheme={commonDarkTheme}
            href={links.CV}
            download="cv-xportas.pdf"
            target="_blank" rel="noopener noreferrer"
            child={navbarHidden || !isSmallScreen ? icons.CVIcon : icons.DarkCVIcon}
          />

          {/* Main nav (for large and traditional screens) */}
          {!isSmallScreen && (
            <div className="fixed left-1/2 transform -translate-x-1/2 z-20">
              <nav
                style={{ '--dynamic-duration': '1.1s', '--dynamic-translate': '-90%' }}
                className={`flex font-header text-orange-200 bg-main-gray px-5 py-1 border-2 border-orange-200 whitespace-nowrap shadow-custom ${showNavbar ? 'animate-fadeIn' : 'animate-fadeOut'} ${navbarHidden ? 'hidden' : ''}`}
              >
                <div className="absolute z-30 flex items-center justify-center numbered">
                  {navItems.map(({ key }) => (
                    <span
                      key={key}
                      style={{ '--dynamic-duration': '0.3s', '--dynamic-translate': '0' }}
                      className={`px-3 my-2 bg-orange-300 bg-clip-text text-transparent ${navbarOnHoverState[key] ? 'blur-xs' : 'animate-fadeOut transition-all duration-75'}`}>
                      {t(`NAV.${key.toUpperCase()}`)}
                    </span>
                  ))}
                </div>
                <div className="relative z-40 flex items-center justify-center numbered">
                  {navItems.map(({ key, href }) => (
                    <a
                      key={key}
                      href={href}
                      className="px-3 my-2 hover:-translate-y-1.5 hover:translate-x-1.5 hover:my-0 hover:pt-0 hover:pb-1 transition-all duration-150"
                      onMouseOver={() => handleNavbarOnHover(key, true)}
                      onMouseLeave={() => handleNavbarOnHover(key, false)}>
                      <span className="bg-main-gray bg-clip-text">{t(`NAV.${key.toUpperCase()}`)}</span>
                    </a>
                  ))}
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Mobile nav */}
      {isSmallScreen && (
        <div className={`fixed h-screen w-screen bg-main-gray z-40 ${showNavbar ? 'animate-wipeInRight' : 'animate-wipeOutLeft'} ${navbarHidden ? 'hidden' : ''}`}>
          <nav className="inline-flex items-baseline flex-col font-header text-orange-200 pt-24 p-7 w-full">
            {['home', ...navItems.map(n => n.key)].map(key => (
              <a
                key={key}
                href={navLinks[key.charAt(0).toUpperCase() + key.slice(1)]}
                className={`text-[3.5vh] w-full mb-2 ${navbarOnHoverState[key] ? 'bg-orange-200 text-main-gray' : ''}`}
                onMouseOver={() => handleNavbarOnHover(key, true)}
                onMouseLeave={() => handleNavbarOnHover(key, false)}
              >
                <span className="ml-3" onClick={() => setShowNavbar(false)}>
                  {t(`NAV.${key === 'home' ? 'HERO' : key.toUpperCase()}`)}
                </span>
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}