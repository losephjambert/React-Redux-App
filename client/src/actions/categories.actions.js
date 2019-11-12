import axios from 'axios';
import { baseURL, SERVICES } from '../api';

const START_FETCHING_CATEGORIES = `START_FETCHING_CATEGORIES`;
const CATEGORIES_FETCH_SUCCESS = `CATEGORIES_FETCH_SUCCESS`;
const CATEGORIES_FETCH_FAILURE = `CATEGORIES_FETCH_FAILURE`;

const fetchCategories = () => async dispatch => {
  dispatch({ type: START_FETCHING_CATEGORIES });

  try {
    const response = await axios.get(`${baseURL}/${SERVICES.GET.categories}`)
    dispatch({ type: CATEGORIES_FETCH_SUCCESS, payload: response.data })
  } catch (error) {
    dispatch({ type: CATEGORIES_FETCH_FAILURE, payload: error })
  }
};

export { fetchCategories, START_FETCHING_CATEGORIES, CATEGORIES_FETCH_SUCCESS, CATEGORIES_FETCH_FAILURE };
