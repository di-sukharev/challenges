function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function generateHashtag(str) {
  const trimmed = str.replace(/\b\s+\b/g, " ").trim();
  return trimmed && trimmed.length < 140
    ? `#${trimmed
        .split(" ")
        .map(capitalize)
        .join("")}`
    : false;
}
