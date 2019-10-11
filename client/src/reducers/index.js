import { combineReducers, createStore } from 'redux';

import categories from './categories.reducer';

const rootReducer = combineReducers({
  categories,
});

const store = createStore(rootReducer);

export default store;
