import pigIt from "./index";

test("Translate string into a pig latin", () => {
  expect(pigIt("Pig latin is cool")).toBe("igPay atinlay siay oolcay");
  expect(pigIt("This is my string")).toBe("hisTay siay ymay tringsay");
});
