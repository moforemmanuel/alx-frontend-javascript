export default function getListStudentIds(students) {
  let studentIds;
  if (Array.isArray(students)) {
    studentIds = students.map((student) => student.id);
  } else {
    studentIds = [];
  }

  return studentIds;
}
