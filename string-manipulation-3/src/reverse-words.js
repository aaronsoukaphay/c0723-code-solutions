/* exported reverseWords */
function reverseWords(string) {
  const splitted = string.split(' ');
  const result = [];
  for (let i = 0; i < splitted.length; i++) {
    result.push(splitted[i].split('').reverse().join(''));
  }
  return result.join(' ');
}
