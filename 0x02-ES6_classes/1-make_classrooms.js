import ClassRoom from './0-classroom';

/**
 * Initializes an array of ClassRoom objects with predefined room numbers.
 *
 * @returns {ClassRoom[]} An array of ClassRoom objects with room numbers 19, 20, and 34.
 */
export default function initializeRooms() {
  return [19, 20, 34].map((n) => new ClassRoom(n));
}
