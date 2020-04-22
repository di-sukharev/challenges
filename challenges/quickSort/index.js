const quickSort = (unsortedArray, left = 0, right = unsortedArray.length - 1) => {
  const sortedArray = unsortedArray;

  let index;
  if (sortedArray.length > 1) {
    index = partition(sortedArray, left, right);
    // is there any elements left?
    if (left < index - 1) {
      quickSort(sortedArray, left, index - 1);
    }
    // is there any elements right?
    if (index < right) {
      quickSort(sortedArray, index, right);
    }
  }
  return sortedArray;
};

function partition(items, left, right) {
  const pivot = items[Math.floor((left + right) / 2)];
  let i = left;
  let j = right;

  while (i <= j) {
    while (items[i] < pivot) {
      i++;
    }
    while (items[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(items, i, j);
      i++;
      j--;
    }
  }
  return i;
}

function swap(items, leftIndex, rightIndex) {
  const temp = items[leftIndex];
  items[leftIndex] = items[rightIndex];
  items[rightIndex] = temp;
}

export default quickSort;
