/* exported difference */
function difference(first, second) {
  const result = [];
  for (let i = 0; i < first.length; i++) {
    if (!second.includes(first[i])) {
      result.push(first[i]);
    }
  }
  for (let j = 0; j < second.length; j++) {
    if (!first.includes(second[j])) {
      result.push(second[j]);
    }
  }
  return result;
}
