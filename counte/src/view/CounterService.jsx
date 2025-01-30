import { interval } from 'rxjs';
import { filter, takeWhile } from 'rxjs/operators';
import { state$, increment } from '../intent/CounterIntent';

export const startAutoIncrement = () => {
  interval(1100)
    .pipe(
      filter(() => state$.value.isAutoIncrementEnabled),
      takeWhile(() => state$.value.count < 98)
    )
    .subscribe(() => increment());
};