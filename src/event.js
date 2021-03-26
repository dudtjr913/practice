document.querySelector('#fruits').addEventListener(
  'click',
  (e) => {
    console.log(e.eventPhase);
    console.log(e.target);
    console.log(e.currentTarget);
  },
  true,
);
