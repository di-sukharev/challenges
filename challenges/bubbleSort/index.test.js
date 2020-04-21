import bubbleSort from "./index";

describe("Bubble sort", () => {
  test("Should return sorted array", () => {
    expect(bubbleSort([3, 2, 1, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    expect(bubbleSort([2, 1, 4, 5])).toEqual([1, 2, 4, 5]);
    expect(bubbleSort([10000, 3, 2, 1, 4, 5, 100])).toEqual([1, 2, 3, 4, 5, 100, 10000]);
  });
  test("Should work with negative ints", () => {
    expect(bubbleSort([-2, 21, 4, 5])).toEqual([-2, 4, 5, 21]);
    expect(bubbleSort([-2, 231, 41, 5])).toEqual([-2, 5, 41, 231]);
  });
  test("Should work with empty arrays", () => {
    expect(bubbleSort([])).toEqual([]);
  });
});
