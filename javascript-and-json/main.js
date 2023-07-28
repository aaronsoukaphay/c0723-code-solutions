const books = [
  {
    isbn: '1',
    title: 'book1',
    author: 'author1',
  },
  {
    isbn: '2',
    title: 'book2',
    author: 'author2',
  },
  {
    isbn: '3',
    title: 'book3',
    author: 'author3',
  },
];

console.log('books:', books);
console.log('typeof books:', typeof books);

console.log('JSON books:', JSON.stringify(books));
console.log('typeof JSON books:', typeof JSON.stringify(books));

const student = '{"id":"12345","name":"Aaron Soukaphay"}';

console.log('student:', student);
console.log('typeof student:', typeof student);

const parsedStudent = JSON.parse(student);

console.log('parsedStudent:', parsedStudent);
console.log('typeof parsedStudent:', typeof parsedStudent);
