import {
  SEARCH,
  SEARCH_SUCCESS,
  SEARCH_ERROR,
  UPDATE_QUERY
} from '../constants'
import { search as searchRequest } from '../utils'

export function search() {
  return (dispatch, getState) => {
    dispatch({ type: SEARCH })
    const query = createQueryObject(getState().predicates)
    dispatch({ type: UPDATE_QUERY, payload: query })
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

function createQueryObject(predicates) {
  return predicates.reduce((acc, predicate) => {
    return Object.assign(acc, {
      [predicate.name]: {
        value: predicate.value,
        affirmative: predicate.affirmative 
      }
    })
  }, {})
}
