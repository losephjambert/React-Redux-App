import { START_FETCHING_CATEGORIES, CATEGORIES_FETCH_SUCCESS, CATEGORIES_FETCH_FAILURE } from '../actions';
import { initialState } from './initialState';

export default (state = initialState.categories, action) => {
  switch (action.type) {
    case START_FETCHING_CATEGORIES:
      return state;
    case CATEGORIES_FETCH_SUCCESS:
      return state;
    case CATEGORIES_FETCH_FAILURE:
      return state;
    default:
      console.log('categories reducer default', state);
      return state;
  }
};
