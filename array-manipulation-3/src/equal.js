/* exported equal */
function equal(first, second) {
  const resultSecond = [];
  for (let i = 0; i < second.length; i++) {
    if (second[i] === first[i]) {
      resultSecond.push(second[i]);
    }
  }
  return first.length === resultSecond.length && first.length === second.length;
}
