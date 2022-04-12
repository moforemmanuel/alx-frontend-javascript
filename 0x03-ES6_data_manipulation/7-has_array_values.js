export default function hasValuesFromArray(set, array) {
  // eslint-disable-next-line consistent-return
  array.forEach((item) => {
    if (!set.has(item)) return false;
  });

  return true;
}
