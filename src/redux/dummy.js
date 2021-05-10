export const asd = {
  type: 'ASD',
};

export const zxc = {
  type: 'ZXC',
};

const dummyData = {
  a: 1,
  b: 2,
};

const dummy = (state = dummyData, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        a: state.a + 1,
      };
    case 'ZXC':
      return {
        ...state,
        b: state.b - 1,
      };
    default:
      return state;
  }
};

export default dummy;
