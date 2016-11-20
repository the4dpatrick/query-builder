import {
  SEARCH,
  SEARCH_SUCCESS,
  SEARCH_ERROR
} from '../constants'

const initialState = []

export default function search(state = initialState, action) {
  switch (action.type) {
    case SEARCH:
      return []
    case SEARCH_SUCCESS:
      return [].concat(action.payload)
    case SEARCH_ERROR:
    default:
      return state
  }
}
