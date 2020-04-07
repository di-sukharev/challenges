import snail from "./index";

describe("Does snail sort", () => {
  test("With empty matrix", () => {
    expect(snail([[]])).toEqual([]);
  });

  test("With 3 rows 3 columns matrix", () => {
    expect(snail([[1]])).toEqual([1]);
    expect(
      snail([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ])
    ).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]);
  });

  test("With 5 rows 5 columns matrix", () => {
    expect(
      snail([
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15],
        [16, 17, 18, 19, 20],
        [21, 22, 23, 24, 25],
      ])
    ).toEqual([
      1,
      2,
      3,
      4,
      5,
      10,
      15,
      20,
      25,
      24,
      23,
      22,
      21,
      16,
      11,
      6,
      7,
      8,
      9,
      14,
      19,
      18,
      17,
      12,
      13,
    ]);
  });
});
