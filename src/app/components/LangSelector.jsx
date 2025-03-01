'use client';
import { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";
import { PixelatedImage } from '../components/PixelatedImage';
import { languageOptions, waitForMs } from '../utils/utils';


export default function LangSelector({ i18n, setCurrentLanguage, setRetroScreenOn, screenWidth, isTouchDevice, turningONanimation }) {

  const { t } = useTranslation(['strings']);
  const [langIndex, setLangIndex] = useState(0);
  const [increaseZIndexOfLangOpt, setIncreaseZIndexOfLangOpt] = useState(false);
  const [enableEnter, setEnableEnter] = useState(false);

  useEffect(() => {
    const handleEffect = async () => {
      if (turningONanimation) {
        setEnableEnter(true);
        if (isTouchDevice) {
          await waitForMs(400);
          setIncreaseZIndexOfLangOpt(true);
        }
      }
    };
    handleEffect();
  }, [turningONanimation]);

  // Keyboard listening effect
  useEffect(() => {
    const handleKeyDown = async (event) => {
      switch (event.key) {
        case 'ArrowUp':
        case 'ArrowLeft':
          setLangIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : languageOptions.length - 1));
          break;
        case 'ArrowDown':
        case 'ArrowRight':
          setLangIndex((prevIndex) => (prevIndex < languageOptions.length - 1 ? prevIndex + 1 : 0));
          break;
        case 'Enter':
          if (enableEnter) {
            setRetroScreenOn(false);
            setCurrentLanguage(languageOptions[langIndex].value);
            i18n.changeLanguage(languageOptions[langIndex].value);
          }
          break;
        default:
          break;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [langIndex, enableEnter]);

  const onClickLang = (langValue) => {
    setRetroScreenOn(false);
    setCurrentLanguage(langValue);
    i18n.changeLanguage(langValue);
  }

  return (
    <div className="flex flex-col max-w-6xl m-auto md:flex-row place-content-around h-auto md:h-2/5 px-4 md:px-0">
      <div className="flex flex-col w-full md:w-2/6 mx-2 md:mx-5 lg:mx-10 mt-3 md:space-y-5">
        <div className="ml-1">
          <span className="text-responsive-section-heading md:text-2xl text-center md:text-left">
            {t('LANG_SELECTOR.SELECT_LANG')}
          </span>
        </div>
        {screenWidth >= 768 &&
          <>
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <img
                src="./images/arrow-keys-icon.svg"
                alt="arrow-keys"
                className="w-8 h-8 md:w-14 md:h-14"
              />
              <span className="text-sm md:text-base"> {t('LANG_SELECTOR.MOVE_OPT')} </span>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <img
                src="./images/enter-key-icon.svg"
                alt="enter-keys"
                className="w-6 h-6 md:w-11 md:h-11"
              />
              <span className="text-sm md:text-base"> {t('LANG_SELECTOR.SELECT_ONE_LANG')} </span>
            </div>
          </>
        }
      </div>
      <div className="grid grid-cols-2 gap-4 justify-center items-center min-[427px]:grid-cols-4 md:gap-7 
                      mt-3 md:mt-0 min-[900px]:mr-7">
        {languageOptions.map((lang) => (
          <PixelatedImage
            blockSize={10}
            key={lang.value}
            src={lang.flag}
            alt={lang.value}
            level={lang.level}
            onClick={() => onClickLang(lang.value)}
            className={`m-auto rounded-full w-20 h-20 min-[600px]:w-24 min-[600px]:h-24 min-[900px]:w-28 min-[900px]:h-28 
                        lg:w-32 lg:h-32 opacity-95 ${increaseZIndexOfLangOpt ? 'z-[999]' : ''} ${languageOptions[langIndex].value === lang.value ? 'shadow-lang-glow' : ''}`}
          />
        ))}
      </div>
    </div>
  );
}