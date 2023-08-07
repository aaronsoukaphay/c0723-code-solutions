let counter = 4;

const $display = document.querySelector('.countdown-display');

const intervalID = setInterval(countdown, 1000);

function countdown() {
  counter--;
  if (counter !== 0) {
    $display.textContent = counter;
  } else {
    clearInterval(intervalID);
    $display.textContent = '~Earth Beeeelooowww Us~';
  }
}
