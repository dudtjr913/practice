const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

export const increment = {
  type: INCREMENT,
};

export const decrement = () => {
  return {
    type: DECREMENT,
  };
};

const initialState = {
  a: 0,
};

const dummy = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        a: state.a + 1,
      };
    case DECREMENT:
      return {
        ...state,
        a: state.a - 1,
      };
    default:
      return state;
  }
};

export default dummy;
