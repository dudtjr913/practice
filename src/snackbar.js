document.querySelector('#click-btn').addEventListener('click', () => {
  const $snackbar = document.querySelector('.js-snackbar');
  $snackbar.innerText = '스낵바';
  document.querySelector('.js-snackbar').classList.add('show');
  setTimeout(() => {
    $snackbar.classList.remove('show');
  }, 1500);
});
