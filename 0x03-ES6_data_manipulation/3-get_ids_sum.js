/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
export default function getStudentIdsSum(students) {
  let idsSum;
  if (Array.isArray(students)) {
    idsSum = students.reduce((acc, student) => acc += student.id);
  } else {
    idsSum = 0;
  }

  return idsSum;
}
