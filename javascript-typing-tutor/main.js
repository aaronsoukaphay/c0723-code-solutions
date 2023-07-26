const $span = document.querySelectorAll('span');
console.log($span);

document.addEventListener('keydown', keyDown);

function keyDown(event) {
  let i = 0;
  if (event.key === $span[i]) {
    $span[i].className = 'correct';
  } else {
    $span[i].className = 'wrong';
  }
  i++;
}
