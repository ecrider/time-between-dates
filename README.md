# Time Between Dates

Simple script to measure time between two dates. Returns result in miliseconds, seconds, minutes, hours, days, weeks or years.

## Installation

 Install via **[npm](https://www.npmjs.com/package/time-between-dates)**
```shell
$ npm install time-between-dates
```

... or **[yarn](https://yarnpkg.com/en/package/time-between-dates)**
```shell
$ yarn add time-between-dates
```

then require

```js
var timeBetweenDates = require('time-between-dates');
```

or import

```js
import timeBetweenDates from 'time-between-dates'
```
## Usage

##### timeBetweenDates(date, date2, unit, decimal);
Provide two dates, time unit and decimal places are optional

#### Examples

```js
// some dates
var x = (new Date('November 10, 2017 11:25:24')).getTime();
var y = (new Date('November 15, 2017 05:12:10')).getTime();

// time in miliseconds (default)
timeBetweenDates(x, y);                // returns 409606000

// time in seconds (rounded to fixed)
timeBetweenDates(x, y, 'seconds');     // returns 409606

// time in minutes (one decimal place)
timeBetweenDates(x, y, 'minutes', 1);  // returns 6826.8

// ... and so on
timeBetweenDates(x, y, 'hours', 4);    // returns 113.779
timeBetweenDates(x, y, 'days',  2);    // returns 4.74
timeBetweenDates(x, y, 'weeks', 3);    // returns 0.677

// "time since"
var now = Date.now();
timeBetweenDates(x, now, 'days', 2);
```

### Author

**Kuba Paczyński**
* [github/ecrider](https://github.com/ecrider)
* [npmjs/new31337](https://www.npmjs.com/~new31337)
* [linkedin/kuba-paczynski](https://www.linkedin.com/in/kuba-paczynski/)


### License

Copyright © 2017, [Kuba Paczyński](https://github.com/ecrider).
Released under the [MIT License](LICENSE).
