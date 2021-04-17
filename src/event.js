/* document.querySelector('#fruits').addEventListener('click', (e) => {
  console.log(e);
});

document.querySelector('#apple').addEventListener('click', (e) => {
  e.stopImmediatePropagation();
  console.log(e);
});

document.querySelector('#apple').addEventListener('click', (e) => {
  console.log(e);
});

document.querySelector('#input').addEventListener('input', (e) => {
  console.dir(e.target);
});
 */

document.querySelector('form').addEventListener('change', (e) => console.log(e.target.value));
