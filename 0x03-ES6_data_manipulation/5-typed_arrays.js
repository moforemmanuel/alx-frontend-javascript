export default function createInt8TypedArray(length, position, value) {
  const buffer = ArrayBuffer(length);
  const int8view = new Int8Array(buffer);
  try {
    int8view[position] = value;
  } catch (error) {
    throw Error('Position outside range');
  }

  return int8view[position];
}
