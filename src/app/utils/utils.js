export const languageOptions = [
  { value: "en", flag: "https://hatscripts.github.io/circle-flags/flags/uk.svg", level: "B2" },
  { value: "es", flag: "https://hatscripts.github.io/circle-flags/flags/es.svg", level: "C2" },
  { value: "pt", flag: "https://hatscripts.github.io/circle-flags/flags/pt.svg", level: "C1" },
  { value: "gz", flag: "./images/gz.svg", level: "C2" }
];

export function waitForMs(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const icons = {
  MenuIcon: <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="SVGRepo_bgCarrier" strokeWidth="0" />
    <g id="SVGRepo_tracerCarrier" strokeLinecap="sharp" strokeLinejoin="sharp" />
    <g id="SVGRepo_iconCarrier">
      <path d="M4 6H20M4 12H20M4 18H20" stroke="#fed7aa" strokeWidth="3" strokeLinecap="sharp" strokeLinejoin="sharp" />
    </g>
  </svg>,

  DarkMenuIcon: <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="SVGRepo_bgCarrier" strokeWidth="0" />
    <g id="SVGRepo_tracerCarrier" strokeLinecap="sharp" strokeLinejoin="sharp" />
    <g id="SVGRepo_iconCarrier">
      <path d="M4 6H20M4 12H20M4 18H20" stroke="#525252" strokeWidth="3" strokeLinecap="sharp" strokeLinejoin="sharp" />
    </g>
  </svg>,

  LinkedInIcon: <svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="">
    <g id="SVGRepo_bgCarrier" strokeWidth="0" />
    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
    <g id="SVGRepo_iconCarrier">
      <path d="M18.72 3.99997H5.37C5.19793 3.99191 5.02595 4.01786 4.86392 4.07635C4.70189 4.13484 4.55299 4.22471 4.42573 4.34081C4.29848 4.45692 4.19537 4.59699 4.12232 4.75299C4.04927 4.909 4.0077 5.07788 4 5.24997V18.63C4.01008 18.9901 4.15766 19.3328 4.41243 19.5875C4.6672 19.8423 5.00984 19.9899 5.37 20H18.72C19.0701 19.9844 19.4002 19.8322 19.6395 19.5761C19.8788 19.32 20.0082 18.9804 20 18.63V5.24997C20.0029 5.08247 19.9715 4.91616 19.9078 4.76122C19.8441 4.60629 19.7494 4.466 19.6295 4.34895C19.5097 4.23191 19.3672 4.14059 19.2108 4.08058C19.0544 4.02057 18.8874 3.99314 18.72 3.99997ZM9 17.34H6.67V10.21H9V17.34ZM7.89 9.12997C7.72741 9.13564 7.5654 9.10762 7.41416 9.04768C7.26291 8.98774 7.12569 8.89717 7.01113 8.78166C6.89656 8.66615 6.80711 8.5282 6.74841 8.37647C6.6897 8.22474 6.66301 8.06251 6.67 7.89997C6.66281 7.73567 6.69004 7.57169 6.74995 7.41854C6.80986 7.26538 6.90112 7.12644 7.01787 7.01063C7.13463 6.89481 7.2743 6.80468 7.42793 6.74602C7.58157 6.68735 7.74577 6.66145 7.91 6.66997C8.07259 6.66431 8.2346 6.69232 8.38584 6.75226C8.53709 6.8122 8.67431 6.90277 8.78887 7.01828C8.90344 7.13379 8.99289 7.27174 9.05159 7.42347C9.1103 7.5752 9.13699 7.73743 9.13 7.89997C9.13719 8.06427 9.10996 8.22825 9.05005 8.3814C8.99014 8.53456 8.89888 8.6735 8.78213 8.78931C8.66537 8.90513 8.5257 8.99526 8.37207 9.05392C8.21843 9.11259 8.05423 9.13849 7.89 9.12997ZM17.34 17.34H15V13.44C15 12.51 14.67 11.87 13.84 11.87C13.5822 11.8722 13.3313 11.9541 13.1219 12.1045C12.9124 12.2549 12.7546 12.4664 12.67 12.71C12.605 12.8926 12.5778 13.0865 12.59 13.28V17.34H10.29V10.21H12.59V11.21C12.7945 10.8343 13.0988 10.5225 13.4694 10.3089C13.84 10.0954 14.2624 9.98848 14.69 9.99997C16.2 9.99997 17.34 11 17.34 13.13V17.34Z" fill="#fed7aa" /> </g>
  </svg>,

  DarkLinkedInIcon: <svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="">
    <g id="SVGRepo_bgCarrier" strokeWidth="0" />
    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
    <g id="SVGRepo_iconCarrier">
      <path d="M18.72 3.99997H5.37C5.19793 3.99191 5.02595 4.01786 4.86392 4.07635C4.70189 4.13484 4.55299 4.22471 4.42573 4.34081C4.29848 4.45692 4.19537 4.59699 4.12232 4.75299C4.04927 4.909 4.0077 5.07788 4 5.24997V18.63C4.01008 18.9901 4.15766 19.3328 4.41243 19.5875C4.6672 19.8423 5.00984 19.9899 5.37 20H18.72C19.0701 19.9844 19.4002 19.8322 19.6395 19.5761C19.8788 19.32 20.0082 18.9804 20 18.63V5.24997C20.0029 5.08247 19.9715 4.91616 19.9078 4.76122C19.8441 4.60629 19.7494 4.466 19.6295 4.34895C19.5097 4.23191 19.3672 4.14059 19.2108 4.08058C19.0544 4.02057 18.8874 3.99314 18.72 3.99997ZM9 17.34H6.67V10.21H9V17.34ZM7.89 9.12997C7.72741 9.13564 7.5654 9.10762 7.41416 9.04768C7.26291 8.98774 7.12569 8.89717 7.01113 8.78166C6.89656 8.66615 6.80711 8.5282 6.74841 8.37647C6.6897 8.22474 6.66301 8.06251 6.67 7.89997C6.66281 7.73567 6.69004 7.57169 6.74995 7.41854C6.80986 7.26538 6.90112 7.12644 7.01787 7.01063C7.13463 6.89481 7.2743 6.80468 7.42793 6.74602C7.58157 6.68735 7.74577 6.66145 7.91 6.66997C8.07259 6.66431 8.2346 6.69232 8.38584 6.75226C8.53709 6.8122 8.67431 6.90277 8.78887 7.01828C8.90344 7.13379 8.99289 7.27174 9.05159 7.42347C9.1103 7.5752 9.13699 7.73743 9.13 7.89997C9.13719 8.06427 9.10996 8.22825 9.05005 8.3814C8.99014 8.53456 8.89888 8.6735 8.78213 8.78931C8.66537 8.90513 8.5257 8.99526 8.37207 9.05392C8.21843 9.11259 8.05423 9.13849 7.89 9.12997ZM17.34 17.34H15V13.44C15 12.51 14.67 11.87 13.84 11.87C13.5822 11.8722 13.3313 11.9541 13.1219 12.1045C12.9124 12.2549 12.7546 12.4664 12.67 12.71C12.605 12.8926 12.5778 13.0865 12.59 13.28V17.34H10.29V10.21H12.59V11.21C12.7945 10.8343 13.0988 10.5225 13.4694 10.3089C13.84 10.0954 14.2624 9.98848 14.69 9.99997C16.2 9.99997 17.34 11 17.34 13.13V17.34Z" fill="#525252" /> </g>
  </svg>,

  GitHubIcon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000">
    <g stroke-width="0"></g>
    <g stroke-linecap="round" stroke-linejoin="round"></g>
    <g>
      <rect width="24" height="24" fill="none"></rect>
      <path d="M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z"></path> </g>
  </svg>,

  DarkGitHubIcon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000">
    <g stroke-width="0"></g>
    <g stroke-linecap="round" stroke-linejoin="round"></g>
    <g>
      <rect width="24" height="24" fill="none"></rect>
      <path d="M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z"></path> </g>
  </svg>,

  CVIcon: <svg width="35px" height="25px" xmlns="http://www.w3.org/2000/svg">
    <text className="font-header" x="50%" y="60%" textAnchor="middle" dominantBaseline="middle" fill="#fed7aa">CV</text>
  </svg>,

  DarkCVIcon: <svg width="35px" height="25px" xmlns="http://www.w3.org/2000/svg">
    <text className="font-header" x="50%" y="60%" textAnchor="middle" dominantBaseline="middle" fill="#525252">CV</text>
  </svg>,

  UnmutedIcon:  <svg fill="#FFAD36" width="64px" height="64px" xmlns="http://www.w3.org/2000/svg" stroke="#FFAD36" stroke-width="9.2"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="XMLID_51_"> <rect height="26.7" id="XMLID_52_" width="26.7" x="146.7" y="26.7"></rect> <rect height="26.7" id="XMLID_163_" width="26.7" x="120" y="53.3"></rect> <rect height="26.7" id="XMLID_164_" width="26.7" x="93.3" y="80"></rect> <path d="M93.3,240v-26.7v-26.7V160v-26.7v-26.7H66.7H40H13.3v26.7V160v26.7v26.7V240v26.7v26.7H40h26.7h26.7v-26.7 V240z M66.7,160v26.7v26.7V240v26.7H40V240v-26.7v-26.7V160v-26.7h26.7V160z" id="XMLID_167_"></path> <rect height="26.7" id="XMLID_168_" width="26.7" x="253.3" y="133.3"></rect> <rect height="26.7" id="XMLID_169_" width="26.7" x="360" y="133.3"></rect> <rect height="26.7" id="XMLID_170_" width="26.7" x="280" y="160"></rect> <rect height="26.7" id="XMLID_171_" width="26.7" x="333.3" y="160"></rect> <rect height="26.7" id="XMLID_172_" width="26.7" x="93.3" y="293.3"></rect> <rect height="26.7" id="XMLID_173_" width="26.7" x="306.7" y="186.7"></rect> <rect height="26.7" id="XMLID_174_" width="26.7" x="120" y="320"></rect> <rect height="26.7" id="XMLID_175_" width="26.7" x="280" y="213.3"></rect> <rect height="26.7" id="XMLID_176_" width="26.7" x="333.3" y="213.3"></rect> <rect height="26.7" id="XMLID_177_" width="26.7" x="146.7" y="346.7"></rect> <rect height="26.7" id="XMLID_178_" width="26.7" x="253.3" y="240"></rect> <rect height="26.7" id="XMLID_179_" width="26.7" x="360" y="240"></rect> <polygon id="XMLID_180_" points="173.3,0 173.3,26.7 200,26.7 200,53.3 200,80 200,106.7 200,133.3 200,160 200,186.7 200,213.3 200,240 200,266.7 200,293.3 200,320 200,346.7 200,373.3 173.3,373.3 173.3,400 200,400 226.7,400 226.7,373.3 226.7,346.7 226.7,320 226.7,293.3 226.7,266.7 226.7,240 226.7,213.3 226.7,186.7 226.7,160 226.7,133.3 226.7,106.7 226.7,80 226.7,53.3 226.7,26.7 226.7,0 200,0 "></polygon> </g> </g></svg>,

  MutedIcon: <svg fill="#FFAD36" width="400px" height="400px" xmlns="http://www.w3.org/2000/svg" stroke="#FFAD36" stroke-width="9.2">
    <g stroke-width="0" />
    <g stroke-linecap="round" stroke-linejoin="round" />
    <g>
      <g id="XMLID_51_">
        <rect height="26.7" id="XMLID_52_" width="26.7" x="146.7" y="26.7" />
        <rect height="26.7" id="XMLID_163_" width="26.7" x="120" y="53.3" />
        <rect height="26.7" id="XMLID_164_" width="26.7" x="93.3" y="80" />
        <path d="M93.3,240v-26.7v-26.7V160v-26.7v-26.7H66.7H40H13.3v26.7V160v26.7v26.7V240v26.7v26.7H40h26.7h26.7v-26.7 V240z M66.7,160v26.7v26.7V240v26.7H40V240v-26.7v-26.7V160v-26.7h26.7V160z" id="XMLID_167_" />
        <rect height="26.7" id="XMLID_168_" width="26.7" x="253.3" y="133.3" />
        <rect height="26.7" id="XMLID_169_" width="26.7" x="360" y="133.3" />
        <rect height="26.7" id="XMLID_170_" width="26.7" x="280" y="160" />
        <rect height="26.7" id="XMLID_171_" width="26.7" x="333.3" y="160" />
        <rect height="26.7" id="XMLID_172_" width="26.7" x="93.3" y="293.3" />
        <rect height="26.7" id="XMLID_173_" width="26.7" x="306.7" y="186.7" />
        <rect height="26.7" id="XMLID_174_" width="26.7" x="120" y="320" />
        <rect height="26.7" id="XMLID_175_" width="26.7" x="280" y="213.3" />
        <rect height="26.7" id="XMLID_176_" width="26.7" x="333.3" y="213.3" />
        <rect height="26.7" id="XMLID_177_" width="26.7" x="146.7" y="346.7" />
        <rect height="26.7" id="XMLID_178_" width="26.7" x="253.3" y="240" />
        <rect height="26.7" id="XMLID_179_" width="26.7" x="360" y="240" />
        <polygon id="XMLID_180_" points="173.3,0 173.3,26.7 200,26.7 200,53.3 200,80 200,106.7 200,133.3 200,160 200,186.7 200,213.3 200,240 200,266.7 200,293.3 200,320 200,346.7 200,373.3 173.3,373.3 173.3,400 200,400 226.7,400 226.7,373.3 226.7,346.7 226.7,320 226.7,293.3 226.7,266.7 226.7,240 226.7,213.3 226.7,186.7 226.7,160 226.7,133.3 226.7,106.7 226.7,80 226.7,53.3 226.7,26.7 226.7,0 200,0 " />
      </g>
    </g>
  </svg>
}