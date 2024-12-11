'use client';
import { useEffect, useState } from 'react';
import { PixelatedImage } from '../components/PixelatedImage';
import { languageOptions, waitForMs } from '../utils/utils';



export default function LangSelector({ setCurrentLanguage, setRetroScreenOn }) {
  const [langIndex, setLangIndex] = useState(0);
  const [selectedLang, setSelectedLang] = useState('en');


  // Keyboard listening effect
  useEffect(() => {
    const handleKeyDown = async (event) => {
      switch (event.key) {
        case 'ArrowLeft':
          setLangIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : languageOptions.length - 1));
          break;
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
    <div className='flex place-content-around h-2/5'>
      <div className='flex flex-col w-2/6 mx-10 mt-3 space-y-5'>

        <div className='ml-1'>
          <span className='text-2xl'>
            Select one of my languages:
          </span>
        </div>
        <div className='flex items-center ml-7'>
          <div className='flex justify-center w-1/6'>
            <img
              src="./images/arrow-keys-icon.svg"
              alt="arrow-keys"
              width={60}
            />
          </div>
          <div className='ml-3 w-5/6'>
            <span>
              Move between the options
            </span>
          </div>
        </div>
        <div className='flex items-center ml-7'>
          <div className='flex justify-center w-1/6'>
            <img
              src="./images/enter-key-icon.svg"
              alt="enter-keys"
              width={45}
            />
          </div>
          <div className='ml-3 w-5/6'>
            <span>
              Select language
            </span>
          </div>
        </div>

      </div>
      {languageOptions.map((lang) => (
        <PixelatedImage
          blockSize={10}
          key={lang.value}
          src={lang.flag}
          alt={lang.value}
          level={lang.level}
          className={`rounded-full h-3/6 m-auto opacity-95 ${selectedLang === lang.value ? 'shadow-lang-glow' : ''}`}
        />
      ))}
    </div>
  );
}