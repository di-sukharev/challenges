import binarySearch from "./index.js";

describe("Binary Search", () => {
  test("Should return index of finded value in sorted array", () => {
    expect(binarySearch([1, 3, 5, 6, 7, 8, 9], 5)).toBe(2);
    expect(binarySearch([1, 3, 5, 6, 7, 8, 9], 4)).toBeFalsy();
    expect(binarySearch([1, 3, 5, 6, 7, 8, 9], 15)).toBeFalsy();
  });
});
