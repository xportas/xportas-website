'use client';
import { useEffect, useRef, useState } from 'react';


const languageOptions = [
  { value: 'en', flag: 'https://hatscripts.github.io/circle-flags/flags/uk.svg' },
  { value: 'es', flag: 'https://hatscripts.github.io/circle-flags/flags/es.svg' },
  { value: 'pt', flag: 'https://hatscripts.github.io/circle-flags/flags/pt.svg' },
  { value: 'gz', flag: './images/gz.svg' }
];

export default function RetroScreen() {

  const NAME = "Xabier Portas", ALIAS = "xportas";
  const typedNameOrAlias = useRef(null);
  const [langIndex, setLangIndex] = useState(0);
  const [selectedLang, setSelectedLang] = useState('en');


  function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  async function typeString(sentence, eleRef, delay = 100) {
    const letters = sentence.split("");
    let i = 0;
    while (i < letters.length) {
      await waitForMs(delay);
      if (eleRef.current) {
        eleRef.current.innerHTML += letters[i];
      }
      ++i;
    }
  }

  async function deleteString(eleRef) {
    const letters = eleRef.current.innerHTML.split("");
    while (letters.length > 0) {
      await waitForMs(100);
      letters.pop();
      eleRef.current.innerHTML = letters.join("");
    }
  }


  // Infinite typing effect
  useEffect(() => {
    let isMounted = true;

    const asyncTypeNameLoop = async () => {
      while (isMounted) {
        await typeString(NAME, typedNameOrAlias);
        await waitForMs(2000);
        await deleteString(typedNameOrAlias);
        await typeString(ALIAS, typedNameOrAlias);
        await waitForMs(2000);
        await deleteString(typedNameOrAlias);
      }
    }

    asyncTypeNameLoop();

    return () => {
      isMounted = false;
    };
  }, []);


  // Keyboard listening effect
  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case 'ArrowLeft':
          setLangIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : languageOptions.length - 1));
          break;
        case 'ArrowRight':
          setLangIndex((prevIndex) => (prevIndex < languageOptions.length - 1 ? prevIndex + 1 : 0));
          break;
        case 'Enter':
          // TODO: redirect to the main page with the selected language
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
    <div className='h-screen w-screen m-0 p-0 bg-pixel-space-transparent text-screen-txt-color' id='screen'>
      <div className='h-full w-full z-50 relative animate-crtScreen' id='crt-noise'
        style={{ background: `linear-gradient(to bottom, transparent, #aaa4, #8881, #6664, #4445, #2228, #4443, transparent), repeating-linear-gradient(transparent 0 2px, #25242950 2px 4px)` }}>

        <div className='flex h-3/5'>
          <div className='flex flex-col justify-center content-center space-y-12 font-header p-20 w-1/2'>
            <div>
              <p className='text-3xl'>Hi there,</p>
            </div>
            <div className='inline-block text-screen-bgcolor'>
              <span className='bg-screen-txt-color py-3 text-4xl font-main'>I'm {' '}</span>
              <span className='bg-screen-txt-color py-3 text-4xl font-main' ref={typedNameOrAlias}></span>
              <span className="inline-block w-[4px] h-[35px] bg-screen-txt-color ml-[3px] animate-blink mr-1"></span></div>
            <div>
              <ul className='list-inside list-square'>
                <li> Full Stack Developer </li>
                <li className='mt-2'> Specialization in GIS </li>
              </ul>
            </div>

          </div>

          <div className='flex flex-1 justify-center content-center'>
            <img src="/images/dark-xportas-img.jpeg" alt="xportas-portrait" className='img-blur rounded-full h-full mt-10' />
          </div>
        </div>

        <div className='flex place-content-around h-2/5'>
          <div className='flex justify-center content-center w-2/6'>
            <table className='m-auto'>
              <thead>
                <tr>
                  <th colSpan={2}>Choose one of the languages I speak:</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><img src="./images/arrow-keys.svg" alt="arrow-keys" width={50} /></td>
                  <td>Move between the options</td>
                </tr>
                <tr>
                  <td><img src="./images/enter-key.svg" alt="enter-keys" width={35} /></td>
                  <td>Select language</td>
                </tr>
              </tbody>
            </table>

          </div>
          {languageOptions.map((lang) => (
            <img key={lang.value} src={lang.flag} alt={lang.value} className={`rounded-full h-3/6 m-auto ${ selectedLang === lang.value ? 'shadow-lang-glow' : '' }`} />
          ))}
        </div>

      </div>
    </div>
  );
}