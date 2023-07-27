const $modalContainer = document.querySelector('.modal-container');

const $btnOpen = document.querySelector('.btn-open');

$btnOpen.addEventListener('click', openModal);

function openModal(event) {
  $modalContainer.className = 'modal-container';
}

const $btnClose = document.querySelector('.btn-close');

$btnClose.addEventListener('click', closeModal);

function closeModal(event) {
  $modalContainer.className = 'modal-container ' + 'hidden';
}
