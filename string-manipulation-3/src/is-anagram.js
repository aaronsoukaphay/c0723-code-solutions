/* exported isAnagram */
function isAnagram(firstString, secondString) {
  const sortedFirst = firstString.split('').sort().join('');
  const sortedSecond = secondString.split('').sort().join('');
  let first = '';
  let second = '';
  for (let i = 0; i < sortedFirst.length; i++) {
    if (sortedFirst[i] !== ' ') {
      first += sortedFirst[i];
    }
  }
  for (let i = 0; i < sortedSecond.length; i++) {
    if (sortedSecond[i] !== ' ') {
      second += sortedSecond[i];
    }
  }
  if (first.length === second.length) {
    if (first === second) {
      return true;
    }
  }
  return false;
}
