'use client';
import { useState } from 'react';
import { waitForMs } from '../utils/utils';

export default function RetroBtn({ child, darkTheme, download, effect, href, rel, style, styles, target }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = async () => {
    setIsClicked(true);
    effect && effect();
    await waitForMs(70);
    setIsClicked(false);
  };

  return (
    <a
      className={`border-2 border-solid transition ease-in no-count ${styles}
        ${darkTheme ? 'bg-orange-200 border-main-gray shadow-custom-dark-theme' : 'bg-main-gray border-orange-200 shadow-custom'}
        ${!isClicked ? 'hover:shadow-custom-hover hover:-translate-y-1 hover:scale-105' : ''}
      `}
      style={style}
      href={href}
      download={download}
      onMouseDown={() => setIsClicked(true)}
      onMouseUp={() => setIsClicked(false)}
      onMouseLeave={() => setIsClicked(false)}
      onClick={handleClick}
      target={target}
      rel={rel}
    >
      {child}
    </a>
  );
}
