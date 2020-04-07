import sum from "./index";

test("adds 1 + 2 to equal 3", () => {
  expect(sum(3, 4)).toBe(7);
});
