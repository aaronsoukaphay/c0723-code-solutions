# es6-async-await-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `async` and `await` keywords used for?
  adding async at the start of a function makes it an async function. adding await before a call to a function that returns a promise makes the code wait at that point until the promise is settled, at which point the fulfilled value of the promise is treated as a return value, or the rejected value is thrown
- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?
  async and await are read sequentially whereas Promise.then and Promise.catch code are spread across multiple files. async and await is easier to follow, understand, and reason about.
- When do you use `async`?
  when you want to use await
- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)
  use await with async functions and functions that return promises
  do not use it if you're working with synchronous code, non-async functions, or top-level code
- How do you handle errors with `await`?
  with the try/catch/finally exception handling mechanism
- What do `try`, `catch` and `throw` do? When do you use them?
  They are used for handling errors and exceptions. They are essential for writing robust code that can gracefully handle unexpected issues during execution.
- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?
  the Promise resolution or rejection will not be properly awaited or handled. there will be unresolved promises and unhandled promise rejections
- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?
  I prefer async/wait because it seems easier to read, easier to understand during chaining, and much cleaner looking than chains of promises.

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
