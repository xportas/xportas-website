'use client';
import { useEffect, useState } from 'react';
import { PixelatedImage } from '../components/PixelatedImage';
import { languageOptions, waitForMs } from '../utils/utils';



export default function LangSelector({ setCurrentLanguage, setRetroScreenOn, screenWidth }) {
  const [langIndex, setLangIndex] = useState(0);
  const [selectedLang, setSelectedLang] = useState('en');


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
          setRetroScreenOn(false);
          await waitForMs(900);
          setCurrentLanguage(selectedLang);
          break;
        default:
          break;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [langIndex]);


  useEffect(() => {
    setSelectedLang(languageOptions[langIndex].value);
  }, [langIndex]);



  return (
    <div className="flex flex-col max-w-6xl m-auto md:flex-row place-content-around h-auto md:h-2/5 px-4 md:px-0">
      <div className="flex flex-col w-full md:w-2/6 mx-2 md:mx-5 lg:mx-10 mt-3 md:space-y-5">
        <div className="ml-1">
          <span className="text-responsive-section-heading md:text-2xl text-center md:text-left">
            Select one of my languages:
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
              <span className="text-sm md:text-base">Move between the options</span>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <img
                src="./images/enter-key-icon.svg"
                alt="enter-keys"
                className="w-6 h-6 md:w-11 md:h-11"
              />
              <span className="text-sm md:text-base">Select language</span>
            </div>
          </>
        }
      </div>
      <div className="grid grid-cols-2 gap-4 justify-center items-center md:gap-6 mt-3 md:mt-0">
        {languageOptions.map((lang) => (
          <PixelatedImage
            blockSize={10}
            key={lang.value}
            src={lang.flag}
            alt={lang.value}
            level={lang.level}
            className={`m-auto rounded-full w-20 h-20 md:w-32 md:h-32 opacity-95 ${selectedLang === lang.value ? 'shadow-lang-glow' : ''
              }`}
          />
        ))}
      </div>
    </div>
  );
}