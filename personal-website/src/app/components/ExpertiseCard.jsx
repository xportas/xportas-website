import Image from "next/image";

export default function ExpertiseCard() {
  return (
    <article
      className=" m-10     border-solid border-2 border-[#525252] p-9 shadow-custom transition ease-in-out hover:shadow-custom-hover hover:-translate-y-1 hover:scale-105 overflow-hidden ">

      <div className="grid grid-cols-4 gap-4">
        <div className="relative w-full col-span-1 flex justify-center items-stretch">
          <Image src="/images/react.svg" layout="fill" objectFit="contain" />
        </div>
        <div className="relative w-full col-span-3">
          <span className="">Software Developer</span><br/>.NET, React
        </div>
      </div>

      <div className="mt-2">
        <span>&lt; h3 &gt;</span>
        <div className="border-l-2 border-[#525252] border-dashed p-1 ml-5 pl-5">Experienced in both functional and OOP: Dart,
          Python, Java,
          JavaScript, TypeScript.</div>
        <span>&lt; h3 &gt;</span>
      </div>

    </article>);
}