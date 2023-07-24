function handleClick(event) {
  console.log('button clicked');
  console.log('event:', event);
  console.log('event.target:', document.querySelector('.click-button'));
}

const button = document.querySelector('.click-button');
button.addEventListener('click', handleClick);

function handleMouseover(event) {
  console.log('button hovered');
  console.log('event:', event);
  console.log('event.target:', document.querySelector('.hover-button'));
}

const hoverButton = document.querySelector('.hover-button');
hoverButton.addEventListener('mouseover', handleMouseover);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log('event:', event);
  console.log('event.target:', document.querySelector('.double-click-button'));
}

const doubleClickButton = document.querySelector('.double-click-button');
doubleClickButton.addEventListener('dblclick', handleDoubleClick);
