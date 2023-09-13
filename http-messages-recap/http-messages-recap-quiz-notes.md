# http-messages-recap-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is a client?
  service requesters
- What is a server?
  providers of a resource or service
- Which HTTP method does a browser issue to a web server when you visit a URL?
  GET
- What is on the first line of an HTTP **request** message?
  HTTP method, request target (URL), and HTTP version
  ex. GET /background.png HTTP/1.0
- What is on the first line of an HTTP **response** message?
  protocol version, status code, status text (informational text description of the status code)
  ex. HTTP/1.1 404 Not Found
- What are HTTP headers?
  let the client and server pass additional information with an HTTP request or response
- Is a body required for a valid HTTP message?
  no, not all HTTP messages have a body

  all status codes are 100 or greater
  100 range: informational
  200 range: success
  300 range: redirection
  400 range: client error
  500 range: server error

  read: GET
  create: POST
  update: PUT
  delete: DELETE

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
