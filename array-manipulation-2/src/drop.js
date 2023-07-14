/* exported drop */
function drop(array, count) {
  const result = [];
  for (let i = count; i < array.length; i++) {
    if (array.length > 0) {
      result.push(array[i]);
    } else {
      return [];
    }
  }
  return result;
}
