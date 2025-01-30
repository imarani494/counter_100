import { BehaviorSubject } from 'rxjs';
import { changeState } from '../model/CounterModel';

export const state$ = new BehaviorSubject(changeState);

export const increment = () => {
  const currentState = state$.value;
  const newCount = Math.min(currentState.count + 1, 98);
  state$.next({ ...currentState, count: newCount });
};

export const decrement = () => {
  const currentState = state$.value;
  const newCount = Math.max(currentState.count - 1, 0);
  state$.next({ ...currentState, count: newCount });
};

export const reset = () => {
  const currentState = state$.value;
  state$.next({ ...currentState, count: 0 });
};

export const toggleAutoIncrement = () => {
  const currentState = state$.value;
  state$.next({ ...currentState, isAutoIncrementEnabled: !currentState.isAutoIncrementEnabled });
};