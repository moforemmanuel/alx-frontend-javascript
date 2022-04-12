export default function getStudentsByLocation(students, city) {
  let studentLocs;
  if (Array.isArray(students)) {
    studentLocs = students.filter((student) => student.location === city);
  } else {
    studentLocs = [];
  }

  return studentLocs;
}
