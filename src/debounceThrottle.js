const regular = (e) => {
  document.querySelector('.regular-rendered-text').innerText = e.target.value;
};

const debounce = (() => {
  let result;
  return (e) => {
    if (result) {
      clearTimeout(result);
    }
    result = setTimeout(() => {
      document.querySelector('.debounced-rendered-text').innerText =
        e.target.value;
    }, 300);
  };
})();

document.querySelector('#regular-input').addEventListener('keyup', regular);
document.querySelector('#debounced-input').addEventListener('keyup', debounce);
