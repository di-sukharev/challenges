/*
 * Create a function that returns the sum of the two lowest positive numbers
 * given an array of minimum 4 positive integers.
 * non-positive integers will be passed.
 *
 * Examples:
 * [10, 3, 19, 1000, -44] should return 13.
 */

export default function sumTwoSmallestNumbers(numbers) {
  const [a, b] = numbers.sort((c, d) => c - d);
  return a + b;
}
