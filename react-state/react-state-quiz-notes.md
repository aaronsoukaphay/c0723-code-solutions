# react-state-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are _hooks_ in React?
  functions that start with 'use' followed by an uppercase letter
  hooks get special treatment in React and must follow the "Rules of Hooks"
- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))
  they can only be called from React components and other hooks
  they must be called on every render (no conditional execution)
- What is the purpose of state in React?
  to allow us to modify certain components without re-rendering the whole page
- Why can't we just maintain state in a local variable?
  every time the component is called, local variables get reset, so they do not retain their values across renderings
- What two actions happen when you call a `state setter` function?
  first, react's cache of the state value is updated with the new value
  second, react schedules a re-render of the component (recursively for all other components that depend on this state)
- When does the local `state variable` get updated with the new value?
  once the page gets re-rendered

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
