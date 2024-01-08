export default function hasValuesFromArray(set, array) {
  return array.every((elmt) => set.has(elmt));
}
