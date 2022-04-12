/* eslint-disable no-param-reassign */
export default function updateStudentGradeByCity(students, city, newGrades) {
  let updatedStudGradCity;
  if (Array.isArray(students) && Array.isArray(newGrades)) {
    const updatedStudents = students.map((student) => {
      const studentGrade = newGrades
        .filter((element) => element.studentId === student.id)
        .map((entity) => entity.grade)[0];

      student.grade = studentGrade || 'N/A';
      return student;
    });

    updatedStudGradCity = updatedStudents.filter((student) => student.location === city);
  } else {
    updatedStudGradCity = [];
  }

  return updatedStudGradCity;
}
