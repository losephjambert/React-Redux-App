import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import categories from "./categories.reducer";

const rootReducer = combineReducers({
  categories
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
