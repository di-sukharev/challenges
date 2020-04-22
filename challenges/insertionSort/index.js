/* eslint-disable no-param-reassign */

/**
 * Bubble sort algorithm implementation.
 * O(N^2) time complexity & O(1) memory complexity.
 *
 * @param {*} arr
 * @returns {*} arr (sorted array)
 */

const insertionSort = arr => {
  const sorted = arr;

  for (let i = 1; i < sorted.length; i++) {
    const save = sorted[i];
    // eslint-disable-next-line for-direction
    for (let j = i; j > 0 && sorted[j - 1] > save; j--) {
      sorted[j] = sorted[j - 1];
      sorted[j - 1] = save;
    }
  }

  return sorted;
};

export default insertionSort;
