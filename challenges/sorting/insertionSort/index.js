/* eslint-disable no-param-reassign */

/**
 * Insertion sort algorithm implementation.
 * O(N) — best case.
 * O(N^2) — average case.
 * O(N^2) — worst case.
 * O(1) memory complexity.
 *
 * Pseudo-code:
 *  mark first element as sorted
 *   for each unsorted element X
 *     'extract' the element X
 *     for j = lastSortedIndex down to 0
 *       if current element j > X
 *         move sorted element to the right by 1
 *       break loop and insert X here
 *
 * @param {*} arr
 * @returns {*} arr (sorted array)
 */

function insertionSort(arr) {
  const sorted = [...arr];

  if (sorted.length <= 1) return sorted;

  for (let i = 1; i < sorted.length; i++) {
    const extracted = sorted[i];

    for (let j = i - 1; j >= 0; j--) {
      if (extracted < sorted[j]) {
        sorted[j + 1] = sorted[j];
        sorted[j] = extracted;
      }
    }
  }

  return sorted;
}

export default insertionSort;
