import { useEffect, useRef, useState } from 'react';

/**
 * useTypewriter — cycles through an array of strings with
 * type-in / erase animation.
 *
 * @param {string[]} words       - Array of strings to cycle through
 * @param {number}   typeSpeed   - ms per character while typing
 * @param {number}   eraseSpeed  - ms per character while erasing
 * @param {number}   pauseAfter  - ms to pause after fully typed
 */
export function useTypewriter(
  words      = [],
  typeSpeed  = 80,
  eraseSpeed = 45,
  pauseAfter = 1800
) {
  const [displayed, setDisplayed] = useState('');
  const [isErasing, setIsErasing] = useState(false);

  // Use refs for loop state to avoid effect dependency churn
  const wordIndexRef = useRef(0);
  const charIndexRef = useRef(0);

  useEffect(() => {
    if (!words.length) return;

    let timerId;

    function tick() {
      const current = words[wordIndexRef.current % words.length];

      if (!isErasing) {
        if (charIndexRef.current < current.length) {
          charIndexRef.current += 1;
          setDisplayed(current.slice(0, charIndexRef.current));
          timerId = setTimeout(tick, typeSpeed);
        } else {
          // Fully typed — pause, then start erasing
          timerId = setTimeout(() => setIsErasing(true), pauseAfter);
        }
      } else {
        if (charIndexRef.current > 0) {
          charIndexRef.current -= 1;
          setDisplayed(current.slice(0, charIndexRef.current));
          timerId = setTimeout(tick, eraseSpeed);
        } else {
          // Fully erased — move to next word
          wordIndexRef.current = (wordIndexRef.current + 1) % words.length;
          setIsErasing(false);
        }
      }
    }

    timerId = setTimeout(tick, isErasing ? eraseSpeed : typeSpeed);

    return () => clearTimeout(timerId);
  }, [isErasing, words, typeSpeed, eraseSpeed, pauseAfter]);

  return { displayed, isErasing };
}
