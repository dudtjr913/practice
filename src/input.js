const $form = document.querySelector('form');
$form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.dir(e.target['input-label']);
});
