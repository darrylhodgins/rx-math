import {Observable} from 'rxjs/Rx';

function _normalizeValue(value: ValueOrObservable) {
	return (typeof value === 'number') ? Observable.of(value) : value;
}

function _normalizeValues(values: ValueOrObservable[]) {
	return values.map(_normalizeValue);
}

function _multiplicationReducer(...values: number[]): number {
	return values.reduce((prev: number, val: number) => prev * val, 1);
}

function _additionReducer(...values: number[]): number {
	return values.reduce((prev: number, val: number) => prev + val, 0);
}

function _subtractionReducer(initial: number, ...values: number[]): number {
	return values.reduce((prev: number, val: number) => prev - val, initial);
}

export type ValueOrObservable = Observable<number> | number;

export class RxMath {

	public static add(...valueObservables: ValueOrObservable[]): Observable<number> {
		return Observable
			.combineLatest.apply(this, _normalizeValues(valueObservables))
			.map((values: number[]) => _additionReducer.apply(this, values));
	}

	/**
	 * Takes the first value, then subtracts the rest from it.
	 */
	public static subtract(...valueObservables: ValueOrObservable[]): Observable<number> {
		return Observable
			.combineLatest.apply(this, _normalizeValues(valueObservables))
			.map((values: number[]) => _subtractionReducer.apply(this, values));
	}

	public static multiply(...valueObservables: ValueOrObservable[]): Observable<number> {
		return Observable
			.combineLatest.apply(this, _normalizeValues(valueObservables))
			.map((values: number[]) => _multiplicationReducer.apply(this, values));
	}

	public static divide(divisorObservable: ValueOrObservable, dividendObservable: ValueOrObservable): Observable<number> {
		return Observable.combineLatest(
			_normalizeValue(divisorObservable),
			_normalizeValue(dividendObservable),
			(divisor: number, dividend: number) => divisor / dividend
		);
	}

	public static negative(valueObservable: Observable<number>): Observable<number> {
		return valueObservable.map((value: number) => (0 - value));
	}

	public static average(...valueObservables: ValueOrObservable[]): Observable<number> {
		return RxMath
			.add.apply(this, _normalizeValues(valueObservables))
			.map((total: number) => total / valueObservables.length);
	}

	// Straight from Math
	public static abs(xObs: Observable<number>): Observable<number> {
		return xObs.map((x: number) => Math.abs(x));
	}

	public static acos(xObs: Observable<number>): Observable<number> {
		return xObs.map((x: number) => Math.acos(x));
	}

	public static acosh(xObs: Observable<number>): Observable<number> {
		return xObs.map((x: number) => Math.acosh(x));
	}

	public static asin(xObs: Observable<number>): Observable<number> {
		return xObs.map((x: number) => Math.asin(x));
	}

	public static asinh(xObs: Observable<number>): Observable<number> {
		return xObs.map((x: number) => Math.asinh(x));
	}

	public static atan(xObs: Observable<number>): Observable<number> {
		return xObs.map((x: number) => Math.atan(x));
	}

	public static atanh(xObs: Observable<number>): Observable<number> {
		return xObs.map((x: number) => Math.atanh(x));
	}

	public static cbrt(xObs: Observable<number>): Observable<number> {
		return xObs.map((x: number) => Math.cbrt(x));
	}

	public static ceil(xObs: Observable<number>): Observable<number> {
		return xObs.map((x: number) => Math.ceil(x));
	}

	public static cos(xObs: Observable<number>): Observable<number> {
		return xObs.map((x: number) => Math.cos(x));
	}

	public static cosh(xObs: Observable<number>): Observable<number> {
		return xObs.map((x: number) => Math.cosh(x));
	}

	public static exp(xObs: Observable<number>): Observable<number> {
		return xObs.map((x: number) => Math.exp(x));
	}

	public static floor(xObs: Observable<number>): Observable<number> {
		return xObs.map((x: number) => Math.floor(x));
	}

	public static log(xObs: Observable<number>): Observable<number> {
		return xObs.map((x: number) => Math.log(x));
	}

	public static log10(xObs: Observable<number>): Observable<number> {
		return xObs.map((x: number) => Math.log10(x));
	}

	public static max(...valuesObs: ValueOrObservable[]): Observable<number> {
		return Observable
			.combineLatest.apply(this, _normalizeValues(valuesObs))
			.map((values: number[]) => Math.max.apply(this, values));
	}

	public static min(...valuesObs: ValueOrObservable[]): Observable<number> {
		return Observable
			.combineLatest.apply(this, _normalizeValues(valuesObs))
			.map((values: number[]) => Math.min.apply(this, values));
	}
	
	public static pow(xObs: ValueOrObservable, yObs: ValueOrObservable): Observable<number> {
		return Observable.combineLatest(
			_normalizeValue(xObs),
			_normalizeValue(yObs),
			Math.pow
		);
	}

	public static round(xObs: Observable<number>): Observable<number> {
		return xObs.map((x: number) => Math.round(x));
	}

	public static sign(xObs: Observable<number>): Observable<number> {
		return xObs.map((x: number) => Math.sign(x));
	}

	public static sin(xObs: Observable<number>): Observable<number> {
		return xObs.map((x: number) => Math.sin(x));
	}

	public static sinh(xObs: Observable<number>): Observable<number> {
		return xObs.map((x: number) => Math.sinh(x));
	}

	public static sqrt(xObs: Observable<number>): Observable<number> {
		return xObs.map((x: number) => Math.sqrt(x));
	}

	public static tan(xObs: Observable<number>): Observable<number> {
		return xObs.map((x: number) => Math.tan(x));
	}

	public static tanh(xObs: Observable<number>): Observable<number> {
		return xObs.map((x: number) => Math.tanh(x));
	}

	public static trunc(xObs: Observable<number>): Observable<number> {
		return xObs.map((x: number) => Math.trunc(x));
	}	
}
