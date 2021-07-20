import mergeSort from "./index";

describe("Merge sort", () => {
  test("Should return sorted array", () => {
    expect(mergeSort([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(mergeSort([3, 2, 1, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    expect(mergeSort([33, 22, 11, 33334, 45])).toEqual([11, 22, 33, 45, 33334]);
    expect(mergeSort([2, 1, 4, 5])).toEqual([1, 2, 4, 5]);
    expect(mergeSort([10000, 3, 2, 1, 4, 5, 100])).toEqual([1, 2, 3, 4, 5, 100, 10000]);
  });
  test("Should work with negative ints", () => {
    expect(mergeSort([-2, 21, 4, 5])).toEqual([-2, 4, 5, 21]);
    expect(mergeSort([-2, 231, 41, 5])).toEqual([-2, 5, 41, 231]);
  });
  test("Should work with empty arrays", () => {
    expect(mergeSort([])).toEqual([]);
  });
  test("Should work with sorted arrays", () => {
    expect(mergeSort([1, 2, 3, 4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
