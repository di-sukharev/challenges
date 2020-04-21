/* eslint-disable prettier/prettier */
/* eslint-disable no-multi-assign */

/**
 * Binary search algorithm implementation.
 *
 * @param {*} arr
 * @param {*} search
 * @returns positive index if value was finded & -1 if there was no value in the array
 */
export default function binarySearch(arr, search) {
  let left = 0;
  let right = arr.length - 1;

  while (left !== right) {
    const mid = Math.floor((left + right) / 2);

    if (right === mid || left === mid) left = right = mid; // if we have already been here
    else if (arr[mid] === search) return mid;
    else if (arr[mid] > search) right = mid;
    else if (arr[mid] < search) left = mid;
  }
  return -1; // if no search value is in array
}
