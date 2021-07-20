/**
 * Merge sort algorithm implementation.
 * O(N*log(N)) — time complexity.
 * O(N) memory complexity.
 *
 * Pseudo-code:
 *  split each element into partitions of size 1
 *   recursively merge adjacent partitions
 *     for i = leftPartIdx to rightPartIdx
 *       if leftPartHeadValue <= rightPartHeadValue
 *         copy leftPartHeadValue
 *       else: copy rightPartHeadValue
 *   copy elements back to original array
 *
 * @param {*} arr
 * @returns {*} arr (sorted array)
 */

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid, arr.length);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let i = 0;
  let j = 0;
  const sorted = [];

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      sorted.push(left[i]);
      i++;
    } else {
      sorted.push(right[j]);
      j++;
    }
  }

  return [...sorted, ...left.slice(i), ...right.slice(j)];
}

export default mergeSort;
