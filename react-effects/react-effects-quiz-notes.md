# react-effects-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- When is a component "mounted" to the DOM?
  when the component is rendered for the first time
  function is called when component is mounted and when the dependencies change
- What is a React Effect?
  a side effect caused by rendering
- When should you use an Effect and when should you not use an Effect?
  use Effect when you want to synchronize with some external system such as:
  ex. APIs, third-party widgets, network
  don't use Effect if your Effect only adjusts some state based on another state
- When do Effects run?
  at the end of a commit, after the screen updates
- What function is used to declare an Effect?
  useEffect()
- What are Effect dependencies and how do you declare them?
  Effect dependencies are code in the Effect that depends on certain props. Specifying the code (eg. isPlaying) as the dependency tells React that it should skip re-running your Effect if isPlaying is the same as it was during the previous render
  They are declared in an array as the second argument to the useEffect call
  ex. [isPlaying]
- Why would you want to clean up from an Effect?
  to prevent bugs where the code doesn't stop running even when the component is no longer on the screen and so that you can reset the state each time the component is rerendered
- How do you clean up from an Effect?
  return a cleanup function from your Effect
  ex. return () => {
  connection.disconnect()
  }
- When does the cleanup function run?
  each time before the Effect runs again

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
