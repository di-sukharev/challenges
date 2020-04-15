import centuryFromYear from "./index.js";

describe("Century from year", () => {
  test("Should return century from any year", () => {
    expect(centuryFromYear(1)).toBe(1); // 1
    expect(centuryFromYear(12)).toBe(1); // 1
    expect(centuryFromYear(99)).toBe(1); // 1
    expect(centuryFromYear(100)).toBe(1); // 1
    expect(centuryFromYear(101)).toBe(2); // 2
    expect(centuryFromYear(123)).toBe(2); // 2
    expect(centuryFromYear(1705)).toBe(18); // 18
    expect(centuryFromYear(1900)).toBe(19); // 19
    expect(centuryFromYear(1901)).toBe(20); // 20
    expect(centuryFromYear(1601)).toBe(17); // 17
    expect(centuryFromYear(2000)).toBe(20); // 20
    expect(centuryFromYear(2001)).toBe(21); // 21
    expect(centuryFromYear(32001)).toBe(321); // 21
  });
});
