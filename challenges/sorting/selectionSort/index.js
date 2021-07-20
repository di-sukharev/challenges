/**
 * Selection sort algorithm implementation.
 * O(N^2) time complexity & O(1) memory complexity.
 *
 * @param {*} arr
 * @returns {*} arr (sorted array)
 */

function selectionSort(arr) {
  const sorted = arr;

  let firstUnsortedIndex = 0;

  // while elements are unsorted
  while (firstUnsortedIndex < sorted.length - 1) {
    let minValueIndex = firstUnsortedIndex;

    // find the minimum value of all unsorted elements
    for (let i = firstUnsortedIndex + 1; i < sorted.length; i++) {
      if (sorted[i] < sorted[minValueIndex]) minValueIndex = i;
    }

    // start swap of first unsorted element with the minimum value
    const save = sorted[minValueIndex];
    sorted[minValueIndex] = sorted[firstUnsortedIndex];
    sorted[firstUnsortedIndex] = save;
    // end swap

    firstUnsortedIndex++;
  }

  return sorted;
}

export default selectionSort;
