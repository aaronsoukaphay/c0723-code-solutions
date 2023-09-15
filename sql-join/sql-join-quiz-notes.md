# sql-join-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is a foreign key?
  a column that links two tables together, must be the exact same name on both tables to work
- How do you join two SQL tables? (Provide at least two syntaxes.)
  select "column name"
  from "table1"
  join "table2" using ("foreign key") OR join "table2" on "products"."supplierId" = "suppliers"."supplierId"
  use the second way if the foreign key does not have the exact same name
- How do you temporarily rename columns or tables in a SQL statement?
  as keyword
- How do you create a one-to-many relationship between two tables?
  use one foreign key to link two tables
- How do you create a many-to-many relationship between two tables?
  use multiple foreign keys to link more than two tables

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
