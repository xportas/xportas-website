import { useEffect } from 'react';

export default function PacManGhosts() {

  useEffect(() => {
    const handleMouseMove = (e) => {
      const ghosts = document.querySelectorAll('.ghost');
      ghosts.forEach((g, index) => {
        setTimeout(() => {
          g.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
          g.style.transition = 'transform 0.5s linear';
        }, index * 200); // Delay each ghost slightly for a trailing effect
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className='p-0 m-0' style={{ cursor: 'url("./images/pacman.svg"), auto' }}>
      <img id="g-red" src="./images/red-ghost.svg" className="ghost absolute w-9 h-9 pointer-events-none transition-transform duration-75 z-30"></img>
      <img id="g-cian" src="./images/cian-ghost.svg" className="ghost absolute w-9 h-9 pointer-events-none transition-transform duration-75 z-30"></img>
      <img id="g-pink" src="./images/pink-ghost.svg" className="ghost absolute w-9 h-9 pointer-events-none transition-transform duration-75 z-30"></img>
    </div>
  )
}