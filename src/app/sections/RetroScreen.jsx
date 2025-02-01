'use client';
import { useEffect, useRef, useState } from 'react';
import LangSelector from '../components/LangSelector';
import PacManGhosts from '../components/PacManGhosts';
import { PixelatedImage } from '../components/PixelatedImage';
import PowerOnBtn from '../components/PowerOnBtn';
import RetroHero from '../components/RetroHero';
import { icons, waitForMs } from '../utils/utils';


export default function RetroScreen({ i18n, currentLanguage, setCurrentLanguage, screenWidth, isTouchDevice }) {

  const mainThemeAudioRef = useRef(null);
  const pcTurnOnNoiseRef = useRef(null);
  const pcNoiseRef = useRef(null);
  const pcShutdownNoiseRef = useRef(null);
  const [retroScreenOn, setRetroScreenOn] = useState(true);
  const [anySoundON, setAnySoundON] = useState(false);
  const [soundElements, setSoundElements] = useState(null);
  const [turningONanimation, setTurningONanimation] = useState(false);
  const [muted, setMuted] = useState(true);


  // SOUNDS EFFECTS
  useEffect(() => {
    setSoundElements({ mainTheme: mainThemeAudioRef.current, pcTurnOn: pcTurnOnNoiseRef.current, pcNoise: pcNoiseRef.current, pcShutdown: pcShutdownNoiseRef.current });

    const muteUnmuteMainTheme = async (event) => {
      if (event.key === 'm')
        setMuted(prevMuted => !prevMuted);
    }

    window.addEventListener('keydown', muteUnmuteMainTheme)

    return () => {
      window.removeEventListener('keydown', muteUnmuteMainTheme);
    };
  }, []);

  useEffect(() => {
    if (turningONanimation) {
      if (muted) soundElements.mainTheme.pause();
      else soundElements.mainTheme.play();
    }
  }, [muted]);

  useEffect(() => {
    if (soundElements) {
      soundElements.pcNoise.pause();
      soundElements.pcShutdown.play();
    }
  }, [currentLanguage]);


  const handleTurningOnWeb = async () => {
    if (soundElements)
      soundElements.pcTurnOn.play()
        .then(async () => await waitForMs(300))
        .then(() => setAnySoundON(true))
        .then(async () => await waitForMs(1700))
        .then(() => soundElements.pcNoise.play());
    await waitForMs(150).then(() => setTurningONanimation(true));
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
        <audio ref={mainThemeAudioRef} src="/audio/main-song.mp3" loop />
        <audio ref={pcNoiseRef} src="/audio/old-pc.mp3" loop />
        <audio ref={pcShutdownNoiseRef} src="/audio/pc-shutdown.mp3" />
        <audio ref={pcTurnOnNoiseRef} src="/audio/pc-turnon.mp3" />

        <div className={`h-full w-full absolute`} >
          <div className='flex min-[1090px]:h-3/5 max-w-6xl m-auto'>

            <RetroHero retroScreenOn={retroScreenOn} />

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
            style={{ background: `linear-gradient(to bottom, transparent, #aaa4, #8881, #6664, #4445, #2228, #4443, transparent), repeating-linear-gradient(transparent 0 2px, #25242950 2px 4px)` }}
          />
        }

        {/* TurningON animation */}
        {turningONanimation && <div className='bg-white fixed inset-0 z-[999] animate-turnOnAnimation' />}

      </div>
    </div>
  );
}