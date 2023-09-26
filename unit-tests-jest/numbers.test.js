import { evenNumbers, toDollars, divideBy, multiplyBy } from './numbers';

describe('evenNumbers', () => {
  it('returns the even numbers', () => {
    const numbers = [1, 4, 5, 10, 0];
    const result = evenNumbers(numbers);
    expect(result).toEqual([4, 10, 0]);
  });
  it('returns the even numbers where some elements are NaN', () => {
    const numbers = [1, 4, 'foo', 'bar', 0];
    const result = evenNumbers(numbers);
    expect(result).toEqual([4, 0]);
  });
});

describe('toDollars', () => {
  it('returns number in dollars and cents format', () => {
    const amount = 23.1278;
    const result = toDollars(amount);
    expect(result).toEqual(`$23.13`);
  });
  it('returns number in dollars and cents format where amount is NaN', () => {
    const amount = 'foo';
    expect(() => toDollars(amount)).toThrow('amount must be a number');
  });
});

describe('divideBy', () => {
  it('returns numbers that have been divided by a given divisor', () => {
    const numbers = [5, 10, 15, 20];
    const divisor = 5;
    const result = divideBy(numbers, divisor);
    expect(result).toEqual([1, 2, 3, 4]);
  });
  it('returns numbers that have been divided by a given divisor where the divisor is NaN', () => {
    const numbers = [5, 10, 15, 20];
    const divisor = 'foo';
    expect(() => divideBy(numbers, divisor)).toThrow(
      'divisor must be a number'
    );
  });
});

describe('multiplyBy', () => {
  it('returns input object with values multiplied by multiplier', () => {
    const obj = {
      key1: 3,
      key2: 5,
      key3: 1,
      key4: 7,
    };
    const multiplier = 2;
    const result = multiplyBy(obj, multiplier);
    const expected = {
      key1: 6,
      key2: 10,
      key3: 2,
      key4: 14,
    };
    expect(result).toEqual(expected);
  });
  it('returns input object with values multiplied by multiplier where some values are strings', () => {
    const obj = {
      key1: 3,
      key2: 'foo',
      key3: 1,
      key4: 'bar',
    };
    const multiplier = 2;
    const result = multiplyBy(obj, multiplier);
    const expected = {
      key1: 6,
      key2: 'foo',
      key3: 2,
      key4: 'bar',
    };
    expect(result).toEqual(expected);
  });
});
