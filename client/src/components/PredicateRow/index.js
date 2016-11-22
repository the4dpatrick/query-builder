import React, { PropTypes as P } from 'react'
import Select from 'react-select'
import PredicateValue from '../PredicateValue'
import RemoveButton from '../RemoveButton'
import '../../../node_modules/react-select/dist/react-select.css'
import './index.css'

const predicateOptions = [
  {
    label: 'Visited Page Path',
    value: 'visitedPagePath'
  },
  {
    label: 'User First Name',
    value: 'userFirstName',
  },
  {
    label: 'User Last Name',
    value: 'userLastName',
  },
  {
    label: 'Page Response Time',
    value: 'pageResponseTime',
  },
  {
    label: 'Session Landing Path',
    value: 'sessionLandingPath',
  },
  {
    label: 'Screen Height',
    value: 'screenHeight',
  },
]

const PredicateRow = props => {
  const { onChangePredicate, onChangePredicateValue, onRemove, predicate } = props
  const { name, type, affirmative, value, unit, id, placeholder } = predicate
  return (
    <div className="predicate-row">
      <RemoveButton onClick={onRemove.bind(this, id)} />
      <Select
        value={name}
        options={predicateOptions}
        onChange={(val) => onChangePredicate(id, val.value)}
        className="predicate-row__select"
      />
      <PredicateValue
        onChange={onChangePredicateValue}
        predicateId={id}
        type={type}
        affirmative={affirmative}
        value={value}
        unit={unit}
        placeholder={placeholder}
      />
    </div>
  )
}

PredicateRow.propTypes = {
  onChangePredicate: P.func.isRequired,
  onChangePredicateValue: P.func.isRequired,
  onRemove: P.func.isRequired,
  predicate: P.object.isRequired,
}

export default PredicateRow
