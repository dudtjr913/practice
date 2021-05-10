import { applyMiddleware, createStore } from 'redux';
import rootReducer from './rootReducer';
import { increment, decrement } from './counter';
import { composeWithDevTools } from 'redux-devtools-extension';
// import thunk from 'redux-thunk';

function createThunkMiddleware(extraArgument) {
  console.log(extraArgument, 'extraArgument');
  return ({ dispatch, getState }) => {
    console.log(dispatch, getState, 'dispatch, getState');
    return (next) => {
      console.log(next, 'next');
      return (action) => {
        console.log(action, 'action');
        if (typeof action === 'function') {
          console.log(getState);
          return action(dispatch, getState, extraArgument);
        }

        return next(action);
      };
    };
  };
}

const thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

const counter = document.querySelector('.counter');
const upButton = document.querySelector('.increment');
const downButton = document.querySelector('.decrement');

upButton.addEventListener('click', () => {
  store.dispatch(increment);
});

downButton.addEventListener('click', () => {
  store.dispatch((dispatch) => console.log('dispatch', dispatch));
});

store.subscribe(() => {
  counter.innerText = store.getState().counter.count;
});
