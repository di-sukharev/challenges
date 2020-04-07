import getMiddle from "./index";

describe("Gets middle characters from a string", () => {
  test("In odd length string", () => {
    expect(getMiddle("testing")).toBe("t");
  });
  test("In even length string", () => {
    expect(getMiddle("test")).toBe("es");
    expect(getMiddle("middle")).toBe("dd");
  });
  test("In single length string", () => {
    expect(getMiddle("A")).toBe("A");
  });
});
