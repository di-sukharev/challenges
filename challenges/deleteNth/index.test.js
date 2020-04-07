import deleteNth from ".";

test("Deletes rest of numbers from array if number occurs more then N times", () => {
  expect(deleteNth([20, 37, 20, 21], 1)).toEqual([20, 37, 21]);
  expect(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3)).toEqual([1, 1, 3, 3, 7, 2, 2, 2]);
});
