export default function createInt8TypedArray(length, position, value) {
  const buffer = ArrayBuffer(length);
  const int8view = new Int8Array(buffer);

  if (position > length - 1) {
    throw new Error('Position outsid range');
  }

  int8view[position] = value;

  return int8view;
}
