'use client';
import { useEffect, useRef, useState } from 'react';
import { waitForMs, languageOptions } from '../../utils/utils';
import { PixelatedImage } from '../PixelatedImage';
import AnimatedTyping from '../AnimatedTyping';



export default function RetroScreen({ setCurrentLanguage }) {
  const mainThemeAudioRef = useRef(null);
  const [langIndex, setLangIndex] = useState(0);
  const [selectedLang, setSelectedLang] = useState('en');
  const [retroScreenOn, setRetroScreenOn] = useState(true);
  const [mainThemeAudioON, setMainThemeAudioON] = useState(false);


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
          // await waitForMs(500);
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


  // Song effect
  useEffect(() => {
    const mainThemeAudioElement = mainThemeAudioRef.current;
    if (mainThemeAudioElement) {
      mainThemeAudioElement.play();
    }
    return () => {
      // Stop audio if the component is dismounted before playback is finished
      if (mainThemeAudioElement && !mainThemeAudioElement.paused) {
        mainThemeAudioElement.pause();
        mainThemeAudioElement.currentTime = 0;
      }
    };
  }, []);


  const handleStartMainThemeAudio = async () => {
    const mainThemeAudioElement = mainThemeAudioRef.current;
    if (mainThemeAudioElement) {
      await waitForMs(300);
      mainThemeAudioElement.play().then(() => setMainThemeAudioON(true));
    }
  };



  return (
    <div className='h-screen w-screen m-0 p-0 bg-pixel-space-transparent text-retroScreen-txtcolor' id='screen'>

      <audio ref={mainThemeAudioRef} src="/audio/main-song.mp3"></audio>
      {!mainThemeAudioON && (
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black z-50">
          <button
            className="powerOnOffBtn"
            onClick={() => handleStartMainThemeAudio()}>
            <div className="powerOnOffBtn-top">
              <img
                src="./images/shutdown-icon.svg"
                alt="arrow-keys"
                width={20}
              />
            </div>
            <div className="powerOnOffBtn-bottom"></div>
            <div className="powerOnOffBtn-base"></div>
          </button>
        </div>
      )}

{/* TODO: implementar efecto de apagado de pantalla antigua */}
      <div className={`h-full w-full absolute ${ retroScreenOn ? '' : '' }`} >

        {/* Hero */}
        <div className='flex h-3/5'>
          <div className='flex flex-col justify-center content-center space-y-12 font-header py-20 pl-20 w-1/2'>
            <div>
              <p className='text-3xl'>
                Hi there,
              </p>
            </div>
            <div className='inline-block text-retroScreen-bgcolor'>
              <span className='bg-retroScreen-txtcolor py-3 text-4xl font-main'>
                I'm {' '}
              </span>
              <AnimatedTyping cursorStyle={'inline-block w-[6px] h-[3rem] bg-retroScreen-txtcolor ml-[3px] animate-blink align-middle mb-3 mr-1'} stop={!retroScreenOn} textStyle={`bg-retroScreen-txtcolor py-3 text-4xl font-main`} />
            </div>
            <div>
              <ul className='list-inside list-square'>
                <li> Full Stack Developer </li>
                <li className='mt-2'> Specialization in GIS </li>
              </ul>
            </div>
          </div>


          {/* xportas image */}
          <div className='flex flex-1 justify-center content-center'>
            <PixelatedImage
              src="/images/dark-xportas-img.jpeg"
              blockSize={45}
              className='img-blur rounded-full h-full mt-10'
            />
          </div>
        </div>


        {/* Language selector */}
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
                  src="./images/arrow-keys.svg"
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
                  src="./images/enter-key.svg"
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
      </div>

      {/* CTR noise */}
      <div
        className='h-full w-full z-30 relative animate-crtScreen opacity-45'
        id='crt-noise'
        style={{ background: `linear-gradient(to bottom, transparent, #aaa4, #8881, #6664, #4445, #2228, #4443, transparent), repeating-linear-gradient(transparent 0 2px, #25242950 2px 4px)` }}>
      </div>

    </div>
  );
}