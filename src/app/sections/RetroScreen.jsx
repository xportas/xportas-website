'use client';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from "react-i18next";
import AnimatedTyping from '../components/AnimatedTyping';
import LangSelector from '../components/LangSelector';
import PacManGhosts from '../components/PacManGhosts';
import { PixelatedImage } from '../components/PixelatedImage';
import PowerOnBtn from '../components/PowerOnBtn';
import { waitForMs } from '../utils/utils';



export default function RetroScreen({ i18n, currentLanguage, setCurrentLanguage, screenWidth, isTouchDevice }) {

  const { t } = useTranslation(['strings']);
  const mainThemeAudioRef = useRef(null);
  const pcTurnOnNoiseRef = useRef(null);
  const pcNoiseRef = useRef(null);
  const pcShutdownNoiseRef = useRef(null);
  const [retroScreenOn, setRetroScreenOn] = useState(true);
  const [anySoundON, setAnySoundON] = useState(false);
  const [soundElements, setSoundElements] = useState(null);


  // Sounds effects
  useEffect(() => {
    setSoundElements({ mainTheme: mainThemeAudioRef.current, pcTurnOn: pcTurnOnNoiseRef.current, pcNoise: pcNoiseRef.current, pcShutdown: pcShutdownNoiseRef.current });
  }, []);

  useEffect(() => {
    if (soundElements) {
      soundElements.pcNoise.pause();
      soundElements.pcShutdown.play();
    }
  }, [currentLanguage]);


  const handleTurningOnWeb = () => {
    if (soundElements)
      soundElements.pcTurnOn.play()
                            .then(async () => await waitForMs(300))
                            .then(() => setAnySoundON(true))
                            .then(async () => await waitForMs(1700))
                            .then(() => soundElements.pcNoise.play());
  };


  return (
    <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center'>

      {/* PowerOnBtn --> "turning ON" the web */}
      {!anySoundON && (
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black z-50">
          <PowerOnBtn handleStartMainThemeAudio={handleTurningOnWeb} />
        </div>
      )}

      <div className={`h-screen w-screen m-0 p-0 bg-[url('/images/retro-bg.jpg')] bg-fixed bg-cover bg-center relative text-retroScreen-txtcolor
                    before:content-[''] before:absolute before:bg-[rgba(20,14,8,0.4)] before:z-[1] before:inset-0 ${anySoundON && 'cursor-none'}`}
        id='screen'>

        {(anySoundON && !isTouchDevice) && <PacManGhosts />}
        <audio ref={mainThemeAudioRef} src="/audio/main-song.mp3" />
        <audio ref={pcNoiseRef} src="/audio/old-pc.mp3" loop />
        <audio ref={pcShutdownNoiseRef} src="/audio/pc-shutdown.mp3" />
        <audio ref={pcTurnOnNoiseRef} src="/audio/pc-turnon.mp3" />

        <div className={`h-full w-full absolute`} >

          {/* Hero */}
          <div className='flex min-[1090px]:h-3/5 max-w-6xl m-auto'>
            <div className='flex flex-col justify-center content-center space-y-8 font-header py-10 px-4 sm:py-16 sm:px-10 md:py-20 md:px-16 lg:py-20 lg:pl-20 w-full md:w-3/4 lg:w-1/2'>
              <div className='max-[767px]:flex max-[767px]:justify-center'>
                <p className='text-xl min-[600px]:text-2xl md:text-3xl'>
                  {t('RETRO_SCREEN.GREETING')}
                </p>
              </div>
              <div className='inline-block justify-center text-retroScreen-bgcolor max-[767px]:m-auto'>
                <span className='bg-retroScreen-txtcolor py-2 sm:py-3 text-2xl min-[600px]:text-3xl md:text-4xl font-main'>
                  {t('RETRO_SCREEN.I_AM')}
                </span>
                <AnimatedTyping
                  cursorStyle={'inline-block w-[4px] h-[2rem] sm:w-[5px] sm:h-[2.5rem] md:w-[6px] md:h-[3rem] bg-retroScreen-txtcolor ml-[2px] sm:ml-[3px] animate-blink align-middle mb-2 sm:mb-3 mr-1'}
                  stop={!retroScreenOn}
                  textStyle={`bg-retroScreen-txtcolor py-2 sm:py-3 text-2xl min-[600px]:text-3xl md:text-4xl font-main`} />
              </div>
              <div className='max-[767px]:flex max-[767px]:justify-center'>
                <ul className='list-inside list-square text-sm min-[600px]:text-base md:text-lg'>
                  <li> {t('RETRO_SCREEN.FSDEV')} </li>
                  <li className='mt-2'> {t('RETRO_SCREEN.GIS_SPEC')} </li>
                </ul>
              </div>
            </div>


            {/* xportas logo image */}
            <div className='flex flex-1 justify-center items-center'>
              <PixelatedImage
                src="/images/xportas-logo.webp"
                blockSize={100}
                className='img-blur rounded-full h-24 min-[1090px]:h-full min-[1090px]:mt-10 animate-rotation'
              />
            </div>
          </div>


          <LangSelector i18n={i18n} setCurrentLanguage={setCurrentLanguage} setRetroScreenOn={setRetroScreenOn} screenWidth={screenWidth} />
        </div>

        {/* CTR noise */}
        {!isTouchDevice &&
          <div
            className={`h-full w-full z-30 relative animate-crtScreen ${retroScreenOn ? 'opacity-45' : 'opacity-0'}`}
            id='crt-noise'
            style={{ background: `linear-gradient(to bottom, transparent, #aaa4, #8881, #6664, #4445, #2228, #4443, transparent), repeating-linear-gradient(transparent 0 2px, #25242950 2px 4px)` }}>
          </div>
        }
      </div>
    </div>
  );
}