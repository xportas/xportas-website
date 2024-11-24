export const languageOptions = [
  { value: 'en', flag: 'https://hatscripts.github.io/circle-flags/flags/uk.svg', level: 'B2' },
  { value: 'es', flag: 'https://hatscripts.github.io/circle-flags/flags/es.svg', level: 'C2' },
  { value: 'pt', flag: 'https://hatscripts.github.io/circle-flags/flags/pt.svg', level: 'C1' },
  { value: 'gz', flag: './images/gz.svg', level: 'C2' }
];

export function waitForMs(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const dashedLine = `after:content-['']
                            after:block
                            after:relative
                            after:w-[300px]
                            after:h-px
                            after:ml-7;
                            after:my-auto
                            after:border-2
                            after:border-dashed
                            after:border-main-gray
                            after:max-[1080px]:w-[200px]
                            after:max-[768px]:w-full
                            after:min-[768px]:ml-3
                            after:max-[600px]:ml-3`;

export const linkStyle = `inline-block no-underline text-inherit relative transition-all duration-300
                          hover:text-secondary-orange hover:outline-0
                          focus:text-secondary-orange focus:outline-0`;

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