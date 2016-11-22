import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import search from './search'
import predicates from './predicates'
import query from './query'

const rootReducer = combineReducers({
  routing,
  search,
  predicates,
  query
})

export default rootReducer
