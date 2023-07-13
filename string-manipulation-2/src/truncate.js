/* exported truncate */
function truncate(length, string) {
  if (string.length <= length) {
    return string + '...';
  } else {
    return string.slice(0, length) + '...';
  }
}
