import generateHashtag from ".";

describe("Should generate #Hashtag from string: Hello World ==> #HelloWorld", () => {
  test("Doesn't accept empty strings", () => {
    expect(generateHashtag("")).toBe(false);
  });

  test("Doesn't accept long empty strings", () => {
    expect(generateHashtag(" ".repeat(200))).toBe(false);
  });

  test("Should handle a single word", () => {
    expect(generateHashtag("Codewars")).toBe("#Codewars");
  });

  test("Should remove spaces", () => {
    expect(generateHashtag("Codewars Is Nice")).toBe("#CodewarsIsNice");
  });

  test("Should capitalize first letters of words", () => {
    expect(generateHashtag("Codewars is nice")).toBe("#CodewarsIsNice");
  });

  test("Should trim spaces inside", () => {
    expect(generateHashtag(`code${" ".repeat(140)}wars`)).toBe("#CodeWars");
  });

  test("Should return false if the final word is longer than 140 chars.", () => {
    expect(generateHashtag(`Looo${"o".repeat(140)}ng Cat`)).toBe(false);
  });

  test("Should work with 139 chars", () => {
    expect(generateHashtag("a".repeat(139))).toBe(`#A${"a".repeat(138)}`);
  });

  test("Should nott work with 140 chars", () => {
    expect(generateHashtag("a".repeat(140))).toBe(false);
  });
});
