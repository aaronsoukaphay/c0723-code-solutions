/* exported zip */
function zip(first, second) {
  const result = [];
  if (first.length <= second.length) {
    for (let i = 0; i < first.length; i++) {
      const subArray = [];
      subArray.push(first[i], second[i]);
      result.push(subArray);
    }
  } else {
    for (let i = 0; i < second.length; i++) {
      const subArray = [];
      subArray.push(first[i], second[i]);
      result.push(subArray);
    }
  }
  return result;
}
