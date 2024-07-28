'use client';
import { links } from '../../utils/config';
import RetroBtn from '../RetroBtn';

export default function Hero() {


  return (
    <section
      className='flex flex-col items-start min-h-screen p-0'
    >
      <h3>Hi, my name is</h3>
      <h1 className="text-big-heading">
        Xabier Portas
      </h1>
      <h2 className="text-big-heading">
        I build things for the web.
      </h2>
      <p>
        I am a passionate full-stack software engineer dedicated to crafting exceptional digital products. I thrive on building robust backend architectures and developing intuitive user interfaces. Currently, I am focused on contributing to the Government of Navarra by developing innovative digital solutions at{' '}
        <a href="https://itracasa.es/" target="_blank" rel="noreferrer">
          Tracasa Instrumental
        </a>
        .
      </p>
      <RetroBtn
        href={links.LinkedIn}
        target="_blank"
        rel="author"
        child={'Check out my (TO THINK: LinkedIn or GitHub)!'}
      />
    </section>
  );
}