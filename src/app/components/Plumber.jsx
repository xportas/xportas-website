export default function Plumber() {

  /*
  *
  *   The span tag is an adaptation of a component from the CSSLoaders repository ( https://cssloaders.github.io/ ).
  *   Thanks @VineethTR for contributing selflessly to the free and open source community with these amazing components.
  *   If you want to visit more of his work, visit his GitHub on ( https://github.com/vineethtrv )
  * 
  * 
  * 
  *   For this component I had created an svg that was meant to get a laugh and have a funny moment, but I was afraid it would become too casual or in bad taste.
  *   If you are reading this, congratulations, you have discovered one of my EasterEggs hidden on the web.
  *   Comment on the “span” tag and uncomment the image to see what the original idea was.
  * 
  */

  return (
    <div className="flex items-center justify-center flex-col">
      {/* <img src="/images/plumber.svg" alt="plumber-working" className="p-0 m-0 h-60" /> */}
      <span class="w-[60px] h-10 relative inline-block before:content-[''] before:absolute before:w-9 before:h-9 before:bg-main-gray 
      before:bg-[radial-gradient(circle_8px_at_18px_18px,var(--base-color)_100%,transparent_0),radial-gradient(circle_4px_at_18px_0px,var(--base-color)_100%,transparent_0),radial-gradient(circle_4px_at_0px_18px,var(--base-color)_100%,transparent_0),radial-gradient(circle_4px_at_36px_18px,var(--base-color)_100%,transparent_0),radial-gradient(circle_4px_at_18px_36px,var(--base-color)_100%,transparent_0),radial-gradient(circle_4px_at_30px_5px,var(--base-color)_100%,transparent_0),radial-gradient(circle_4px_at_30px_5px,var(--base-color)_100%,transparent_0),radial-gradient(circle_4px_at_30px_30px,var(--base-color)_100%,transparent_0),radial-gradient(circle_4px_at_5px_30px,var(--base-color)_100%,transparent_0),radial-gradient(circle_4px_at_5px_5px,var(--base-color)_100%,transparent_0)]
      before:bg-no-repeat 
      before:box-border 
      before:animate-[rotationLoader_3s_linear_infinite] 
      before:rounded-[50%] 
      before:left-0 
      before:top-0 after:content-['']
      after:absolute after:w-6 after:h-6 
      after:bg-main-gray 
      after:bg-[radial-gradient(circle_5px_at_12px_12px,var(--base-color)_100%,transparent_0),radial-gradient(circle_2.5px_at_12px_0px,var(--base-color)_100%,transparent_0),radial-gradient(circle_2.5px_at_0px_12px,var(--base-color)_100%,transparent_0),radial-gradient(circle_2.5px_at_24px_12px,var(--base-color)_100%,transparent_0),radial-gradient(circle_2.5px_at_12px_24px,var(--base-color)_100%,transparent_0),radial-gradient(circle_2.5px_at_20px_3px,var(--base-color)_100%,transparent_0),radial-gradient(circle_2.5px_at_20px_3px,var(--base-color)_100%,transparent_0),radial-gradient(circle_2.5px_at_20px_20px,var(--base-color)_100%,transparent_0),radial-gradient(circle_2.5px_at_3px_20px,var(--base-color)_100%,transparent_0),radial-gradient(circle_2.5px_at_3px_3px,var(--base-color)_100%,transparent_0)] 
      after:bg-no-repeat 
      after:box-border 
      after:animate-[rotationLoader_4s_linear_infinite_reverse] 
      after:rounded-[50%] 
      after:left-[35px] 
      after:top-[15px]"
      style={{ '--base-color': '#FED7AA'}}></span>
      <span className="text-[clamp(10px,2.5vw,18px)] font-header whitespace-nowrap">* Working on new projects *</span>
    </div>
  );
}