import takeAChance from './take-a-chance.js';

const p1 = takeAChance('Aaron');

p1.then((value) => {
  console.log(value);
}).catch((e) => {
  console.error(e.message);
});
