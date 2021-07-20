/* eslint-disable no-param-reassign */

/**
 * Insertion sort algorithm implementation.
 * O(N) — best case.
 * O(N^2) — average case.
 * O(N^2) — worst case.
 * O(1) memory complexity.
 *
 * @param {*} arr
 * @returns {*} arr (sorted array)
 */

function insertionSort(arr) {
  if (arr.length === 0) return arr;

  // take first element
  const sorted = [arr[0]];

  while (sorted.length < arr.length) {
    // take next element
    const next = arr[sorted.length];

    // if previous elements are higher -> move them right
    for (let i = sorted.length; i > 0; i--) {
      if (next < sorted[i - 1]) {
        // start swap
        sorted[i] = sorted[i - 1];
        sorted[i - 1] = next;
        // end swap
      } else {
        // save next to current index
        sorted[i] = next;
        break;
      }
    }
  }

  return sorted;
}

export default insertionSort;
