import React, { Component, PropTypes as P } from 'react'
import PredicateRow from '../PredicateRow'
import './index.css'

const QueryBuilder = props => {
  const {
    onAdd, onSearch, onChangePredicate,
    onChangePredicateValue, onRemove, predicates
  } = props

  return (
    <div className="query-builder">
      <h2 className="query-builder__header">Search Dates: Today</h2>
      {predicates.map(predicate => {
        return (
          <PredicateRow
            onChangePredicate={onChangePredicate}
            onChangePredicateValue={onChangePredicateValue}
            onRemove={onRemove}
            key={predicate.id}
            predicate={predicate}
          />
        )
      })}
      <button
        onClick={onAdd}
        className="query-builder__button query-builder__button--add">
        Add
      </button>
      <button
        onClick={onSearch}
        className="query-builder__button query-builder__button--search">
        Search
      </button>
    </div>
  )
}

QueryBuilder.propTypes = {
  onAdd: P.func.isRequired,
  onSearch: P.func.isRequired,
  onChangePredicate: P.func.isRequired,
  onChangePredicateValue: P.func.isRequired,
  onRemove: P.func.isRequired,
  predicates: P.array.isRequired
}

export default QueryBuilder
