import React, { PropTypes as P } from 'react'
import Select from 'react-select'
import '../../../node_modules/react-select/dist/react-select.css'
import './index.css'

const options = [
  { value: true, label: "in between" },
  { value: false, label: "not in between" }
]

const InBetweenPredicateValue = props => {
  const { className, onChange, value, affirmative, unit } = props
  const changePredicateValue = (newAffirmative=affirmative, newMin=value[0], newMax=value[1]) => {
    onChange(Object.assign({ affirmative: newAffirmative}, { value: [newMin, newMax] }))
  }

  return (
    <div className={`${className} in-between-predicate-value`}>
      <span className="in-between-predicate-value__label">
        is
      </span>
      <Select
        value={affirmative}
        options={options}
        onChange={(v) => changePredicateValue(v.value)}
      />
      <input
        type="text"
        value={value[0]}
        placeholder="0"
        onChange={(e) => changePredicateValue(undefined, Number(e.target.value))}
        className="in-between-predicate-value__input"
      />
      <span className="in-between-predicate-value__label">
        and
      </span>
      <input
        type="text"
        value={value[1]}
        placeholder="100"
        onChange={(e) => changePredicateValue(undefined, undefined, Number(e.target.value))}
        className="in-between-predicate-value__input"
      />
      <span className="in-between-predicate-value__label">{unit}</span>
    </div>
  )
}

InBetweenPredicateValue.propTypes = {
  onChange: P.func.isRequired,
  value: P.array.isRequired,
  affirmative: P.bool.isRequired,
  unit: P.string.isRequired
}

export default InBetweenPredicateValue
