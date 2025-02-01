'use client';
import { useEffect, useRef } from 'react';
import { waitForMs } from '../utils/utils';


export default function AnimatedTyping({ cursorStyle, stop, textStyle, str1, str2 }) {
  const typedNameOrAlias = useRef(null);

  useEffect(() => {
    let isMounted = true;
    const asyncTypeTextLoop = async () => {
      while (isMounted && !stop) {
        await typeString(str1, typedNameOrAlias);
        await waitForMs(2000);
        if (!isMounted) break;
        await deleteString(typedNameOrAlias);
        if (str2) {
          await typeString(str2, typedNameOrAlias);
          await waitForMs(2000);
          if (!isMounted) break;
          await deleteString(typedNameOrAlias);
        }
      }
    }
    asyncTypeTextLoop();
    return () => {
      isMounted = false;
    };
  }, []);

  async function typeString(sentence, eleRef, delay = 100) {
    const letters = sentence.split("");
    let i = 0;
    while (i < letters.length) {
      await waitForMs(delay);
      if (eleRef.current) {
        eleRef.current.innerHTML += letters[i];
      }
      ++i;
    }
  }

  async function deleteString(eleRef) {
    const letters = eleRef.current.innerHTML.split("");
    while (letters.length > 0) {
      await waitForMs(100);
      letters.pop();
      eleRef.current.innerHTML = letters?.join("");
    }
  }

  return (
    <>
      <span className={textStyle} ref={typedNameOrAlias} />
      <span className={cursorStyle} />
    </>
  );
}