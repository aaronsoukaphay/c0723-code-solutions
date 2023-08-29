# react-rendering-lists-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- When would we want to dynamically create a list of React components?
  if you have data in the form of an array
- Why is it important for React components to be data-driven?
  if it is data-driven, the components get updated based on the data that gets passed in (constantly updated information)
- Where in the component code would a list of React components typically be built?
  within the component function
- What `Array` method is commonly used to create a list of React components?
  map method
- Why do components in a list need to have unique keys?
  it allows React to keep track of where elements are
  ex. for static lists its not needed but if list is dynamic keys are important to allow React to keep track of info
- What is the best value to use as a "key" prop when rendering lists?
  it has to be a unique ID that are usually obtained from the database

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
