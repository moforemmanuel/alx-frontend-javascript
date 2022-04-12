export default function getStudentIdsSum(students) {
  let idsSum;
  if (Array.isArray(students)) {
    idsSum = students.reduce((acc, student) => acc + student.id, 0);
  } else {
    idsSum = 0;
  }

  return idsSum;
}
