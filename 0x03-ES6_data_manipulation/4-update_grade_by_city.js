export default function updateStudentGradeByCity(studentArray, city, newGradesArray) {
  return studentArray
    .filter((studentObj) => studentObj.location === city)
    .map((studentObj) => {
      const studentNewGrade = newGradesArray.find((grade) => grade.studentId === studentObj.id);
      let grade = 'N/A';
      if (studentNewGrade) {
        grade = studentNewGrade.grade;
      }
      return { ...studentObj, grade };
    });
}
