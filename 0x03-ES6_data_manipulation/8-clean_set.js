export default function cleanSet(set, startString) {
  return Array.from(set)
    .filter((entry) => entry.startsWith(startString))
    .map((item) => item.replace(startString, ''))
    .join('-');
}
