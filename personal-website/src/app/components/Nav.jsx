import Image from "next/image";


export default function Nav() {
  return (
    <header>
      <nav className="bg-black fixed p-10 top-3 left-3 flex gap-0 transition-all duration-700 z-10 justify-between pointer-events-none">
        <button type="button" >
          <Image src='/images/menu.svg' layout="fill" objectFit="contain" />
        </button>
      </nav>
    </header>
  );
}