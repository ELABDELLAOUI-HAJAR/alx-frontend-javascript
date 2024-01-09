export default function cleanSet(_set, _startString) {
  if (_set && (_set instanceof Set) && _startString && typeof (_startString) === 'string') {
    return Array.from(_set)
      .filter((x) => x && x.startsWith(_startString))
      .map((x) => x.replace(_startString, ''))
      .join('-');
  }
  return '';
}
