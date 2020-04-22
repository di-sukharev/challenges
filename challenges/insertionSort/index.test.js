import insertionSort from "./index";

describe("Insertion sort", () => {
  test("Should return sorted array", () => {
    expect(insertionSort([1, 2, 3, 6, 9, 7, 8, 0])).toEqual([0, 1, 2, 3, 6, 7, 8, 9]);
    expect(insertionSort([9, 8, 7, 6, 5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(insertionSort([3, 2, 1, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    expect(insertionSort([2, 1, 4, 5])).toEqual([1, 2, 4, 5]);
    expect(insertionSort([10000, 3, 2, 1, 4, 5, 100])).toEqual([1, 2, 3, 4, 5, 100, 10000]);
  });
  test("Should work with negative ints", () => {
    expect(insertionSort([-2, 21, 4, 5])).toEqual([-2, 4, 5, 21]);
    expect(insertionSort([-2, 231, 41, 5])).toEqual([-2, 5, 41, 231]);
  });
  test("Should work with empty arrays", () => {
    expect(insertionSort([])).toEqual([]);
  });
  test("Should work with sorted arrays", () => {
    expect(insertionSort([1, 2, 3, 4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
