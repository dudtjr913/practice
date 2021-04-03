const newError = () => {
  throw new Error('에러다!!!');
};

const standardError = () => {
  // 그냥 throw 사용은 자제하자. new Error로 에러 처리를 할 수 있도록!!
  throw '기본적인 에러다!!!';
};

const tryCatchStandard = () => {
  try {
    error();
    console.log('성공');
  } catch (error) {
    console.log('실패');
    console.log(error);
  }
};

const tryCatchNew = () => {
  try {
    error();
    console.log('성공');
  } catch (error) {
    console.log('실패');
    console.log(error.message);
  }
};
