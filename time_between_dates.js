module.exports = function timeBetweenDates(first, second, units, decimal) {
  var now  = (new Date()).getTime();
  var dec  = decimal || 0;
  var test = Math.floor(Math.abs((now - first) - (now - second)));
  switch (units) {
    case 'seconds': return +(test / (1000)).toFixed(dec); break;
    case 'minutes': return +(test / (1000 * 60)).toFixed(dec); break;
    case 'hours':   return +(test / (1000 * 60 * 60)).toFixed(dec); break;
    case 'days':    return +(test / (1000 * 60 * 60 * 24)).toFixed(dec); break;
    case 'weeks':   return +(test / (1000 * 60 * 60 * 24 * 7)).toFixed(dec); break;
    default:        return test;
  }
};
