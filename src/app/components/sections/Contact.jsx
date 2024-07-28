'use client';
import { email } from '../../utils/config';
import RetroBtn from '../RetroBtn';

export default function Contact() {




  return (
    <section
      className="max-w-[600px] mx-auto mb-12 text-center md:mb-24 block numbered" >
      <h3>
        What’s Next?
      </h3>
      <h2 className="text-clamp-title">
        Get In Touch
      </h2>
      <p className='mt-6 mb-12'>
        Although I’m not currently looking for any new opportunities, my inbox is always open.
        Whether you have a question or just want to say hi, I’ll try my best to get back to you!
      </p>
      <RetroBtn
      styles={'px-6 py-4'}
      darkTheme={false}
      href={`mailto:${email}`}
      child={<span className='text-orange-200'>Say Hello</span>}
      />
    </section>
  );
}