# javascript-view-swapping-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `event.target`?
  it is the target property of the event object, it is a reference to the element the event occurred upon
- What is the affect of setting an element to `display: none`?
  the element becomes completely invisible on the page and is removed from the document flow
- What does the `element.matches()` method take as an argument and what does it return?
  it takes in a string containing CSS selectors and returns true if the element matches and false otherwise
- How can you retrieve the value of an element's attribute?
  getAttribute()
- At what steps of the solution would it be helpful to log things to the console?
  at any step you are unsure what the value of something is
- If you were to add another tab and view to your HTML, but you didn't use event delegation, how would your JavaScript code be written instead?
  I would have to create an eventListener for that new tab
- If you didn't use a loop to conditionally show or hide the views in the page, how would your JavaScript code be written instead?
  the code would be a lot more messy and tedious

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
