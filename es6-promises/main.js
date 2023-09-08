import takeAChance from './take-a-chance.js';

takeAChance('Aaron')
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error.message);
  });
