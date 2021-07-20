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
  const sorted = arr;

  let swapped;
  let lastUnsortedIndex = sorted.length - 1;
  // repeat loop while elements continue to swap
  do {
    swapped = false;

    // go through all unsorted elements and swap adjacents if left > right
    for (let i = 0; i < lastUnsortedIndex; i++) {
      if (sorted[i] > sorted[i + 1]) {
        // start swap
        const save = sorted[i];
        sorted[i] = sorted[i + 1];
        sorted[i + 1] = save;
        swapped = true;
        // end swap
      }
    }

    lastUnsortedIndex--;
  } while (swapped);

  return sorted;
}

export default bubbleSort;
