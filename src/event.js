document.querySelector('#fruits').addEventListener('click', (e) => {
  console.log(e);
});

document.querySelector('#apple').addEventListener('click', (e) => {
  e.stopImmediatePropagation();
  console.log(e);
});

document.querySelector('#apple').addEventListener('click', (e) => {
  console.log(e);
});

document.querySelector('#input').addEventListener('keyup', (e) => {
  if (e.keyCode === 229) return;
  console.log(e.target.value);
});
