/**
 * Represents a course at Holberton School.
 */
export default class HolbertonCourse {
  /**
   * Creates a new HolbertonCourse.
   * @param {string} name - The name of the course.
   * @param {number} length - The duration of the course in weeks.
   * @param {string[]} students - The list of students enrolled in the course.
   * @throws Will throw an error if name is not a string, length is not a number,
   * or students is not an array.
   */
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  /**
   * Gets the name of the course.
   * @returns {string} The name of the course.
   */
  get name() {
    return this._name;
  }

  /**
   * Gets the length of the course.
   * @returns {number} The length of the course.
   */
  get length() {
    return this._length;
  }

  /**
   * Gets the students enrolled in the course.
   * @returns {string[]} The list of students.
   */
  get students() {
    return this._students;
  }

  /**
   * Sets the name of the course.
   * @param {string} name - The new name of the course.
   * @throws Will throw an error if name is not a string.
   */
  set name(name) {
    if (!(typeof name === 'string')) throw Error('Name must be a string.');
    this._name = name;
  }

  /**
   * Sets the length of the course.
   * @param {number} length - The new length of the course.
   * @throws Will throw an error if length is not a number.
   */
  set length(length) {
    if (!(typeof length === 'number')) throw Error('length must be a number.');
    this._length = length;
  }

  /**
   * Sets the students enrolled in the course.
   * @param {string[]} students - The new list of students.
   * @throws Will throw an error if students is not an array.
   */
  set students(students) {
    if (!Array.isArray(students)) throw Error('students must be an array.');
    this._students = students;
  }
}
