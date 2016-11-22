import {
  UPDATE_QUERY,
} from '../constants'

const initialState = {}

export default function query(state = initialState, action) {
  switch (action.type) {
    case UPDATE_QUERY:
      return action.payload
    default:
      return state
  }
}
