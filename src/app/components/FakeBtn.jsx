'use client';
import { useState } from 'react';
import { waitForMs } from '../utils/utils';

export default function FakeBtn({ child, darkTheme, href, style, styles }) {

  const [hoverBtnsEffectDisabled, setHoverBtnsEffectDisabled] = useState(true);

  const handleClickOnNavBtns = async () => {
    setHoverBtnsEffectDisabled(false);
    await waitForMs(70);
    setHoverBtnsEffectDisabled(true);
  }


  return (
    <a
      className={`${styles} ${darkTheme ? `bg-orange-200 border-main-gray shadow-custom-dark-theme` : `bg-main-gray border-orange-200 shadow-custom`} border-solid border-2 transition ease-in-out ${hoverBtnsEffectDisabled ? (darkTheme ? 'hover:shadow-custom-hover-dark-theme' : 'hover:shadow-custom-hover') + ' hover:-translate-y-1 hover:scale-105' : ''} no-count`}
      style={style}
      href={href}
      onMouseDown={() => setHoverBtnsEffectDisabled(false)}
      onMouseUp={() => setHoverBtnsEffectDisabled(true)}
      onMouseLeave={() => setHoverBtnsEffectDisabled(true)}
      onClick={handleClickOnNavBtns} >
      {child}
    </a>
  );
}