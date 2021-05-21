import { applyMiddleware, createStore } from 'redux';
import rootReducer from './rootReducer';
import { increment, decrement } from './counter';
import { composeWithDevTools } from 'redux-devtools-extension';
import { myStore } from './myredux';
import CodeMirror from 'codemirror';
// import thunk from 'redux-thunk';

const textArea = document.querySelector('.codemirror');

console.log(textArea);

const codemirror = CodeMirror.fromTextArea(textArea);

console.log(codemirror);

/* const counter = document.querySelector('.counter');
const upButton = document.querySelector('.increment');
const downButton = document.querySelector('.decrement');

const initState = {
  count: 0,
};

const reducer = (state = initState, action) => {
  if (action.type === 'INCREASE') {
    return { ...state, count: state.count + 1 };
  }

  if (action.type === 'DECREASE') {
    return { ...state, count: state.count - 1 };
  }
};

const store = myStore(reducer);

upButton.addEventListener('click', () => {
  store.dispatch({ type: 'INCREASE' });
});

downButton.addEventListener('click', () => {
  store.dispatch({ type: 'DECREASE' });
});

store.subscribe(() => {
  counter.innerText = store.getState().count;
});

/* function createThunkMiddleware(extraArgument) {
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
 */
