# Reactive Math

[![Dependencies Status](https://david-dm.org/darrylhodgins/rx-math.svg)](https://david-dm.org/darrylhodgins/rx-math)
[![devDependency Status](https://david-dm.org/darrylhodgins/rx-math/dev-status.svg)](https://david-dm.org/darrylhodgins/rx-math#info=devDependencies)
[![npm](https://img.shields.io/npm/v/rx-math.svg)](https://www.npmjs.com/package/rx-math)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/darrylhodgins/rx-math/master/LICENSE)
[![Build Status](https://travis-ci.org/darrylhodgins/rx-math.svg?branch=master)](https://travis-ci.org/darrylhodgins/rx-math)

Helpers to write functional reactive calculators.

## Installation

```bash
npm install --save rx-math
```

## Basic Usage

This is an oversimplification of how one would actually use `RxMath`.  In reality, the source `Observables` will come from a form input, data service, or perhaps even another `RxMath` calculation.  It's likely that you'll also want to create a `class` to encapsulate a more complex calculation.

```typescript
let x: Observable<number> = Observable.of(123);
let y: Observable<number> = Observable.of(456);

let average: Observable<number> = RxMath.average(x, y);

average.subscribe((val: number) => {
	console.log('Average is', val);
});

// outputs "Average is 289.5"
```
