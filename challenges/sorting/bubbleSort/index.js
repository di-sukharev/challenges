/* eslint-disable no-param-reassign */

/**
 * Bubble sort algorithm implementation.
 * O(N) best case.
 * O(N^2) average and worst case.
 * O(1) memory complexity.
 *
 * Pseudo-code:
 *  do
 *    swapped = false
 *    for i = 1 to indexOfLastUnsortedElement-1
 *       if leftElement > rightElement
 *         swap(leftElement, rightElement)
 *         swapped = true
 *  while swapped
 *
 * @param {*} arr
 * @returns {*} arr (sorted array)
 */

function bubbleSort(arr) {
  const sortedArr = arr;

  let swapped = true;
  let lastUnsortedIndex = sortedArr.length;
  do {
    swapped = false;

    for (let i = 0; i < lastUnsortedIndex; i++) {
      if (sortedArr[i] > sortedArr[i + 1]) {
        const temp = sortedArr[i];
        sortedArr[i] = sortedArr[i + 1];
        sortedArr[i + 1] = temp;
        swapped = true;
      }
    }

    lastUnsortedIndex--;
  } while (swapped);

  return sortedArr;
}

export default bubbleSort;
