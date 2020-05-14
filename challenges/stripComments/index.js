export default function stripComments(input, markers) {
  const result = input;
  const regexp = new RegExp(`\\s?[${markers.join("")}].*`, "gi");
  return result.replace(regexp, "").trim();
}
