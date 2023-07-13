/* exported oddOrEven */
function oddOrEven(numbers) {
  const result = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      result.push('even');
    } else if (numbers[i] % 2 === 1) {
      result.push('odd');
    }
  }
  return result;
}
