import selectionSort from "./index";

describe("Selection sort", () => {
  test("Should return sorted array", () => {
    expect(selectionSort([3, 2, 1, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    expect(selectionSort([33, 22, 11, 33334, 45])).toEqual([11, 22, 33, 45, 33334]);
    expect(selectionSort([2, 1, 4, 5])).toEqual([1, 2, 4, 5]);
    expect(selectionSort([10000, 3, 2, 1, 4, 5, 100])).toEqual([1, 2, 3, 4, 5, 100, 10000]);
  });
  test("Should work with negative ints", () => {
    expect(selectionSort([-2, 21, 4, 5])).toEqual([-2, 4, 5, 21]);
    expect(selectionSort([-2, 231, 41, 5])).toEqual([-2, 5, 41, 231]);
  });
  test("Should work with empty arrays", () => {
    expect(selectionSort([])).toEqual([]);
  });
  test("Should work with sorted arrays", () => {
    expect(selectionSort([1, 2, 3, 4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
