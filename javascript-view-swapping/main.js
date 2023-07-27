const $tabContainer = document.querySelector('.tab-container');
const $tabs = document.querySelectorAll('.tab');
const $views = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', handleClick);

function handleClick(event) {
  if (event.target.matches('.tab')) {
    for (const tab of $tabs) {
      if (tab === event.target) {
        tab.className = 'tab active';
      } else {
        tab.className = 'tab';
      }
    }
    const $dataView = event.target.getAttribute('data-view');
    for (const view of $views) {
      if (view.getAttribute('data-view') !== $dataView) {
        view.className = 'view hidden';
      } else {
        view.className = 'view';
      }
    }
  }
}
