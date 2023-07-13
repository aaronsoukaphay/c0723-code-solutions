/* exported capitalize */
function capitalize(word) {
  const second = word.slice(1).toLowerCase();
  const first = word.charAt(0).toUpperCase();
  return first + second;
}
