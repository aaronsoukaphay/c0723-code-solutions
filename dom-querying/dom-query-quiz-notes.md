# dom-query-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
  helps us debug code by displaying the output of the program in the console
- What is a "model"?
  its a page so that programs can change the document structure, style, and content
- Which "document" is being referred to in the phrase Document Object Model?
  the html document
- What is the word "object" referring to in the phrase Document Object Model?
  it represents each individual element that makes up the DOM tree
- What is a DOM Tree?
  a diagram of html document tags in the html document
- Give two examples of `document` methods that retrieve a single element from the DOM.
  document.querySelector() and document.getElementById()
- Give one example of a `document` method that retrieves multiple elements from the DOM at once.
  document.querySelectorAll()
- Why might you want to assign the return value of a DOM query to a variable?
  you can use a for loop to loop through the results and allows us to reuse that variable and modify it
- What `console` method allows you to inspect the properties of a DOM element object?
  console.dir()
- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?
  html loads from top to bottom so it needs to read the contents on the page before doing any javascript functions
- What does `document.querySelector()` take as its argument and what does it return?
  it takes a css selector as an argument and returns the first element for the given css selector
- What does `document.querySelectorAll()` take as its argument and what does it return?
  it takes a css selector as an argument and returns all elements that match the given css selector

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
