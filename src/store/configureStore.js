import { createStore } from 'redux';
import devTools from 'remote-redux-devtools';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, devTools());
}
