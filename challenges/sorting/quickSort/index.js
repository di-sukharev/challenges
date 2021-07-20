/**
 * Quick sort algorithm implementation.
 * O(N*log(N)) — best and average time complexity.
 * O(N^2) — worst time complexity.
 * O(N) memory complexity
 *
 * @param {*} arr
 * @returns {*} arr (sorted array)
 */

function quickSort(arr) {
  // base-case (stop recursion)
  if (arr.length <= 1) return arr;

  const { left, pivot, right } = partition(arr);

  return [...quickSort(left), pivot, ...quickSort(right)];
}

function partition(arr) {
  const sorted = arr;
  const mid = Math.floor(sorted.length / 2);
  const [pivot] = sorted.splice(mid, 1);

  const left = [];
  const right = [];

  sorted.forEach((el) => {
    if (el <= pivot) left.push(el);
    if (el > pivot) right.push(el);
  });

  return { left, pivot, right };
}

export default quickSort;
