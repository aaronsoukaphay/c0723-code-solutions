export function getFront(queue) {
  if (!queue) {
    return undefined;
  } else {
    return queue.peek();
  }
}

export function addToBack(queue, value) {
  queue.enqueue(value);
}

export function takeFront(queue) {
  if (!queue) {
    return undefined;
  } else {
    return queue.dequeue();
  }
}

export function isEmpty(queue) {
  return queue.peek() === undefined;
}
