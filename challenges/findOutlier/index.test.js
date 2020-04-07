import { findOutlierSlow, findOutlierFast } from "./index";

describe("Finds outlier integer in an array slow", () => {
  test("Does it slow", () => {
    expect(findOutlierSlow([0, 1, 2])).toBe(1);
    expect(findOutlierSlow([1, 2, 3])).toBe(2);
    expect(findOutlierSlow([160, 3, 1719, 19, 11, 13, -21])).toBe(160);
    expect(findOutlierSlow([2, 4, 0, 100, 4, 11, 2602, 36])).toBe(11);
    expect(findOutlierSlow([9, 8, 6, 10, 12])).toBe(9);
    expect(findOutlierSlow([0, 0, 3, 0, 0])).toBe(3);
    expect(findOutlierSlow([1, 1, 0, 1, 1])).toBe(0);
    expect(findOutlierSlow([1, 1, 1, 0, 0, 1, 1])).toBe(0);
  });

  test("Does it fast", () => {
    expect(findOutlierFast([0, 1, 2])).toBe(1);
    expect(findOutlierFast([1, 2, 3])).toBe(2);
    expect(findOutlierFast([160, 3, 1719, 19, 11, 13, -21])).toBe(160);
    expect(findOutlierFast([2, 4, 0, 100, 4, 11, 2602, 36])).toBe(11);
    expect(findOutlierFast([9, 8, 6, 10, 12])).toBe(9);
    expect(findOutlierFast([0, 0, 3, 0, 0])).toBe(3);
    expect(findOutlierFast([1, 1, 0, 1, 1])).toBe(0);
  });
});
