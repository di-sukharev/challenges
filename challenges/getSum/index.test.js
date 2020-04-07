import getSum from "./index";

describe("Finds the sum of all the numbers between passed (a, b)", () => {
  test("Return one of arguments if they are equal", () => {
    expect(getSum(1, 1)).toBe(1);
  });
  test("Ordered", () => {
    expect(getSum(22, 504)).toBe(127029);
    expect(getSum(32, 1212)).toBe(734582);
  });
  test("Not ordered", () => {
    expect(getSum(50, 2)).toBe(1274);
    expect(getSum(4, 1)).toBe(10);
  });
  test("Non-positive", () => {
    expect(getSum(-1, 5)).toBe(14);
    expect(getSum(-132, 54)).toBe(-7293);
  });
});
