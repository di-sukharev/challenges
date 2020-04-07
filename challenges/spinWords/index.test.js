import spinWords from "./index";

describe("Spins words with more then 5 length", () => {
  test("Single word", () => {
    expect(spinWords("Welcome")).toBe("emocleW");
  });
  test("3 words", () => {
    expect(spinWords("Hey fellow warriors")).toBe("Hey wollef sroirraw");
  });
  test("Words less then 5 length, should not change", () => {
    expect(spinWords("This is a test")).toBe("This is a test");
  });
  test("Long sentance", () => {
    expect(spinWords("Just kidding there is still one more")).toBe(
      "Just gniddik ereht is llits one more"
    );
  });
});
