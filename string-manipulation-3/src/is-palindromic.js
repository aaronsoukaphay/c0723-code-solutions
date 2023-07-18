/* exported isPalindromic */
function isPalindromic(string) {
  let reversed = '';
  let normal = '';
  for (let i = string.length - 1; i >= 0; i--) {
    if (string[i] !== ' ') {
      reversed += string[i];
    }
  }
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      normal += string[i];
    }
  }
  return reversed === normal;
}
