export default function getStudentIdsSum(students) {
  let idsSum;
  if (Array.isArray(students)) {
    idsSum = students.reduce((acc, student) => acc + student.id);
  } else {
    idsSum = 0;
  }

  return idsSum;
}
