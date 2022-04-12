/* eslint-disable operator-linebreak */
export default function cleanSet(set, startString) {
  // return Array.from(set)
  //   .filter((entry) => entry.startsWith(startString))
  //   .map((item) => item.replace(startString, ''))
  //   .join('-');

  const str = [];

  if (
    typeof set !== 'object' ||
    typeof startString !== 'string' ||
    startString.length === 0
  ) {
    return '';
  }

  for (const item of set) {
    if (item && item.startsWith(startString)) {
      str.push(item.slice(startString.length));
    }
  }

  return str.join('-');
}
