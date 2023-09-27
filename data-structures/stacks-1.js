export function getTop(stack) {
  if (!stack) {
    return undefined;
  } else {
    return stack.peek();
  }
}

export function addToTop(stack, value) {
  stack.push(value);
}

export function takeTop(stack) {
  if (!stack) {
    return undefined;
  } else {
    return stack.pop();
  }
}

export function isEmpty(stack) {
  return stack.peek() === undefined;
}
