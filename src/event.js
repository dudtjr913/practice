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

/* document.querySelector('.one').addEventListener('click', (e) => {
  console.log(e.target.innerText);
});

document.querySelector('.two > span:nth-child(2)').addEventListener('click', (e) => {
  e.stopImmediatePropagation();
});

document.querySelectorAll('.two > span').forEach((elem) => {
  elem.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log(e.target.innerText);
  });
});
 */

const handleButton = () => {
  console.log(this);
};

document.querySelector('button').addEventListener('click', () => handleButton());
