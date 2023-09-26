/**
 * Returns a new array that contains only the even numbers in the given array.
 */
export function evenNumbers(numbers) {
  return numbers.filter((n) => (isNaN(n) ? undefined : n % 2 === 0));
}

/**
 * Returns a number formatted in dollars and cents.
 * It works for both integer and fractional numbers.
 * That is, `toDollars(12)` returns `$12.00` and
 * `toDollars(11.341)` returns `$11.34`.
 */
export function toDollars(amount) {
  if (isNaN(amount)) throw new Error('amount must be a number');
  const rounded = Math.round((amount + Number.EPSILON) * 100) / 100;
  return `$${rounded}`;
}

/**
 * Returns a new array of numbers where every entry has been divided by the
 * given divisor. Does not modify the original array.
 * @param {Array} numbers The array of numbers to be divided by the divisor.
 * @param {number} divisor The number to divide into each element of `numbers`.
 * @returns a new array.
 */
export function divideBy(numbers, divisor) {
  const divided = [];
  if (isNaN(divisor)) throw new Error('divisor must be a number');
  for (let i = 0; i < numbers.length; i++) {
    divided.push(numbers[i] / divisor);
  }
  return divided;
}

/**
 * Modifies an object by multiplying the value of each key, but only if that
 * value is a number. Key names are arbitrary.
 * @param {Object} obj The object to modify.
 * @param {number} multiplier The number to multiply by.
 * @returns the input object.
 */
export function multiplyBy(obj, multiplier) {
  const result = {};
  Object.entries(obj).forEach(([key, value]) => {
    typeof value === 'number'
      ? (result[key] = value * multiplier)
      : (result[key] = value);
  });
  return result;
}
