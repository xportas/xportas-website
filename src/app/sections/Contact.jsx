import { useEffect, useRef, useState } from 'react';
import RetroBtn from '../components/RetroBtn';
import { personalData } from '../utils/config';

export default function Contact() {
  const contactRef = useRef(null);
  const [rendered, setRendered] = useState(false);


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !rendered) {
          setRendered(true);
          observer.disconnect(); // Disconnects the observer after the first intersection
        }
      },
      { threshold: 0.05 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.disconnect();
      }
    };
  }, [rendered]);

  return (
    <section
      ref={contactRef}
      style={{ '--dynamic-font-size': '-short-heading' }}
      className={`block text-center max-w-[600px] mx-auto max-[450px]:py-14 max-[768px]:py-20 md:py-24 numbered transition-all duration-500 ease-in 
                  ${rendered ? 'opacity-100 blur-0' : 'opacity-0 blur-md'}`}
      id='contact'
    >
      <h3>
        What’s Next?
      </h3>
      <h2 className="font-header text-regular-heading">
        Get In Touch
      </h2>
      <p className='mt-6 mb-12'>
        Although I’m not currently looking for any new opportunities, my inbox is always open.
        Whether you have a question or just want to say hi, I’ll try my best to get back to you!
      </p>
      <div className='flex justify-center relative'>
        <RetroBtn
          styles={'px-6 py-4'}
          darkTheme={false}
          href={`mailto:${personalData.email}`}
          child={<span className='text-orange-200'>Say Hello</span>}
        />
      </div>
    </section>
  );
}