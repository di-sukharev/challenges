/*
 * Given an array, find the integer that appears an odd number of times.
 * There will always be only one integer that appears an odd number of times.
 */

function findOdd(A) {
  const obj = {};
  A.forEach(el => (obj[el] ? obj[el]++ : (obj[el] = 1)));

  for (prop in obj) if (obj[prop] % 2 !== 0) return Number(prop);
}
