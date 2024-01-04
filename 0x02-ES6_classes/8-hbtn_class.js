export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  set size(value) {
    this._size = value;
  }

  get size() {
    return this._size;
  }

  set location(value) {
    this._location = value;
  }

  get location() {
    return this._location;
  }

  [Symbol.toPrimitive](cast) {
    if (cast === 'number') {
      return this._size;
    }
    if (cast === 'string') {
      return this._location;
    }
    return this;
  }
}
