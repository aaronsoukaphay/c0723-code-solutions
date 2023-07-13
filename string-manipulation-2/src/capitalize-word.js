/* exported capitalizeWord */
function capitalizeWord(word) {
  if (word.toLowerCase() === 'javascript') {
    const javascript = word.toLowerCase();
    const J = word[0].toUpperCase();
    const S = word[4].toUpperCase();
    return J + javascript.slice(1, 4) + S + javascript.slice(5);
  } else {
    const upper = word[0].toUpperCase();
    const lower = word.slice(1).toLowerCase();
    return upper + lower;
  }
}
