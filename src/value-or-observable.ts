import {Observable} from 'rxjs/Rx';

export type ValueOrObservable = Observable<number> | number;

export function normalizeValue(value: ValueOrObservable) {
	return (typeof value === 'number') ? Observable.of(value) : value;
}

export function normalizeValues(values: ValueOrObservable[]) {
	return values.map(normalizeValue);
}
