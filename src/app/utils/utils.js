export const languageOptions = [
  { value: 'en', flag: 'https://hatscripts.github.io/circle-flags/flags/uk.svg', level: 'B2' },
  { value: 'es', flag: 'https://hatscripts.github.io/circle-flags/flags/es.svg', level: 'C2' },
  { value: 'pt', flag: 'https://hatscripts.github.io/circle-flags/flags/pt.svg', level: 'C1' },
  { value: 'gz', flag: './images/gz.svg', level: 'C2' }
];

export function waitForMs(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}