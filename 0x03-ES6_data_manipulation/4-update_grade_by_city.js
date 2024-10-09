export default function updateStudentGradeByCity(studentsList, city, newGrades) {
  return studentsList
    .filter((student) => student.location === city)
    .map((student) => ({
      ...student,
      grade: (
        newGrades.filter((newGrade) => newGrade.studentId === student.id)[0] || { grade: 'N/A' }
      ).grade,
    }));
}
