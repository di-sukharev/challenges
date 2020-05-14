import stripComments from "./index.js";

function checkComments(input, markers, expected) {
  const actual = stripComments(input, markers);
  return expect(actual).toEqual(expected);
}

test("works with apples", () => {
  checkComments(
    "apples, plums % and bananas\npears\noranges !applesauce",
    ["%", "!"],
    "apples, plums\npears\noranges"
  );
});

test("works with non-human chars", () => {
  checkComments("Q @b\nu\ne -e f g", ["@", "-"], "Q\nu\ne");
});
