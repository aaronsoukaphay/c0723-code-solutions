/* exported getWords */
function getWords(string) {
  const empty = [];
  if (string) {
    return string.split(' ');
  } else {
    return empty;
  }
}
