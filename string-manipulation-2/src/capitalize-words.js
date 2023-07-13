/* exported capitalizeWords */
function capitalizeWords(string) {
  const newString = string.toLowerCase().split(' ');
  const result = [];
  for (let i = 0; i < newString.length; i++) {
    const firstLetter = newString[i].charAt(0).toUpperCase();
    const rest = newString[i].slice(1);
    result.push(firstLetter + rest);
  }
  return result.join(' ');
}
