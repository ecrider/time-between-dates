# Time Between Dates

Simple script to measure time between two dates and get result in miliseconds, seconds, minutes, hours, days or weeks.

### Installation

```shell
npm install time-between-dates
```

Import:

```js
var timeBetweenDates = require('time-between-dates');
```

### Usage

#### timeBetweenDates(firstDate, secondDate, units, decimalPlaces);

```js
var x = 1510753649290;
var y = 1510756160552;
var tillNow = (new Date()).getTime();

// time in miliseconds (default)
timeBetweenDates(x, y); // returns 2511262

// time in seconds (rounded, zero decimal places)
timeBetweenDates(x, y, 'seconds'); // returns 2511

// time in minutes (one decimal place)
timeBetweenDates(x, y, 'minutes', 1); // returns 41.9

// time in hours (four decimal places)
timeBetweenDates(x, y, 'hours', 4); // returns 0.6976

// time in days (two decimal places)
timeBetweenDates(x, y, 'days', 2); // returns 0.03

// time in weeks (sever decimal places)
timeBetweenDates(x, y, 'weeks', 7); // returns 0.0041522

// time between x and now in days (two decimal places)
timeBetweenDates(x, tillNow, 'days', 2);
```
