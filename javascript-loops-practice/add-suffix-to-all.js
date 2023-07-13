/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  const result = [];
  for (let i = 0; i < words.length; i++) {
    result.push(words[i] + suffix);
  }
  return result;
}
