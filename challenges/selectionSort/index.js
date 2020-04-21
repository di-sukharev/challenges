const selectionSort = arr => {
  const sortedArray = arr;

  for (let i = 0; i < sortedArray.length; i++) {
    let min = i;
    for (let j = min + 1; j < sortedArray.length; j++) {
      if (sortedArray[j] < sortedArray[min]) min = j;
    }
    // start of swap
    if (min !== i) {
      const save = sortedArray[i];
      sortedArray[i] = sortedArray[min];
      sortedArray[min] = save;
    }
    // end of swap
  }

  return sortedArray;
};

export default selectionSort;
