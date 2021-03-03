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
    }, 3000);
  };
})();

const throttle = (() => {
  let result;

  return () => {
    if (result) return;

    result = setTimeout(() => {
      document.querySelector('#counter').innerText++;
      result = null;
    }, 100);
  };
})();

document.querySelector('#regular-input').addEventListener('keyup', regular);
document.querySelector('#debounced-input').addEventListener('keyup', debounce);
document.querySelector('.reset').addEventListener('click', () => {
  document.querySelector('#counter').innerText = 0;
});
window.addEventListener('scroll', throttle);
