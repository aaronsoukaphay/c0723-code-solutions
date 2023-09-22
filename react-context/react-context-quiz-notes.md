# react-context-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the purpose of React "context"?
  to make information from the parent available to its children without explicitly passing it through props
- What values can be stored in context?
  application state, authentication data, api configurations, theme settings
- How do you create context and make it available to the components?
  create it with createContext()
  make context available to components by wrapping components in a context Provider and assigning it a value prop
  any component wrapped in the context Provider will have access to whatever is in the value prop
- How do you access the context values?
  useContext(someContext)
- When would you use context? (in addition to the best answer: "rarely")
  theming, current account, routing, managing state

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
