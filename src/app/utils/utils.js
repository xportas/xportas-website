export const languageOptions = [
  { value: 'en', flag: 'https://hatscripts.github.io/circle-flags/flags/uk.svg', level: 'B2' },
  { value: 'es', flag: 'https://hatscripts.github.io/circle-flags/flags/es.svg', level: 'C2' },
  { value: 'pt', flag: 'https://hatscripts.github.io/circle-flags/flags/pt.svg', level: 'C1' },
  { value: 'gz', flag: './images/gz.svg', level: 'C2' }
];

export function waitForMs(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const transition = `transition-all duration-[0.25s] ease-[cubic-bezier(0.645,0.045,0.355,1)]`;

export const dashedLine = `after:content-['']
                            after:block
                            after:w-[300px]
                            after:my-auto
                            after:ml-7
                            after:border-2
                            after:border-dashed
                            after:border-main-gray`;

export const inlineLink = `inline-block relative text-[green] transition-[${transition}] after:content-[''] after:block after:w-0 after:h-px
                            after:relative after:bg-green-400 after:opacity-50 after:bottom-[0.37em] motion-safe:after:transition-[${transition}]
                            hover:text-green-500 focus-visible:text-green-500 hover:after:w-full focus-visible:after:w-full`;
{/* TODO: todo hijo de inlineLink ==> hover: y focus-visible: hacer esto ==> text-green-500 transition-[export transition utils] */}

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