export default function snail(array) {
  const sorted = [];

  while (array.length) {
    // get first row, going row clockwise
    sorted.push(...array.shift());
    // get every last element of remained rows, going column clockwise
    for (let i = 0; i < array.length; i++) {
      sorted.push(array[i].pop());
    }
    // get last row and reverse elements direction, going row clockwise
    sorted.push(...(array.pop() || []).reverse());
    // get every first element of remained rows, going column clockwise
    for (let i = array.length - 1; i >= 0; i--) {
      sorted.push(array[i].shift());
    }
  }

  return sorted;
}

// [[]];

// [[1]];

// [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
