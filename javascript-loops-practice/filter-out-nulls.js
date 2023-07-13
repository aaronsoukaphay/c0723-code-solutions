/* exported filterOutNulls */
function filterOutNulls(values) {
  const result = [];
  for (let i = 0; i < values.length; i++) {
    if (values[i] != null) {
      result.push(values[i]);
    }
  }
  return result;
}
