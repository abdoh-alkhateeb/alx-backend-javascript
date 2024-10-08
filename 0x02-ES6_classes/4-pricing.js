import Currency from './3-currency'; // eslint-disable-line no-unused-vars

/**
 * Represents a pricing model that includes an amount and a currency.
 */
export default class Pricing {
  /**
   * Initializes a new instance of the Pricing class.
   *
   * @param {number} amount - The amount of the price.
   * @param {Currency} currency - The currency associated with the price.
   */
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  /**
   * Gets the amount of the price.
   *
   * @returns {number} The amount of the price.
   */
  get amount() {
    return this._amount;
  }

  /**
   * Gets the currency of the price.
   *
   * @returns {Currency} The currency associated with the price.
   */
  get currency() {
    return this._currency;
  }

  /**
   * Sets the amount of the price.
   *
   * @param {number} amount - The amount to set.
   */
  set amount(amount) {
    this._amount = amount;
  }

  /**
   * Sets the currency of the price.
   *
   * @param {Currency} currency - The currency to set.
   */
  set currency(currency) {
    this._currency = currency;
  }

  /**
   * Displays the full price in a formatted string.
   *
   * @returns {string} A string representation of the full price,
   * including the currency name and code.
   */
  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  /**
   * Converts a price amount based on a specified conversion rate.
   *
   * @param {number} amount - The amount to convert.
   * @param {number} conversionRate - The rate used to convert the amount.
   * @returns {number} The converted price amount.
   */
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
