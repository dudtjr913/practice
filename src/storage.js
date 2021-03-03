const arr = [
  {
    count: 1,
  },
  {
    count: 2,
  },
  {
    count: 3,
  },
  {
    count: 4,
  },
  {
    count: 5,
  },
  {
    count: 6,
  },
  {
    count: 7,
  },
  {
    count: 8,
  },
  {
    count: 9,
  },
  {
    count: 10,
  },
];

localStorage.setItem('pra', JSON.stringify(arr));
const a = JSON.parse(localStorage.getItem('pra'));

const indexA = a.findIndex((value) => value.count === 5);
a.splice(indexA, 1);

localStorage.setItem('pra', JSON.stringify(a));

document.querySelector('#save-btn').addEventListener('click', (e) => {
  console.dir(e.target.dataset.save);
});
