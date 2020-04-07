import twoPairs from "./index";

test("Splits the string into pairs of two characters", () => {
  expect(twoPairs("abcdef")).toEqual(["ab", "cd", "ef"]);
  expect(twoPairs("abcdefg")).toEqual(["ab", "cd", "ef", "g_"]);
  expect(twoPairs("")).toEqual([]);
});
