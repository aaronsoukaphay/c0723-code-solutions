/* exported ransomCase */
function ransomCase(string) {
  const chars = string.toLowerCase().split('');
  const result = [];
  for (let i = 0; i < chars.length; i++) {
    if (i % 2 === 0) {
      result.push(chars[i]);
    } else {
      result.push(chars[i].toUpperCase());
    }
  }
  return result.join('');
}
