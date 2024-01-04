export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  /* Code Setter */
  set code(value) {
    if (typeof value !== 'string') {
      throw new Error('TypeError: Code must be a string');
    }
    this._code = value;
  }

  /* Code Getter */
  get code() {
    return this._code;
  }

  /* Name Setter */
  set name(value) {
    if (typeof value !== 'string') {
      throw new Error('TypeError: Name must be a string');
    }
    this._name = value;
  }

  /* Name Getter */
  get name() {
    return this._name;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
