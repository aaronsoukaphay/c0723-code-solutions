# express-hello-world-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is Express middleware?
  functions that have access to the request object(req), response object(res), and the next middleware function in the request-response cycle
- What is Express middleware useful for?
  making changes to the req and res objects, executing code, ending the request-response cycle, calling the next middleware function in the stack
- How do you mount a middleware with an Express application?
  .use()
- Which objects does an Express application pass to your middleware to manage the request/response lifecycle of the server?
  request(req), response(res), and next (must be the same order)

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
