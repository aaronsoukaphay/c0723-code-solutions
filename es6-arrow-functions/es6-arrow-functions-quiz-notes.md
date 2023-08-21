# es6-arrow-functions-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the syntax for defining an arrow function?
  no function keyword, parameters wrapped in parenthases, arrow, code block
- When an arrow function's body is not surrounded in curly braces (_concise body syntax_), what changes in its functionality?
  if code block is surrounded by curly braces, the return keyword must be specified. if code block is not surrounded by curly braces (concise body syntax), the expression within the code block will be returned without the 'return' keyword
- When using _concise body syntax_, how do you return an object literal?
  wrap the object literal in parentheses
- In the expression
  ```js
  foo(() => 42);
  ```
  - Identify the arrow function
    function foo () {
    return 42
    }
  - How many arguments does the arrow function take?
    none
  - What value does it return?
    42
  - How many arguments are passed to the function `foo`?
    none
  - What type of argument is passed to the function `foo`?
    none
- In the expression
  ```js
  bar((y) => {
    console.log(`4y = ${4 * y}`);
  });
  ```
  - Identify the arrow function
    function bar(y) {
    console.log(`4y = ${4 * y}`)
    }
  - How many arguments does the arrow function take?
    1
  - What value does it return?
    nothing
  - How many arguments are passed to the function `bar`?
    1
  - What type of argument is passed to the function `bar`?
    number
  - When does the arrow function's code get executed?
    when the bar function is called
- How does the value of `this` differ between standard functions and arrow functions?
  arrow functions capture the surrounding 'this' context, while standard functions have their 'this' value determined by how they are invoked

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
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
