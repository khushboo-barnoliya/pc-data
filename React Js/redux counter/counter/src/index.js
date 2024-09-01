// import { createStore } from 'redux';
const redux = require('redux');

const INITIAL_VALUE = {
  counter: 0,
}

const reducer = (store = INITIAL_VALUE, action) => {
  if (action.type === 'INC'){
    return {counter: store.counter + 1}
  }
}

const store = redux.createStore(reducer);

const subscriber = () => {
  const state = store.getState();
  console.log(state);
}

store.subscribe(subscriber);

store.dispatch({ type: 'INC' });

