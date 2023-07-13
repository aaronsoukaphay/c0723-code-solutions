/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  const split = string.split('');
  const split2 = string.split('');
  split.splice(firstIndex, 1, split2[secondIndex]);
  split.splice(secondIndex, 1, split2[firstIndex]);
  return split.join('');
}
