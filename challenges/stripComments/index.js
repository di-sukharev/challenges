export default function stripComments(input, markers) {
  let result = input;
  for (const marker of markers) {
    const regexp = new RegExp(`\\s?(${marker.match(/[$^?]/) ? `\\${marker}` : marker}.*)`, "gim");
    result = result.replace(regexp, "");
  }
  return result.trim();
}
