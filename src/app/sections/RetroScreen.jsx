'use client';
import { useEffect, useRef, useState } from 'react';
import AnimatedTyping from '../components/AnimatedTyping';
import LangSelector from '../components/LangSelector';
import PacManGhosts from '../components/PacManGhosts';
import { PixelatedImage } from '../components/PixelatedImage';
import PowerOnBtn from '../components/PowerOnBtn';
import { languageOptions, waitForMs } from '../utils/utils';



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


  const handleTurningOnWeb = async () => {
    const mainThemeAudioElement = mainThemeAudioRef.current;
    if (mainThemeAudioElement) {
      await waitForMs(300);
      mainThemeAudioElement.play().then(() => setMainThemeAudioON(true));
    }
  };


  return (
    <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center'>

      {/* PowerOnBtn --> "turning ON" the web */}
      {!mainThemeAudioON && (
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black z-50">
          <PowerOnBtn handleStartMainThemeAudio={handleTurningOnWeb} />
        </div>
      )}

      <div className={`h-screen w-screen m-0 p-0 bg-[url('/images/retro-bg.jpg')] bg-cover bg-center relative text-retroScreen-txtcolor
                    before:content-[''] before:absolute before:bg-[rgba(20,14,8,0.4)] before:z-[1] before:inset-0 
                    ${mainThemeAudioON && 'cursor-none'} ${!retroScreenOn && 'shuttingOffAnimation'}`} id='screen' >
        {/* ${mainThemeAudioON && 'turningOnAnimation cursor-none'} */}

        {retroScreenOn ? // Necessary for the shutdown effect, hides elements of the screen

          <>
            {mainThemeAudioON && <PacManGhosts />}
            <audio ref={mainThemeAudioRef} src="/audio/main-song.mp3"></audio>

            <div className={`h-full w-full absolute`} >

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
                    <AnimatedTyping
                      cursorStyle={'inline-block w-[6px] h-[3rem] bg-retroScreen-txtcolor ml-[3px] animate-blink align-middle mb-3 mr-1'}
                      stop={!retroScreenOn}
                      textStyle={`bg-retroScreen-txtcolor py-3 text-4xl font-main`} />
                  </div>
                  <div>
                    <ul className='list-inside list-square'>
                      <li> Full Stack Developer </li>
                      <li className='mt-2'> Specialization in GIS </li>
                    </ul>
                  </div>
                </div>


                {/* xportas logo image */}
                <div className='flex flex-1 justify-center content-center'>
                  <PixelatedImage
                    src="/images/xportas-logo.webp"
                    blockSize={100}
                    className='img-blur rounded-full h-full mt-10 animate-rotation'
                  />
                </div>
              </div>


              <LangSelector setCurrentLanguage={setCurrentLanguage} setRetroScreenOn={setRetroScreenOn} />
            </div>

            {/* CTR noise */}
            <div
              className={`h-full w-full z-30 relative animate-crtScreen ${retroScreenOn ? 'opacity-45' : 'opacity-0'}`}
              id='crt-noise'
              style={{ background: `linear-gradient(to bottom, transparent, #aaa4, #8881, #6664, #4445, #2228, #4443, transparent), repeating-linear-gradient(transparent 0 2px, #25242950 2px 4px)` }}>
            </div>
          </>

          :

          <>
            <div className={`${!retroScreenOn ? 'bg-white fixed inset-0 z-[999]' : ''}`} ></div>
          </>
        }
      </div>
    </div>
  );
}