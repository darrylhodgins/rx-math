import {RxMath} from '../../src/rx-math';
import {Observable, Subscription} from 'rxjs/Rx';


describe('rx-math', () => {

	let subscription: Subscription;

	function subscribeOnce<T>(observable: Observable<T>, cb: (T) => void): void {
		subscription = observable.subscribe(
			(val: T) => {
				cb(val);
			}
		);
	}
	
	afterEach(() => {
		if (subscription) {
			subscription.unsubscribe();
			subscription = null;
		}
	});

	describe('add()', () => {
		describe('when no parameters given', () => {
			it('should do nothing', (done: DoneFn) => {
				let testObservable: Observable<number> = RxMath.add();

				subscription = testObservable.subscribe(
					(val: number) => {
						expect('this').toBe('not called', 'no emissions should happen if no values are passed');
					},
					(e: Error) => {
					},
					() => {
						expect(true).toBe(true);
						done();
					}
				);
			});
		});

		describe('when adding two Observable<number>', () => {
			it('should add the values emitted by the observables', (done: DoneFn) => {
				let testObservable: Observable<number> = RxMath.add(
					Observable.of(1),
					Observable.of(100)
				);

				subscribeOnce(testObservable, (val: number) => {
					expect(val).toEqual(101);
					done();
				})
			});
		});

		describe('when adding many Observable<number>', () => {
			it('should add the values emitted by the observables', (done: DoneFn) => {
				let testObservable: Observable<number> = RxMath.add(
					Observable.of(1),
					Observable.of(3),
					Observable.of(5),
					Observable.of(8),
					Observable.of(13)
				);

				subscribeOnce(testObservable, (val: number) => {
					expect(val).toEqual(30);
					done();
				})
			});
		});
		
		describe('when adding Observable<number> with some static value', () => {
			it('should add the values emitted by the observables', (done: DoneFn) => {
				let testObservable: Observable<number> = RxMath.add(
					Observable.of(-21),
					200
				);

				subscribeOnce(testObservable, (val: number) => {
					expect(val).toEqual(179);
					done();
				})
			});
		});
	});

	describe('subtract()', () => {
		describe('when no parameters given', () => {
			it('should do nothing', (done: DoneFn) => {
				let testObservable: Observable<number> = RxMath.subtract();

				subscription = testObservable.subscribe(
					(val: number) => {
						expect('this').toBe('not called', 'no emissions should happen if no values are passed');
					},
					(e: Error) => {
					},
					() => {
						expect(true).toBe(true);
						done();
					}
				);
			});
		});

		describe('when subtracting two Observable<number>', () => {
			it('should subtract the values emitted by the observables', (done: DoneFn) => {
				let testObservable: Observable<number> = RxMath.subtract(
					Observable.of(100),
					Observable.of(10)
				);

				subscribeOnce(testObservable, (val: number) => {
					expect(val).toEqual(90);
					done();
				})
			});
		});

		describe('when subtracting many Observable<number>', () => {
			it('should subtract the values emitted by the observables', (done: DoneFn) => {
				let testObservable: Observable<number> = RxMath.subtract(
					Observable.of(1000),
					Observable.of(300),
					Observable.of(500),
					Observable.of(8),
					Observable.of(13)
				);

				subscribeOnce(testObservable, (val: number) => {
					expect(val).toEqual(179);
					done();
				})
			});
		});
		
		describe('when subtracting Observable<number> with some static value', () => {
			it('should subtract the values emitted by the observables', (done: DoneFn) => {
				let testObservable: Observable<number> = RxMath.subtract(
					Observable.of(2017),
					150
				);

				subscribeOnce(testObservable, (val: number) => {
					expect(val).toEqual(1867);
					done();
				})
			});
		});
	});

	describe('multiply()', () => {
		describe('when no parameters given', () => {
			it('should do nothing', (done: DoneFn) => {
				let testObservable: Observable<number> = RxMath.multiply();

				subscription = testObservable.subscribe(
					(val: number) => {
						expect('this').toBe('not called', 'no emissions should happen if no values are passed');
					},
					(e: Error) => {
					},
					() => {
						expect(true).toBe(true);
						done();
					}
				);
			});
		});

		describe('when multiplying two Observable<number>', () => {
			it('should multiply the values emitted by the observables', (done: DoneFn) => {
				let testObservable: Observable<number> = RxMath.multiply(
					Observable.of(50),
					Observable.of(100)
				);

				subscribeOnce(testObservable, (val: number) => {
					expect(val).toEqual(5000);
					done();
				})
			});
		});

		describe('when multiplying many Observable<number>', () => {
			it('should multiply the values emitted by the observables', (done: DoneFn) => {
				let testObservable: Observable<number> = RxMath.multiply(
					Observable.of(-1),
					Observable.of(3),
					Observable.of(-5),
					Observable.of(8),
					Observable.of(13)
				);

				subscribeOnce(testObservable, (val: number) => {
					expect(val).toEqual(1560);
					done();
				})
			});
		});
		
		describe('when multiplying Observable<number> with some static value', () => {
			it('should multiply the values emitted by the observables', (done: DoneFn) => {
				let testObservable: Observable<number> = RxMath.multiply(
					Observable.of(300),
					40
				);

				subscribeOnce(testObservable, (val: number) => {
					expect(val).toEqual(12000);
					done();
				})
			});
		});
	});

	describe('divide()', () => {
		describe('when dividing two Observable<number>', () => {
			it('should divide the values emitted by the observables', (done: DoneFn) => {
				let testObservable: Observable<number> = RxMath.divide(
					Observable.of(50),
					Observable.of(10)
				);

				subscribeOnce(testObservable, (val: number) => {
					expect(val).toEqual(5);
					done();
				})
			});
		});
	
		describe('when dividing Observable<number> with some static value', () => {
			it('should divide the values emitted by the observables', (done: DoneFn) => {
				let testObservable: Observable<number> = RxMath.divide(
					Observable.of(100),
					4
				);

				subscribeOnce(testObservable, (val: number) => {
					expect(val).toEqual(25);
					done();
				})
			});

			it('should divide the values emitted by the observables', (done: DoneFn) => {
				let testObservable: Observable<number> = RxMath.divide(
					100,
					Observable.of(2)
				);

				subscribeOnce(testObservable, (val: number) => {
					expect(val).toEqual(50);
					done();
				})
			});
		});
	});	

	describe('negative()', () => {
		describe('when negating a number', () => {
			it('should return the negative value of a positive number', (done: DoneFn) => {
				let testObservable: Observable<number> = RxMath.negative(
					Observable.of(5)
				);

				subscribeOnce(testObservable, (val: number) => {
					expect(val).toEqual(-5);
					done();
				})
			});

			it('should return the positive value of a negative number', (done: DoneFn) => {
				let testObservable: Observable<number> = RxMath.negative(
					Observable.of(-6)
				);

				subscribeOnce(testObservable, (val: number) => {
					expect(val).toEqual(6);
					done();
				})
			});

			it('should leave zero alone', (done: DoneFn) => {
				let testObservable: Observable<number> = RxMath.negative(
					Observable.of(0)
				);

				subscribeOnce(testObservable, (val: number) => {
					expect(val).toEqual(0);
					done();
				})
			});
		});
	});	

	describe('average()', () => {
		describe('when no parameters given', () => {
			it('should do nothing', (done: DoneFn) => {
				let testObservable: Observable<number> = RxMath.average();

				subscription = testObservable.subscribe(
					(val: number) => {
						expect('this').toBe('not called', 'no emissions should happen if no values are passed');
					},
					(e: Error) => {
					},
					() => {
						expect(true).toBe(true);
						done();
					}
				);
			});
		});

		describe('when averaging two Observable<number>', () => {
			it('should average the values emitted by the observables', (done: DoneFn) => {
				let testObservable: Observable<number> = RxMath.average(
					Observable.of(1),
					Observable.of(100)
				);

				subscribeOnce(testObservable, (val: number) => {
					expect(val).toEqual(50.5);
					done();
				})
			});
		});

		describe('when averaging many Observable<number>', () => {
			it('should average the values emitted by the observables', (done: DoneFn) => {
				let testObservable: Observable<number> = RxMath.average(
					Observable.of(1),
					Observable.of(3),
					Observable.of(5),
					Observable.of(8),
					Observable.of(13)
				);

				subscribeOnce(testObservable, (val: number) => {
					expect(val).toEqual(6);
					done();
				})
			});
		});
		
		describe('when averaging Observable<number> with some static value', () => {
			it('should average the values emitted by the observables', (done: DoneFn) => {
				let testObservable: Observable<number> = RxMath.average(
					Observable.of(-21),
					200
				);

				subscribeOnce(testObservable, (val: number) => {
					expect(val).toEqual(89.5);
					done();
				})
			});
		});
	});

	let singleParameterMathFns: string[] = [
		'abs', 'acos', 'acosh', 'asin', 'asinh', 'atan', 'atanh', 'cbrt', 'ceil',
		'cos', 'cosh', 'exp', 'floor', 'log', 'log10',
		'round', 'sign', 'sin', 'sinh', 'sqrt', 'tan', 'tanh', 'trunc'
	];

	singleParameterMathFns.forEach((fnName: string, index: number) => {
		describe(`${fnName}()`, () => {
			it(`should use Math.${fnName}`, (done: DoneFn) => {
				let mathSpy: jasmine.Spy = spyOn(Math, fnName).and.returnValue(index * 1000);

				let testObservable: Observable<number> = RxMath[fnName](
					Observable.of(index * 333)
				);

				subscribeOnce(testObservable, (val: number) => {
					expect(val).toEqual(index * 1000);
					expect(mathSpy).toHaveBeenCalledWith(index * 333);
					done();
				})
			});
		});
	});

	describe(`max()`, () => {
		it(`should use Math.max`, (done: DoneFn) => {
			let mathSpy: jasmine.Spy = spyOn(Math, 'max').and.returnValue(1337);

			let testObservable: Observable<number> = RxMath.max(
				Observable.of(123),
				456
			);

			subscribeOnce(testObservable, (val: number) => {
				expect(val).toEqual(1337);
				expect(mathSpy).toHaveBeenCalledWith(123, 456);
				done();
			})
		});
	});

	describe(`min()`, () => {
		it(`should use Math.min`, (done: DoneFn) => {
			let mathSpy: jasmine.Spy = spyOn(Math, 'min').and.returnValue(2337);

			let testObservable: Observable<number> = RxMath.min(
				Observable.of(321),
				432
			);

			subscribeOnce(testObservable, (val: number) => {
				expect(val).toEqual(2337);
				expect(mathSpy).toHaveBeenCalledWith(321, 432);
				done();
			})
		});
	});	

	describe(`pow()`, () => {
		it(`should use Math.pow`, (done: DoneFn) => {
			let mathSpy: jasmine.Spy = spyOn(Math, 'pow').and.returnValue(3377);

			let testObservable: Observable<number> = RxMath.pow(
				Observable.of(67),
				89
			);

			subscribeOnce(testObservable, (val: number) => {
				expect(val).toEqual(3377);
				expect(mathSpy).toHaveBeenCalledWith(67, 89);
				done();
			})
		});
	});	
});