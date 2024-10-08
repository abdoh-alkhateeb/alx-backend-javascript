/**
 * Represents a currency with its code and name.
 */
export default class Currency {
  /**
   * Creates a new Currency.
   * @param {string} code - The code of the currency.
   * @param {string} name - The name of the currency.
   */
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  /**
   * Gets the code of the currency.
   * @returns {string} The code of the currency.
   */
  get code() {
    return this._code;
  }

  /**
   * Gets the name of the currency.
   * @returns {string} The name of the currency.
   */
  get name() {
    return this._name;
  }

  /**
   * Sets the code of the currency.
   * @param {string} value - The new code of the currency.
   */
  set code(value) {
    this._code = value;
  }

  /**
   * Sets the name of the currency.
   * @param {string} value - The new name of the currency.
   */
  set name(value) {
    this._name = value;
  }

  /**
   * Displays the full currency information.
   * @returns {string} The full currency information in the format "name (code)".
   */
  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
