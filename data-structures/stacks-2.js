export function countValues(stack) {
  let count = 0;
  while (stack.peek() !== undefined) {
    stack.pop();
    count++;
  }
  return count;
}

export function maxValue(stack) {
  if (stack.peek() === undefined) {
    return -Infinity;
  }
  let highest = 0;
  while (stack.peek() !== undefined) {
    console.log(stack.peek());
    const current = stack.pop();
    console.log(current);
    if (current >= highest) {
      highest = current;
    }
  }
}
