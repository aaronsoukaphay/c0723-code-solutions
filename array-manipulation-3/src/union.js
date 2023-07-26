/* exported union */
function union(first, second) {
  const result = [];
  for (let i = 0; i < first.length; i++) {
    if (!result.includes(first[i])) {
      result.push(first[i]);
    }
  }
  for (let j = 0; j < second.length; j++) {
    if (!result.includes(second[j])) {
      result.push(second[j]);
    }
  }
  return result;
}
