import pigIt from "./index";

describe("Translates string into a pig latin", () => {
  test("Regular sentence", () => {
    expect(pigIt("Pig latin is cool")).toBe("igPay atinlay siay oolcay");
    expect(pigIt("This is my string")).toBe("hisTay siay ymay tringsay");
  });
  test("Single char", () => {
    expect(pigIt("P")).toBe("Pay");
    expect(pigIt("0")).toBe("0ay");
  });
  test("Single char in the begginng of the sentence", () => {
    expect(pigIt("P hello friend")).toBe("Pay ellohay riendfay");
    expect(pigIt("0 hi cool")).toBe("0ay ihay oolcay");
  });
  test("Single char in the end of the sentence", () => {
    expect(pigIt("Hello friend I")).toBe("elloHay riendfay Iay");
    expect(pigIt("Hi cooler I")).toBe("iHay oolercay Iay");
  });
});
