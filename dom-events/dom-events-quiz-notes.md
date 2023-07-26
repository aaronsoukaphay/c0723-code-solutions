# dom-events-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
  for debugging and to see what our code is doing
- What is the purpose of events and event handling?
  events are things that happen in the system. the event listener listens out for the event and the event handler is the code that is run in response to it happening.
- Are all possible parameters required to use a JavaScript method or function?
  no, parameters are optional
- What method of element objects lets you set up a function to be called when a specific type of event occurs?
  addEventListener()
- What is a callback function?
  it is a function passed into another function as an argument that is invoked inside the outer function to complete some sort of action
- What object is passed into an event listener callback when the event fires?
  event object
- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
  it is the element that is being interacted with, you can check it in the console.log or mdn
- What is the difference between these two snippets of code?
  `js
element.addEventListener('click', handleClick)
`
  `js
element.addEventListener('click', handleClick())
`
  in the top one, it is passing a reference to the function, do this in a callback function
  in the bottom one, the function is being called directly, do not do this in a callback function

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
