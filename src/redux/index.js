import { applyMiddleware, createStore } from 'redux';
import rootReducer from './rootReducer';
import { increment, decrement } from './counter';
import { composeWithDevTools } from 'redux-devtools-extension';
// import thunk from 'redux-thunk';

function createThunkMiddleware(extraArgument) {
  return ({ dispatch, getState }) => {
    return (next) => {
      return (action) => {
        if (typeof action === 'function') {
          console.log(action, 'action');
          return action(dispatch, getState, extraArgument);
        }
        console.log('next', next);

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
  store.dispatch(increment);
});

store.subscribe(() => {
  counter.innerText = store.getState().counter.count;
  console.log(store.getState());
});
