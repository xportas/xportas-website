export const languageOptions = [
  { value: 'en', flag: 'https://hatscripts.github.io/circle-flags/flags/uk.svg', level: 'B2' },
  { value: 'es', flag: 'https://hatscripts.github.io/circle-flags/flags/es.svg', level: 'C2' },
  { value: 'pt', flag: 'https://hatscripts.github.io/circle-flags/flags/pt.svg', level: 'C1' },
  { value: 'gz', flag: './images/gz.svg', level: 'C2' }
];

export function waitForMs(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const underlineEffect = `inline-block 
                                relative 
                                transition-all 
                                duration-300 
                                before:content-[''] 
                                before:absolute 
                                before:-bottom-0 
                                before:left-0 
                                before:w-0 
                                before:h-0.5
                                before:transition-all 
                                before:duration-300 
                                hover:before:w-full
                                before:bg-secondary-orange`;

export const dashedLine =  `after:content-['']
                            after:block
                            after:w-[300px]
                            after:my-auto
                            after:ml-7
                            after:border-2
                            after:border-dashed
                            after:border-main-gray`;

export const linkStyle = `inline-block no-underline text-inherit relative transition-all duration-300
                          hover:text-secondary-orange hover:outline-0
                          focus:text-secondary-orange focus:outline-0`;