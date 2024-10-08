/**
 * Represents a Holberton class with a specified size and location.
 */
export default class HolbertonClass {
  /**
   * Creates an instance of the HolbertonClass.
   *
   * @param {number} size - The size of the class.
   * @param {string} location - The location of the class.
   */
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  /**
   * Converts the instance to a primitive value based on the provided conversion type.
   *
   * @param {string} conversionType - A hint indicating the desired type of conversion.
   * Possible values are 'number' for size and 'string' for location.
   * @returns {number|string|Object} The size as a number if conversionType is 'number',
   * the location as a string if conversionType is 'string', or the instance itself
   * otherwise.
   */
  [Symbol.toPrimitive](conversionType) {
    if (conversionType === 'number') {
      return this._size;
    }

    if (conversionType === 'string') {
      return this._location;
    }

    return this;
  }
}
