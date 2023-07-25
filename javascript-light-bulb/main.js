let numberOfClicks = 0;

const $lightBulb = document.querySelector('.light-bulb');
const $row = document.querySelector('.row');

$lightBulb.addEventListener('click', handleClick);

function handleClick(event) {
  numberOfClicks++;
  if (numberOfClicks % 2 === 0) {
    $lightBulb.className = 'light-bulb ' + 'bright';
    $row.className = 'row ' + 'bright';
  } else {
    $lightBulb.className = 'light-bulb ' + 'dark';
    $row.className = 'row ' + 'dark';
  }
}
