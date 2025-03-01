'use client';
import AnimatedTyping from "./AnimatedTyping";
import { useTranslation } from "react-i18next";

export default function ModernDeviceWarning({ closeMDWarning, handleAcceptMDWarning }) {
  const { t } = useTranslation(['strings']);

  return (
    <div className={`fixed top-0 left-0 w-full h-full bg-black z-[9999] transition-opacity duration-700 ${closeMDWarning ? "opacity-0" : "opacity-100"}`}>
      <div className="absolute top-14 left-1/2 mt-20 text-start -translate-x-1/2 text-white">
        <div className="w-80">
          <AnimatedTyping
            cursorStyle={`inline-block w-[4px] h-[1.5rem] sm:w-[5px] sm:h-[2.5rem] md:w-[6px] md:h-[3rem] bg-white 
                        ml-[2px] sm:ml-[3px] animate-blink align-middle mb-2 sm:mb-3 mr-1`}
            textStyle={`py-2 sm:py-3 text-lg min-[600px]:text-3xl md:text-4xl font-main`}
            strings={[
              '¡Bienvenid@ a los años 80!',
              'Estás a punto de viajar en el tiempo a una época donde los peinados eran más altos, los coches "fantásticos", y...',
              '¡los smartphones aún eran ciencia ficción!',
              'Si pretendes emprender este viaje desde tu dispositivo futurista',
              '¡toma nota!',
              'esta web tiene más detalles que la chaqueta de Michael Jackson, pero estos no entran en una pantalla tan pequeña...',
              'Para una experiencia más inmersiva, te sugerimos desempolvar tu viejo Commodore 64, o usar una pantalla más grande...',
              '¡Disfruta el viaje y que la nostalgia te acompañe!'
            ]}
            typingDelay={70} />
        </div>
      </div>
      <div className="absolute text- top-3/4 left-1/2 text-center -translate-x-1/2 -translate-y-1/2 text-white">
        <button
          className="bg-white text-black text-lg py-2 px-4 
                    hover:bg-black hover:text-white hover:border-2 hover:border-dashed hover:border-white"
          onClick={handleAcceptMDWarning}>
          {t('BTNS.ACCEPT')}
        </button>
      </div>
    </div>
  );
}