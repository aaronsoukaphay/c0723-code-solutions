const $span = document.querySelectorAll('span');

document.addEventListener('keydown', keyDown);

let i = 0;

function keyDown(event) {
  if (event.key === $span[i].textContent) {
    $span[i].className = 'green';
    $span[i + 1].className = 'underline';
    i++;
  } else {
    $span[i].className = 'red';
  }
}
