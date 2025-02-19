'use client';
import { useEffect, useRef } from 'react';
import { waitForMs } from '../utils/utils';


export default function AnimatedTyping({ cursorStyle, dontStop, textStyle, strings, typingDelay = 100 }) {
  const typedStr = useRef(null);

  useEffect(() => {
    let isMounted = true;
    const hasMultipleStrings = strings.length > 2;

    const asyncTypeTextLoop = async () => {
      let index = 0;
      while (isMounted && (dontStop || !(hasMultipleStrings && index === strings.length))) {
        await typeString(strings[index], typedStr, typingDelay);
        await waitForMs(2000);
        if (!isMounted || (hasMultipleStrings && index === strings.length - 1)) break;
        await deleteText(typedStr, hasMultipleStrings);
        index = (index + 1) % strings.length;
      }
    }
    asyncTypeTextLoop();
    return () => {
      isMounted = false;
    };
  }, []);

  const typeString = async (sentence, eleRef, delay) => {
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

  const deleteText = async (eleRef, instantDelete) => {
    if (instantDelete) {
      eleRef.current.innerHTML = "";
    } else {
      const letters = eleRef.current.innerHTML.split("");
      while (letters.length > 0) {
        await waitForMs(100);
        letters.pop();
        eleRef.current.innerHTML = letters.join("");
      }
    }
  }

  return (
    <>
      <span className={textStyle} ref={typedStr} />
      <span className={cursorStyle} />
    </>
  );
}