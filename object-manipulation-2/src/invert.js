/* exported invert */
function invert(source) {
  const result = {};
  for (const key in source) {
    result[source[key]] = key;
  }
  return result;
}
