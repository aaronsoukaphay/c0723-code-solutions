# es6-operators-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?
  && returns first falsy value, if both true it returns right operand
  || returns first truthy value, if both false,
  The logical AND operator returns true if both operands are truthy, otherwise it returns false.
  The logical OR operator returns true if at least one of the operands is truthy, otherwise it returns false. They can be used outside of if statements to build complex expressions that streamline code and make it more efficient and readable.
- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?
  AND operator:
  if the first operand is falsy, the second operand is not evaluated because the overall result will be false reagardless
  OR operator:
  if the first operand is truthy, the second operand is not evaluated because the overall result will be true regardless
- What is the `??` (nullish coalescing) operator and how does it differ from `||`?
  it returns the right operand if the left operand is null or undefined. it can be seen as a special case of the logical OR operator
  it differs from the OR operator because the OR operator returns the right operand if the left operand is ANY falsy value while the nullish coalescing operator is specific to only null or undefined
- What is the `?:` (ternary) operator? How does it differ from `if/else`?
  it takes a condition followed by a question mark, then an expression to execute if the condition is truthy followed by a colon, then the expression to execute if the condition is falsy
  ternary operators are essentially the same as if/else statements but with concise syntax and ternary operators can also return a value based on a condition
- What is the `?.` (optional chaining) operator? When would you use it?
  the optional chaining operator accesses an object's property or calls a function. if the object accessed or function called is null or undefined, the expression short-circuits and evaluates to undefined instead of throwing an error.
  optional chaining prevents you from explicitly testing and short-circuiting based on the state of each property before trying to access the next one. if the property is falsy like 0, it will not short-circuit since it only short-circuits if it is null or undefined this is particularly helpful in objects with more nested properties
- What is `...` (spread) syntax? How do you use it with arrays and objects?
  spread syntax can be used to copy arrays and objects and modify them in a more concise and efficient way.
  objects are surrounded by curly braces and key-value properties can be added to the right
  ex. {...obj, key: 'value'}
  arrays are surrounded by brackets and elements can be prepended or appended to the array
  ex. [1, ...iterableObj, 3, 'five', 6]
- What data types can be spread into an array? Into an object?
  only iterable objects can be spread in an array.
  objects and arrays can be spread into an object.
- How does spread syntax differ from rest syntax?
  spread syntax expands an array into its elements while rest syntax collects multiple elements and condenses them into a single element

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
