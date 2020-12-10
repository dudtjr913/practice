const $subway = document.body.querySelector('.sub');
const $th = document.body.querySelectorAll('th');
const $tbody = document.body.querySelector('tbody');
const $tr = Array.from(document.body.querySelectorAll('button'));

const arr = [];
const deleted = (value) => {
  const a = arr.filter((v) => v !== value);
  localStorage.setItem('key', JSON.stringify(a));
};

const make = (a) => {
  const $trr = document.createElement('tr');
  $trr.innerHTML = `
<td>${a}</td>
<td><button>삭제</button></td>
`;
  const $button = $trr.querySelector('button');
  $button.dataset.subway = a;
  $button.addEventListener('click', (e) => {
    $tbody.removeChild(e.target.parentElement.parentElement);
    deleted(e.target.dataset.subway);
  });

  $tbody.appendChild($trr);
  arr.push(a);
  localStorage.setItem('key', JSON.stringify(arr));
};

const subway = $tr.map((v) => v.dataset.subway);

$subway.addEventListener('click', (e) => {
  console.log(e.target.parentElement.parentElement.dataset.subway);
});

const $select = document.createElement('select');
subway.forEach((v) => {
  const $option = document.createElement('option');
  $option.value = v;
  $option.textContent = v;
  $select.appendChild($option);
});

document.body.appendChild($select);

const init = () => {
  const aa = JSON.parse(localStorage.getItem('key'));

  aa.forEach((v) => make(v));
};

init();
