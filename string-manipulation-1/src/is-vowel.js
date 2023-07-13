/* exported isVowel */
function isVowel(char) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 0; i < vowels.length; i++) {
    if (vowels[i] === char.toLowerCase()) {
      return true;
    }
  }
  return false;
}
