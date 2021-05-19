export const myStore = (reducer) => {
  let state;
  const listeners = [];

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  };

  const getState = () => {
    return state;
  };

  const subscribe = (listener) => {
    listeners.push(listener);
  };

  return { dispatch, getState, subscribe };
};
