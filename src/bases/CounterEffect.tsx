import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap'

interface Props {
  initialValue?: number;
}

export const CounterEffect = ({ initialValue = 0 }: Props) => {

  const [counter, setCounter] = useState(initialValue);

  const maxCounter = useRef<HTMLHeadingElement>(null);

  const MAX_COUNT = 10;

  useEffect(() => {
    if (counter < 10) return;

    console.log(`%cSe llego al valor maximo`, 'color: green; background-color: black; padding: 16px;')

    const tl = gsap.timeline();

    tl.to(maxCounter.current, { y: -10, duration: 0.2, ease: 'ease.out' })
      .to(maxCounter.current, { y: 0, duration: 1, ease: 'bounce.out' })

  }, [counter])

  const handleClick = () => {
    setCounter((prevCounter) => Math.min(prevCounter + 1, MAX_COUNT));
  };

  return (
    <>
      <h1>CounterEffect</h1>
      <h2 ref={maxCounter}>{counter}</h2>
      <button onClick={handleClick}>+1</button>
    </>
  );
};
