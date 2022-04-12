export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) throw new Error('Cannot process');

  // map.forEach((key, value) => {
  //   if (value === 1) {
  //     map.set(key, 100);
  //   }
  // });

  // return map;

  for (const [key, value] of map) {
    if (value === 1) {
      map.set(key, 100);
    }
  }

  return map;
}
