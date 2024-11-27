import { links, navLinks } from '../utils/config';

export default function Footer() {
  return (
    <div
      className='relative h-[500px]'
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className='fixed bottom-0 h-[500px] w-full bg-main-gray'>

        <div className='bg-main-gray text-orange-200 py-7 px-7 h-full w-full flex flex-col justify-between'>

          <div className='flex flex-shrink-0 gap-12 min-[550px]:gap-20 lg:gap-28 min-[800px]:ml-5 lg:ml-10 text-xs min-[480px]:text-sm min-[1375px]:text-base'>
            <div className='flex flex-col gap-2'>
              <h6 className='font-header mb-2 uppercase text-[#fcc688]'>Go Back</h6>
              <a href={navLinks.About} >About</a>
              <a href={navLinks.Experience} >Experience</a>
              <a href={navLinks.Work} >Work</a>
              <a href={navLinks.Contact} >Contact</a>
            </div>
            <div className='flex flex-col gap-2'>
              <h6 className='font-header mb-2 uppercase text-[#fcc688]'>More information</h6>
              <a href={links.ReadMe} target={"_blank"} >README.txt</a>
              <a href={links.License} target={"_blank"} >License ©</a>
              <a href={links.Repository} target={"_blank"} >Source Code</a>
              <a href={links.LinkedIn} target={"_blank"} >Contact me</a>
            </div>
          </div>

          <div className='flex justify-between items-end max-[823px]:flex-col max-[823px]:gap-7'>
            <h1 className='text-footer-name font-header leading-[0.8] text-[#ffca8e]'>Xabier Portas</h1>
            <p>Designed and Developed by xportas&nbsp;©&nbsp;copyright</p>
          </div>

        </div>

      </div>
    </div>
  )
}