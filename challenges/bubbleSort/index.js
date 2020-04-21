/* eslint-disable no-param-reassign */

/**
 * Bubble sort algorithm implementation.
 *
 * @param {*} arr
 * @returns arr sorted
 */

const bubbleSort = arr => {
  const sortedArr = arr;
  let swapped;
  let indexOfLastUnsortedElement = sortedArr.length - 1;
  do {
    swapped = false;

    for (let i = 0; i < indexOfLastUnsortedElement; i++) {
      if (sortedArr[i] > sortedArr[i + 1]) {
        const save = sortedArr[i];
        sortedArr[i] = sortedArr[i + 1];
        sortedArr[i + 1] = save;
        swapped = true;
      }
    }

    indexOfLastUnsortedElement--;
  } while (swapped);

  return sortedArr;
};

export default bubbleSort;
