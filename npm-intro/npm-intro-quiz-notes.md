# npm-intro-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is NPM?
  its the largest software registry that is used to share and borrow packages. its used to adapt packages of code for your apps or for you to reuse and share code with other users
- What is a package?
  bits of reusable code, also called modules
- What are some other popular package managers?
  Yarn and PNPM
- How can you create a `package.json` with `npm`?
  npm init --yes
- What is a dependency and how do you add one to a package?
  a dependency is an external software component that a given piece of software relies on in order to function properly
  it can be added to a package with npm install package-name
  ex. npm install jquery
- What happens when you add a dependency to a package with `npm`?
  it gets added to package.json
- What is a devDependency and how do you add one to a package?
  devDependencies are packages that are only used during development, such as eslint.
  they are installed by adding the --save-dev option when the package is installed
  ex. npm install eslint --save-dev
- How do you define and run `npm` scripts? Why are these useful?
  scripts are defined in the package.json file and are used to automate various tasks such as running tests, building applications, or any other custom task you want to perform

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
