import { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslation } from "react-i18next";
import RetroBtn from '../components/RetroBtn';
import { personalData } from '../utils/config';

export default function Contact() {

  const { t } = useTranslation(['strings']);
  const contactRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleIntersection = useCallback((entries, observer) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setIsVisible(true);
      observer.disconnect();
    }
  }, []);

  useEffect(() => {
    if (!contactRef.current || isVisible) return;

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.05,
    });

    observer.observe(contactRef.current);

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <section
      ref={contactRef}
      className={`block text-center max-w-[600px] mx-auto max-[450px]:py-14 max-[768px]:py-20 md:py-24 transition-all duration-500 ease-in 
                  ${isVisible ? 'opacity-100 blur-0' : 'opacity-0 blur-md'} px-7 sm:px-6 md:px-8`}
      id='contact'
    >
      <h3 className='text-lg'>
        {t('CONTACT.WHATS_NEXT')}
      </h3>
      <h2 className="font-header text-responsive-section-heading whitespace-nowrap">
        {t('CONTACT.GET_IN_TOUCH')}
      </h2>
      <p className='mt-6 mb-12 text-xs min-[480px]:text-sm min-[1375px]:text-base'>
        {t('CONTACT.BODY')}
      </p>
      <div className='flex justify-center relative'>
        <RetroBtn
          styles={'px-6 py-4'}
          darkTheme={false}
          href={`mailto:${personalData.email}`}
          child={<span className='text-orange-200'>{t('CONTACT.SAY_HELLO')}</span>}
        />
      </div>
    </section>
  );
}