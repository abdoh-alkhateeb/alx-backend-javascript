/**
 * Represents an airport with a name and code.
 */
export default class Airport {
  /**
   * Creates an instance of the Airport class.
   *
   * @param {string} name - The name of the airport.
   * @param {string} code - The IATA code of the airport.
   */
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  /**
   * Gets the string representation of the airport's code.
   *
   * @returns {string} The IATA code of the airport.
   */
  get [Symbol.toStringTag]() {
    return this._code;
  }
}
