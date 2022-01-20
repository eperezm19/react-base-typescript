import React, { useReducer } from 'react';
import * as actions from '../counter-reducer/actions/actions';
import { CounterState } from '../counter-reducer/interfaces/interfaces';
import { counterReducer } from '../counter-reducer/state/counterReducer';

const initialState: CounterState = {
  counter: 0,
  previous: 0,
  changes: 0,
};

export const CounterReducerComponent = () => {
  const [{ counter, previous, changes }, dispatch] = useReducer(
    counterReducer,
    initialState
  );

  const handleReset = () => {
    dispatch(actions.doReset());
  };

  const handleIncreaseBy = (value: number) => {
    dispatch(actions.doIncreaseBy(value));
  };

  return (
    <>
      <h1>counter: {counter}</h1>
      <h1>previous: {previous}</h1>
      <h1>changes: {changes}</h1>
      <button>-1</button>
      <button onClick={handleReset}>reset</button>
      <button onClick={() => handleIncreaseBy(1)}>+1</button>
      <button onClick={() => handleIncreaseBy(5)}>+5</button>
      <button onClick={() => handleIncreaseBy(10)}>+10</button>
    </>
  );
};

/**
 * Majeto de reducer
 */
