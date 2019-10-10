import axios from 'axios';

import {
  START_FETCHING_CATEGORIES,
  CATEGORIES_FETCH_SUCCESS,
  CATEGORIES_FETCH_FAILURE,
} from './categories.actionTypes';

import { baseURL, SERVICES } from '../api';

export const fetchCategories = () => dispatch => {
  dispatch({ type: START_FETCHING_CATEGORIES });

  axios
    .get(`${baseURL}/${SERVICES.GET.categories}`)
    .then(response => console.log(response))
    .catch(error => dispatch({ type: CATEGORIES_FETCH_FAILURE, payload: error }));
};
