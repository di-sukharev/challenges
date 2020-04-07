/*
 * You are given an array (which will have a length of at least 3, but could be very large) containing integers.
 * The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N.
 * Write a method that takes the array as an argument and returns this "outlier" N.
 *
 * Examples:
 *
 * [2, 4, 0, 100, 4, 11, 2602, 36]
 * Should return: 11 (the only odd number)
 *
 * [160, 3, 1719, 19, 11, 13, -21]
 * Should return: 160 (the only even number)
 */

const isEven = num => !(num % 2);
const isOdd = num => num % 2;

export function findOutlierSlow(integers) {
  const evens = integers.filter(isEven);
  const odds = integers.filter(isOdd);

  return evens.length < odds.length ? evens[0] : odds[0];
}

export function findOutlierFast(integers) {
  let evenORodd = null;
  let result = null;

  for (let i = 0; i <= integers.length; i++) {
    if (evenORodd !== isEven(integers[i]) && evenORodd !== null) {
      result =
        isEven(integers[i]) === isEven(integers[i + 1] || integers[i - 2])
          ? integers[i - 1]
          : integers[i];
      break;
    } else evenORodd = isEven(integers[i]);
  }

  return result;
}
