/**
 * Class representing a classroom.
 */
export default class ClassRoom {
  /**
   * Create a classroom.
   * @param {number} maxStudentsSize - The maximum number of students that can be accommodated
   * in the classroom.
   */
  constructor(maxStudentsSize) {
    this._maxStudentsSize = maxStudentsSize;
  }
}
