# sql-mutations-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the SQL _CRUD_ operations?
  Create=Insert Read=Select Update=Update Delete=Delete
- How do you add a row to a SQL table?
  insert into "table" ("columns1", "column2", "column3")
  values('value 1', 'value 2', 'value 3')
- How do you add multiple rows to a SQL table at once?
  insert into "table" ("columns1", "column2", "column3")
  values('value 1', 'value 2', 'value 3'),
  ('value 1', 'value 2', 'value 3')
- How do you update rows in a database table?
  update "table"
  set "attribute" = 'new value'
  where "attribute" = 'value'
- How do you delete rows from a database table?
  delete
  from "table"
  where "attribute" = 'value'
- Why is it important to include a `where` clause in your `update` and `delete` statements?
  to prevent all the rows from being updated/deleted
- How do you accidentally delete or update all rows in a table?
  by not including the where clause
- How do you get back the modified row without a separate `select` statement?
  returning \*;

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
