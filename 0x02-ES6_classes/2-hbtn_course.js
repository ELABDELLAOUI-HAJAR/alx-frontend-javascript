export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  /* Name setter */
  set name(value) {
    if (typeof value !== 'string') {
      throw new Error('TypeError: Name must be a string');
    }
    this._name = value;
  }

  /* Name getter */
  get name() {
    return this._name;
  }

  /* Length setter */
  set length(value) {
    if (typeof value !== 'number') {
      throw new Error('TypeError: Length must be a number');
    }
    this._length = value;
  }

  /* Length getter */
  get length() {
    return this._length;
  }

  /* Students setter */
  set students(value) {
    if (!Array.isArray(value)) {
      throw new Error('TypeError: Students must be an array');
    }
    this._students = value;
  }

  /* Students getter */
  get students() {
    return this._students;
  }
}
