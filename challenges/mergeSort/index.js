function mergeSort(arr) {
  // base-case (stop recursion)
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let i = 0; // left array pointer
  let j = 0; // right array pointer
  const sorted = [];

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      sorted.push(left[i]);
      i++; // move left array pointer
    } else {
      sorted.push(right[j]);
      j++; // move right array pointer
    }
  }

  return [...sorted, ...left.slice(i), ...right.slice(j)];
}

export default mergeSort;
