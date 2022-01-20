export type CounterActions =
  | {
      type: 'increaseBy';
      payload: { value: number };
    }
  | { type: 'reset' };

// action creators
// consiste en crear las acciones dentro de una funcion
export const doReset = (): CounterActions => ({
  type: 'reset',
});

export const doIncreaseBy = (value: number): CounterActions => ({
  type: 'increaseBy',
  payload: { value },
});
