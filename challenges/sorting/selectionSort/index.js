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
  const sortedArr = [...arr];

  if (sortedArr.length <= 1) return sortedArr;

  for (let i = 0; i < sortedArr.length; i++) {
    let minIndex = i;

    for (let j = i + 1; j < sortedArr.length; j++) {
      if (sortedArr[j] < sortedArr[minIndex]) {
        minIndex = j;
      }
    }

    const temp = sortedArr[i];
    sortedArr[i] = sortedArr[minIndex];
    sortedArr[minIndex] = temp;
  }

  return sortedArr;
}

export default selectionSort;
