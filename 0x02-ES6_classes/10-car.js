/**
 * Represents a car with specified brand, motor, and color.
 */
export default class Car {
  /**
   * Creates an instance of the Car class.
   *
   * @param {string} brand - The brand of the car.
   * @param {string} motor - The type of motor used in the car.
   * @param {string} color - The color of the car.
   */
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  /**
   * The species accessor that returns the constructor of the class.
   *
   * @static
   * @returns {Function} The constructor of the Car class.
   */
  static get [Symbol.species]() {
    return this;
  }

  /**
   * Clones the current car instance.
   *
   * This method creates a new instance of the class defined by the
   * Symbol.species accessor.
   *
   * @returns {Car} A new instance of the car.
   */
  cloneCar() {
    const Species = this.constructor[Symbol.species];
    return new Species();
  }
}
