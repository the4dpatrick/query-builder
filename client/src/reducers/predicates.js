import {
  PREDICATE_CHANGE,
  PREDICATE_VALUE_CHANGE,
  PREDICATE_ADD,
  PREDICATE_REMOVE,
} from '../constants'
import { findIndex } from 'lodash'
import { predicates as mockPredicatesState } from '../../app-state.json'

// const initialState = []
const initialState = mockPredicatesState

export default function predicates(state = initialState, action) {
  // TODO: refactor DRY
  let matchingPredicateIndex
  switch (action.type) {
    case PREDICATE_CHANGE:
      matchingPredicateIndex = findIndex(state, p => p.id === action.payload.id)
      return [
        ...state.slice(0, matchingPredicateIndex),
        action.payload.predicate,
        ...state.slice(matchingPredicateIndex+1)
      ]
    case PREDICATE_VALUE_CHANGE:
      matchingPredicateIndex = findIndex(state, p => p.id === action.payload.id)
      return [
        ...state.slice(0, matchingPredicateIndex),
        Object.assign(state[matchingPredicateIndex], action.payload.changeObject),
        ...state.slice(matchingPredicateIndex+1)
      ]
    case PREDICATE_ADD:
      return state.concat(action.payload)
    case PREDICATE_REMOVE:
      matchingPredicateIndex = findIndex(state, p => p.id === action.payload)
      return [
        ...state.slice(0,matchingPredicateIndex),
        ...state.slice(matchingPredicateIndex+1)
      ]
    default:
      return state
  }
}
