import { useCounter } from "../hooks/useCounter";

export const CounterHook = () => {
  const {counter, elementToAnimation, handleClick} = useCounter({
    maxCount: 10
  })
  return (
    <>
      <h1>CounterHook</h1>
      <h2 ref={elementToAnimation}>{counter}</h2>
      <button onClick={handleClick}>+1</button>
    </>
  );
};
