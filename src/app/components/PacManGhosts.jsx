'use client';
import { useEffect, useState } from 'react';

export default function PacManGhosts() {
  const [weakGhosts, setWeakGhosts] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const ghosts = document.querySelectorAll('.ghost');
      const pacmanCursor = document.getElementById('pacman-cursor');
      const safetyMargin = 15;

      // Pac-Man movement
      if (pacmanCursor) {
        pacmanCursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        pacmanCursor.classList.remove('hidden');
      }

      ghosts.forEach((g, index) => {
        g.classList.remove('hidden');
        setTimeout(() => {
          let offsetX, offsetY;

          if (weakGhosts) {
            // Ghosts escape, go in the opposite direction of the cursor.
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;

            const ghostRect = g.getBoundingClientRect();
            const ghostCenterX = ghostRect.left + ghostRect.width / 2;
            const ghostCenterY = ghostRect.top + ghostRect.height / 2;

            const directionX = ghostCenterX - e.clientX;
            const directionY = ghostCenterY - e.clientY;

            // Calculates the new position by escaping from the cursor
            offsetX = ghostCenterX + directionX;
            offsetY = ghostCenterY + directionY;

            // Limiting to avoid edges and corners
            offsetX = Math.max(safetyMargin, Math.min(windowWidth - ghostRect.width - safetyMargin, offsetX));
            offsetY = Math.max(safetyMargin, Math.min(windowHeight - ghostRect.height - safetyMargin, offsetY));

          } else {
            // Ghosts chase the cursor
            offsetX = e.clientX;
            offsetY = e.clientY;

            // Limit to prevent them from moving completely to the edges.
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;
            const ghostRect = g.getBoundingClientRect();
            offsetX = Math.max(safetyMargin, Math.min(windowWidth - ghostRect.width - safetyMargin, offsetX));
            offsetY = Math.max(safetyMargin, Math.min(windowHeight - ghostRect.height - safetyMargin, offsetY));
          }

          g.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
          g.style.transition = 'transform 0.7s linear';
        }, index * 200); // Delay to create the dragging effect
      });
    };

    const weakenTheGhosts = () => setWeakGhosts(!weakGhosts);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('click', weakenTheGhosts);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('click', weakenTheGhosts);
    };
  }, [weakGhosts]);

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
