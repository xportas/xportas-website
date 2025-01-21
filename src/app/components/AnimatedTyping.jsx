'use client';
import { useEffect, useRef } from 'react';
import { personalData } from '../utils/config';
import { waitForMs } from '../utils/utils';


export default function AnimatedTyping({ cursorStyle, stop, textStyle }) {
  const typedNameOrAlias = useRef(null);

  useEffect(() => {
    let isMounted = true;
    const asyncTypeNameLoop = async () => {
      while (isMounted && !stop) {
        await typeString(personalData.name, typedNameOrAlias);
        await waitForMs(2000);
        if (!isMounted) break;
        await deleteString(typedNameOrAlias);
        await typeString(personalData.alias, typedNameOrAlias);
        await waitForMs(2000);
        if (!isMounted) break;
        await deleteString(typedNameOrAlias);
      }
    }
    asyncTypeNameLoop();
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