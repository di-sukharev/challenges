import uniqueInOrder from "./index";

test("UniqueInOrder", function() {
  expect(uniqueInOrder("AAAABBBCCDAABBB")).toEqual(["A", "B", "C", "D", "A", "B"]);
  expect(uniqueInOrder("BBBCCDAABBB")).toEqual(["B", "C", "D", "A", "B"]);
  expect(uniqueInOrder("AAAABBBDAABBB")).toEqual(["A", "B", "D", "A", "B"]);
  expect(uniqueInOrder("AAAACCDAABBB")).toEqual(["A", "C", "D", "A", "B"]);
});
