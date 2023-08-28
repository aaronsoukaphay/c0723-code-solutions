# react-intro-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- How do you define a React component?
  a react component is one piece of the UI
- How do you use JSX in a React component?
  JSX is a syntax that lets you write HTML-like markup in javascript
- How do you declare the props a React component needs?
  props are declared in the parent component
- How do you pass props to a React component?
  props are passed as HTML attributes in tags
- How do you include JavaScript expressions in JSX?
  wrapped in curly braces
- What are React hooks and what are the three "Rules of Hooks"?
  react hooks are fuctions that start with "use". they are special functions that are only available while react is rendering
  rules of hooks
  1. hooks can only be called at the top level of your components or your own Hooks
  2. hooks cannot be called within conditions, loops, or other nested functions
  3. they must be called on every render (no conditional execution)
- How do you manage state in a React component?
  state is managed with the state variable and the state setter function.
  state variable keeps track of the value stored
  state setter function updates the state variable and triggers React to render the component again
- How do you handle events in React?
  with an event handler which is a function that is triggered in response to an event like clicking, hovering, focusing, etc
- How do you let a parent component know that an event happened?
  you pass the event handler for the child as a prop

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
