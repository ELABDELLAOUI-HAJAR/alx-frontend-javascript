export default function getStudentsByLocation(studentArray, city) {
  return studentArray.filter((studentObj) => studentObj.location === city);
}
