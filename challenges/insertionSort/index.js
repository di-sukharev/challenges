/* eslint-disable no-param-reassign */

/**
 * Bubble sort algorithm implementation.
 * O(N^2) time complexity & O(1) memory complexity.
 *
 * @param {*} arr
 * @returns {*} arr (sorted array)
 */

const insertionSort = arr => {
  const sortedArray = arr;

  for (let i = 1; i < sortedArray.length; i++) {
    const extracted = sortedArray[i];
    // eslint-disable-next-line for-direction
    for (let j = i; j > 0; j--) {
      if (sortedArray[j - 1] > extracted) {
        sortedArray[j] = sortedArray[j - 1];
        sortedArray[j - 1] = extracted;
      } else break;
    }
  }

  return sortedArray;
};

export default insertionSort;
