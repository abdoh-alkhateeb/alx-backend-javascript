/**
 * Represents a building with a specified square footage.
 * This class is designed to be extended. Any subclass must implement
 * the `evacuationWarningMessage` method.
 */
export default class Building {
  /**
   * Creates an instance of the Building class.
   *
   * @param {number} sqft - The square footage of the building.
   * @throws {Error} If a subclass does not implement the
   * `evacuationWarningMessage` method.
   */
  constructor(sqft) {
    this._sqft = sqft;

    if (this.constructor !== Building) {
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
    }
  }

  /**
   * Gets the square footage of the building.
   *
   * @returns {number} The square footage of the building.
   */
  get sqft() {
    return this._sqft;
  }
}
