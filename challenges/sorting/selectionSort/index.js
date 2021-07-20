/**
 * Selection sort algorithm implementation.
 * O(N^2) time complexity & O(1) memory complexity.
 *
 * Pseudo-code:
 * repeat (numOfElements - 1) times
 *    set the first unsorted element as the minimum
 *    for each of the unsorted elements
 *      if element < currentMinimum
 *        set element as new minimum
 *    swap minimum with first unsorted position
 *
 * @param {*} arr
 * @returns {*} arr (sorted array)
 */

function selectionSort(arr) {
  const sorted = [...arr];

  for (let i = 0; i < sorted.length; i++) {
    let minIndex = i;

    for (let j = i + 1; j < sorted.length; j++) {
      if (sorted[j] < sorted[minIndex]) {
        minIndex = j;
      }
    }

    const temp = sorted[i];
    sorted[i] = sorted[minIndex];
    sorted[minIndex] = temp;
  }

  return sorted;
}

export default selectionSort;
