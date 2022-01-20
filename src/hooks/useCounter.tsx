import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export const useCounter = ({ maxCount = 5 }) => {
  const [counter, setCounter] = useState(5);
  const elementToAnimation = useRef<HTMLHeadingElement>(null);
  const tl = useRef(gsap.timeline());

  useLayoutEffect(() => {
    if (!elementToAnimation.current) return;

    tl.current
      .to(elementToAnimation.current, {
        y: -10,
        duration: 0.2,
        ease: 'ease.out',
      })
      .to(elementToAnimation.current, { y: 0, duration: 1, ease: 'bounce.out' })
      .pause();
  }, []);

  useEffect(() => {
    if (counter < maxCount) return;

    tl.current.play(0);
  }, [counter]);

  const handleClick = () => {
    setCounter((prevCounter) => Math.min(prevCounter + 1, maxCount));
  };

  return {
    counter,
    elementToAnimation,
    handleClick,
  };
};
