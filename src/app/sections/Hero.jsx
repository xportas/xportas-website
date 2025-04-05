import { useEffect, useRef, useState } from 'react';
import { useTranslation } from "react-i18next";
import RetroBtn from '../components/RetroBtn';
import { links } from '../utils/config';

export default function Hero() {

  const { t } = useTranslation(['strings']);
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
    <div className='flex items-center justify-center' id='hero'>
      <article
        ref={heroRef}
        className={`flex flex-col items-start justify-center min-h-screen h-auto mx-auto transition-all duration-500 ease-in 
                  ${rendered ? 'opacity-100 blur-0' : 'opacity-0 blur-md'} max-[768px]:py-auto max-[768px]:mx-7 max-[768px]:mb-32
                  min-[768px]:mx-32 min-[1080px]:max-w-[980px]`}
      >
        <h3 className="text-[clamp(14px,4vw,16px)] text-secondary-orange">{t('HERO.GREETING')}</h3>
        <h1 className="text-big-heading whitespace-nowrap">{t('HERO.NAME')}.</h1>
        <h2 className="text-responsive-section-heading text-secondary-orange">{t('HERO.H2')}</h2>
        <p className="mt-5 min-[1080px]:w-1/2 pb-3 text-xs min-[480px]:text-sm min-[1375px]:text-base">
          {t('HERO.P1')}
        </p>
        <p className="min-[1080px]:w-1/2 text-xs min-[480px]:text-sm min-[1375px]:text-base">
          {t('HERO.P2')}
          <a className={'text-xs min-[480px]:text-sm min-[1375px]:text-base text-secondary-orange underline-effect'} href="https://itracasa.es/" target="_blank" rel="noreferrer">
            {t('HERO.TRACASA')}
          </a>.
        </p>
        <RetroBtn
          href={links.GitHub}
          target="_blank"
          rel="author"
          styles="mt-12 px-10 py-4 max-[350px]:px-5"
          child={<span className="text-orange-200">{t('HERO.CHECK_GH')}</span>}
        />
      </article>
    </div>
  );
}