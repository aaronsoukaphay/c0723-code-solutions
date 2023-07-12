const a = 1;
const b = 2;
const c = 3;

console.log('maximum value:', Math.max(a, b, c));

const heroes = ['superman', 'batman', 'ironman', 'hulk'];
let randomNumber = Math.random();
randomNumber *= heroes.length;
const randomIndex = Math.floor(randomNumber);

console.log('randomIndex:', randomIndex);

const randomHero = heroes[randomIndex];

console.log('randomHero:', randomHero);

const library = [
  { title: 'book1', author: 'author1' },
  { title: 'book2', author: 'author2' },
  { title: 'book3', author: 'author3' },
];

const lastBook = library.pop();

console.log('lastBook:', lastBook);

const firstBook = library.shift();

console.log('firstBook:', firstBook);

const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};

const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log('library:', library);

const fullName = 'Aaron Soukaphay';
const firstAndLastName = fullName.split(' ');

console.log('firstAndLastName:', firstAndLastName);

const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();

console.log('sayMyName:', sayMyName);
