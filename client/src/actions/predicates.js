import {
  PREDICATE_CHANGE,
  PREDICATE_VALUE_CHANGE,
  PREDICATE_ADD,
  PREDICATE_REMOVE
} from '../constants'
import { find } from 'lodash'
import uuid from 'uuid'
import predicates from '../resources/predicates.json'

const defaultPredicate = predicates[0]

export function addPredicate() {
  return {
    type: PREDICATE_ADD,
    payload: Object.assign(createUUIDObject(), defaultPredicate)
  }
}

export function removePredicate(id) {
  return {
    type: PREDICATE_REMOVE,
    payload: id
  }
}

export function changePredicate(id, name) {
  const newPredicate = find(predicates, p => p.name === name)
  return {
    type: PREDICATE_CHANGE,
    payload: {
      id,
      predicate: Object.assign({ id }, newPredicate)
    }
  }
}

export function changePredicateValue(id, changeObject) {
  return {
    type: PREDICATE_VALUE_CHANGE,
    payload: {
      id,
      changeObject
    }
  }
}

function createUUIDObject() {
  return { id: uuid.v1() }
}
