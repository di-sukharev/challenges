import isValid from "./index.js";

describe("Century from year", () => {
  test("Should return century from any year", () => {
    expect(isValid("{{{")).toBeFalsy(); // false
    expect(isValid("{{}{}}")).toBeTruthy(); // true
    expect(isValid("{([])}")).toBeTruthy(); // true
    expect(isValid("{([[]])}")).toBeTruthy(); // true
    expect(isValid("(foo)")).toBeTruthy(); // true
    expect(isValid("(f[o]{o})")).toBeTruthy(); // true
    expect(isValid("[(){}()()]")).toBeTruthy(); // true
    expect(isValid("(foo")).toBeFalsy(); // false — нет закрывающей
    expect(isValid("{f[o}o]")).toBeFalsy(); // false — скобки пересекаются
    expect(isValid("{[]")).toBeFalsy(); // false
  });
});
