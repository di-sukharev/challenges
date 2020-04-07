import getMiddle from "./index";

test("Gets middle characters from a string", () => {
  expect(getMiddle("test")).toBe("es");
  expect(getMiddle("testing")).toBe("t");
  expect(getMiddle("middle")).toBe("dd");
  expect(getMiddle("A")).toBe("A");
});
