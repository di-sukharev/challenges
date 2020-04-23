const countingSort = (arr, min, max) => {
  if (!arr.length) return arr;

  const counts = new Array(max - min + 1).fill(0);
  const offset = min;

  arr.forEach(int => counts[int - offset]++);

  const sortedIntegers = [];

  for (let i = 0; i < counts.length; i++) while (counts[i]-- > 0) sortedIntegers.push(i + offset);

  return sortedIntegers;
};

export default countingSort;
