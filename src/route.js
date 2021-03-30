window.addEventListener('load', () => {
  history.pushState({ path: '/' }, '', '/');

  document.querySelector('div').addEventListener('click', (e) => {
    e.preventDefault();
    const path = e.target.pathname;
    history.pushState({ path }, '', path);

    if (path === '/') {
      document.querySelector('#text').innerHTML = '<div>main</div>';
    } else if (path === '/first') {
      document.querySelector('#text').innerHTML = '<div>first</div>';
    } else if (path === '/second') {
      document.querySelector('#text').innerHTML = '<div>second</div>';
    }
  });

  console.log(location.pathname);
});

// 리다이랙트를 시키기 위해서는 dev-server에서 historyApiFallback : true 옵션을 주어야만 가능
