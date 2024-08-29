export function waitForMs(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const underlineEffect = `inline-block 
                                relative 
                                transition-all 
                                duration-500 
                                before:content-[''] 
                                before:absolute 
                                before:-bottom-0 
                                before:left-0 
                                before:w-0 
                                before:h-0.5 
                                before:opacity-0 
                                before:transition-all 
                                before:duration-500 
                                hover:before:w-full 
                                hover:before:opacity-100`;