const practicePromise = (url) => {
  return new Promise((resolve, reject) => {
    document.querySelector('#loading').classList.remove('hide');
    // 비동기 처리

    if (성공) {
      resolve();
      return;
    }

    if (실패) {
      reject();
      return;
    }
  });
};

practicePromise();
