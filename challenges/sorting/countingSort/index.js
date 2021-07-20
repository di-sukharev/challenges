/**
 * Counting sort algorithm implementation.
 * O(N+K) time complexity & O(N+K) memory complexity.
 *
 * @param {*} arr
 * @returns {*} arr (sorted array)
 */

function countingSort(arr, min, max) {
  if (arr.length <= 1) return arr;

  // create 0-indexed array from min to max
  const keys = new Array(max - min + 1).fill(0);

  // save count of integers occurances
  arr.forEach((el) => {
    const offset = el - min;
    if (keys[offset]) keys[offset] += 1;
    else keys[offset] = 1;
  });

  const sorted = [];

  // print each index
  for (let i = 0; i < keys.length; i++) {
    const offset = i + min;
    while (keys[i]-- > 0) sorted.push(offset);
  }

  return sorted;
}

export default countingSort;
