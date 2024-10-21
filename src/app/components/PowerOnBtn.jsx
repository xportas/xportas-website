

export default function PowerOnBtn({ handleStartMainThemeAudio }) {
  return (
    <button
      className="group appearance-none relative min-w-[5em] box-border cursor-retroPointer pt-0 pb-3 px-2 border-0"
      style={{ background: 'transparent', font: 'inherit', WebkitAppearance: 'none' }}
      onClick={() => handleStartMainThemeAudio()}
    >

      <div className="flex items-center justify-center relative z-0 translate-y-0 text-center text-white transition-transform duration-[0.2s] select-none px-4 py-2 
                      after:content-[''] after:absolute after:z-[-1] after:rounded after:w-full after:h-full after:box-content after:bg-[radial-gradient(#cd3f64,#9d3656)] 
                      after:text-center after:text-white after:shadow-[inset_0_0_0px_1px_rgba(255,255,255,0.2),0_1px_2px_1px_rgba(255,255,255,0.2)] 
                      after:transition-[border-radius,padding,width,transform] after:duration-[0.2s] 
                      group-active:translate-y-1.5 group-active:after:px-0.5 group-active:after:py-0 group-active:after:rounded-md"
        style={{ textShadow: '0 -1px rgba(0, 0, 0, 0.25)', WebkitUserSelect: 'none' }}>

        <img
          src="./images/shutdown-icon.svg"
          alt="arrow-keys"
          width={20}
        />

      </div>

      <div className="absolute z-[-1] w-[calc(100%_-_8px)] h-[calc(100%_-_10px)] box-content bg-[#803] 
                      bg-[radial-gradient(4px_8px_at_4px_calc(100%_-_8px),rgba(255,255,255,0.25),transparent),radial-gradient(4px_8px_at_calc(100%_-_4px)_calc(100%_-_8px),rgba(255,255,255,0.25),transparent),
                      radial-gradient(16px_at_-4px_0,white,transparent),radial-gradient(16px_at_calc(100%_+_4px)_0,white,transparent)] 
                      shadow-[0px_2px_3px_0px_rgba(0,0,0,0.5),inset_0_-1px_3px_3px_rgba(0,0,0,0.4)] transition-[border-radius,padding-top] duration-[0.2s] 
                      pt-1.5 rounded-[8px_/_16px_16px_8px_8px] left-1 bottom-1 group-active:pt-0 group-active:rounded-[10px_10px_8px_8px_/_8px]"></div>

      <div className="absolute z-[-2] w-full h-[calc(100%_-_4px)] bg-[rgba(0,0,0,0.15)] rounded-xl left-0 top-1 
                      shadow-[0_1px_1px_0_rgba(255,255,255,0.75),inset_0_2px_2px_rgba(0,0,0,0.25)]"></div>

    </button>
  )
}