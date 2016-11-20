import {
  SEARCH,
  SEARCH_SUCCESS,
  SEARCH_ERROR
} from '../constants'
import { search as searchRequest } from '../utils'

export function search(query) {
  return dispatch => {
    dispatch({ type: SEARCH })
    searchRequest(query)
      .then(res => dispatch(searchSuccess(res.data)))
      .catch(err => dispatch(searchError(err)))
  }
}

export function searchSuccess(results) {
  return {
    type: SEARCH_SUCCESS,
    payload: results
  }
}

export function searchError(err) {
  return {
    type: SEARCH_ERROR,
    payload: err
  }
}
