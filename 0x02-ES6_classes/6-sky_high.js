import Building from './5-building';

/**
 * Represents a skyscraper that extends the Building class,
 * with a specified number of floors.
 */
export default class SkyHighBuilding extends Building {
  /**
   * Initializes a new instance of the SkyHighBuilding class.
   *
   * @param {number} sqft - The square footage of the building.
   * @param {number} floors - The number of floors in the building.
   */
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  /**
   * Gets the number of floors in the skyscraper.
   *
   * @returns {number} The number of floors in the building.
   */
  get floors() {
    return this._floors;
  }

  /**
   * Provides an evacuation warning message specific to the skyscraper.
   *
   * @returns {string} A message indicating how to evacuate the building.
   */
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
