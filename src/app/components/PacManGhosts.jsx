'use client';
import { useEffect, useRef, useState } from 'react';


export default function PacManGhosts() {
  const [weakGhosts, setWeakGhosts] = useState(false);
  const weakGhostRef = useRef(weakGhosts);
  const ghostsRef = useRef([]);
  const pacmanCursorRef = useRef(null);
  const animationFrameId = useRef(null);

  useEffect(() => {
    pacmanCursorRef.current = document.getElementById('pacman-cursor');
    ghostsRef.current = Array.from(document.querySelectorAll('.ghost'));

    const safetyMargin = 15;

    const handleMouseMove = (e) => {
      if (animationFrameId.current) return;

      animationFrameId.current = requestAnimationFrame(() => {
        // Pac-Man movement
        if (pacmanCursorRef.current) {
          pacmanCursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
          pacmanCursorRef.current.classList.remove('hidden');
        }

        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        ghostsRef.current.forEach((ghost, index) => {
          ghost.classList.remove('hidden');

          setTimeout(() => {
            let offsetX, offsetY;
            const ghostRect = ghost.getBoundingClientRect();

            if (weakGhostRef.current) {
              const ghostCenterX = ghostRect.left + ghostRect.width / 2;
              const ghostCenterY = ghostRect.top + ghostRect.height / 2;
              const directionX = ghostCenterX - e.clientX;
              const directionY = ghostCenterY - e.clientY;
              offsetX = ghostCenterX + directionX;
              offsetY = ghostCenterY + directionY;
            } else {
              // Ghosts chase the cursor
              offsetX = e.clientX;
              offsetY = e.clientY;
            }

            // Limit to prevent them from moving completely to the edges.
            offsetX = Math.max(safetyMargin, Math.min(windowWidth - ghostRect.width - safetyMargin, offsetX));
            offsetY = Math.max(safetyMargin, Math.min(windowHeight - ghostRect.height - safetyMargin, offsetY));

            ghost.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
            ghost.style.transition = 'transform 0.7s linear';
          }, index * 200); // Delay to create the dragging effect
        });

        animationFrameId.current = null;
      });
    };

    const weakenTheGhosts = () => {
      setWeakGhosts((prev) => {
        const newVal = !prev;
        weakGhostRef.current = newVal;
        return newVal;
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('click', weakenTheGhosts);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('click', weakenTheGhosts);
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
    };
  }, []);

  return (
    <>
      <div
        id="pacman-cursor"
        className="hidden absolute w-9 h-9 z-20 pointer-events-none"
        style={{ backgroundImage: 'url(./images/pacman.svg)', backgroundSize: 'cover' }}
      />

      <img id="g-red"
        src={weakGhosts ? "./images/blue-ghost.svg" : "./images/red-ghost.svg"}
        className="ghost hidden absolute w-9 h-9 pointer-events-none transition-transform duration-75 z-10"
      />
      <img id="g-cian"
        src={weakGhosts ? "./images/blue-ghost.svg" : "./images/cian-ghost.svg"}
        className="ghost hidden absolute w-9 h-9 pointer-events-none transition-transform duration-75 z-10"
      />
      <img id="g-pink"
        src={weakGhosts ? "./images/blue-ghost.svg" : "./images/pink-ghost.svg"}
        className="ghost hidden absolute w-9 h-9 pointer-events-none transition-transform duration-75 z-10"
      />
    </>
  );
}
