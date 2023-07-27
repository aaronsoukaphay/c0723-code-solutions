# dom-event-delegation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `event.target`?
  it is the target property of the event object, it is a reference to the element the event occurred upon
- Why is it possible to listen for events on one element that actually happen its descendent elements?
  event delegation utilizing event bubbling and event target
- What DOM element property tells you what type of element it is?
  tagName property
- What does the `element.closest()` method take as its argument and what does it return?
  it takes a selector in and returns the closest ancestor element OR itself
- How can you remove an element from the DOM?
  remove() method
- If you wanted to insert new clickable DOM elements into the page using JavaScript, how could you avoid adding an event listener to every new element individually?
  add the click event listener to the parent element and in the callback functino check if the event element is the correct one to react to but using event.target.tagName

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
