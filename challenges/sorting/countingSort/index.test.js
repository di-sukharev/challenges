import countingSort from "./index";

describe("Counting sort", () => {
  test("Should return sorted array", () => {
    expect(countingSort([19, 12, 11, 10], 10, 19)).toEqual([10, 11, 12, 19]);
    expect(countingSort([9, 8, 7, 3, 2, 1, 0], 0, 9)).toEqual([0, 1, 2, 3, 7, 8, 9]);
    expect(countingSort([3, 2, 1, 4, 5], 1, 5)).toEqual([1, 2, 3, 4, 5]);
    expect(countingSort([2, 1, 4, 5], 1, 5)).toEqual([1, 2, 4, 5]);
  });
  test("Should work with empty arrays", () => {
    expect(countingSort([])).toEqual([]);
  });
  test("Should work with sorted arrays", () => {
    expect(countingSort([1, 2, 3, 4, 5, 6], 1, 6)).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
