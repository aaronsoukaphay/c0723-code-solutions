/* exported countdown */
function countdown(number) {
  const result = [];
  while (number >= 0) {
    result.push(number);
    number--;
  }
  return result;
}
