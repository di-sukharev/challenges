import binaryArrayToNumber from "./index";

describe("One's and Zero's", () => {
  test("Should convert binary array of 0's and 1's into decimal integer", () => {
    expect(binaryArrayToNumber([0, 0, 0, 1])).toBe(1);
    expect(binaryArrayToNumber([0, 0, 1, 0])).toBe(2);
    expect(binaryArrayToNumber([1, 1, 1, 1])).toBe(15);
    expect(binaryArrayToNumber([0, 1, 1, 0])).toBe(6);
  });
});
