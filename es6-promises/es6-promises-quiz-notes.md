# es6-promises-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the Event Queue model of Promises?
  While the code inside the promise constructor runs, the JavaScript event loop keeps running. It checks if there are any tasks in the queue that need to be executed. The event loop's job is to pick up tasks from the queue and execute them one by one
- What are the three states a Promise can be in?
  pending: initial state, neither fulfilled nor rejected
  fulfilled: meaning that the operation was successful
  rejected: meaning that the operation failed
- How do you handle the fulfillment of a Promise?
  .then()
- How do you handle the rejection of a Promise?
  .catch()

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
