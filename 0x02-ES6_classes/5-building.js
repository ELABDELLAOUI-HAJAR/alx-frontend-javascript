export default class Building {
  constructor(sqft) {
    if (this.constructor !== Building) {
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
    }
    this.sqft = sqft;
  }

  /* sqft Setter */
  set sqft(value) {
    this._sqft = value;
  }

  /* sqft Getter */
  get sqft() {
    return this._sqft;
  }
}
