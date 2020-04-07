/*
 * Complete the solution so that it splits the string into pairs of two characters.
 * If the string contains an odd number of characters
 * then it should replace the missing second character of the final pair
 * with an underscore ('_').
 */

export default function twoPairs(str) {
  return str
    .split("")
    .map((s, i, arr) => (i % 2 === 0 ? s + (arr[i + 1] || "_") : s))
    .filter(el => el.length > 1);
}
