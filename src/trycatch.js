const newError = () => {
  throw new Error('에러다!!!');
};

const standardError = () => {
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
