/*
 * Given two integers a and b, which can be positive or negative,
 * find the sum of all the numbers between including them too and return it.
 * If the two numbers are equal return a or b.
 * Note: a and b are not ordered!
 * GetSum(1, 0) == 1   // 1 + 0 = 1
 * GetSum(1, 3) == 6  // 1 + 2 + 3  = 6
 */

export default function getSum(a, b) {
  if (a === b) return a;

  const ordered = a < b ? [a, b] : [b, a];
  let sum = 0;

  for (let i = ordered[0]; i <= ordered[1]; i++) sum += i;

  return sum;
}
