export default function cleanSet(set, startString) {
  if (!(typeof startString === 'string') || startString === '') return '';

  return [...set]
    .filter((item) => typeof item === 'string' && item.startsWith(startString))
    .map((string) => string.slice(startString.length))
    .join('-');
}
