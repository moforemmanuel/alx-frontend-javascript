export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const int8view = new Int8Array(buffer);
  // const data = new DataView(buffer);

  if (position > length - 1) {
    throw new Error('Position outside range');
  }

  int8view[position] = value;
  // data.setInt8(position, value);

  // return data;
  return int8view;
}
