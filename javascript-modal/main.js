const $modal = document.querySelector('.modal');
const $overlay = document.querySelector('.overlay');
const $openModalBtn = document.querySelector('.btn-open');
const $closeModalBtn = document.querySelector('.btn-close');

$openModalBtn.addEventListener('click', openModal);

function openModal(event) {
  $modal.className = 'modal';
  $overlay.className = 'overlay';
}

$closeModalBtn.addEventListener('click', closeModal);

function closeModal(event) {
  $modal.className = 'modal ' + 'hide';
  $overlay.className = 'overlay ' + 'hide';
}
