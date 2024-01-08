export default function getStudentIdsSum(studentArray) {
  return studentArray.reduce((sumIds, current) => sumIds + current.id, 0);
}
