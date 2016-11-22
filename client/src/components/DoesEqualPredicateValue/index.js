import React, { PropTypes as P } from 'react'
import Select from 'react-select'
import '../../../node_modules/react-select/dist/react-select.css'
import './index.css'

const options = [
  { value: true, label: "does equal" },
  { value: false, label: "does not equal" }
]

const DoesEqualPredicateValue = props => {
  const { className, onChange, value, affirmative, unit, placeholder } = props

  const changePredicateValue = (newAffirmative=affirmative, newValue=value) => {
    onChange(Object.assign({ affirmative: newAffirmative}, { value: newValue }))
  }

  return (
    <div className={`${className} does-equal-predicate-value`}>
      <Select
        value={affirmative}
        options={options}
        onChange={(v) => changePredicateValue(v.value)}
      />
      <input
        type="text"
        value={value[0]}
        onKeyUp={(e) => changePredicateValue(undefined, e.target.value)}
        placeholder={placeholder}
      />
    </div>
  )
}

DoesEqualPredicateValue.propTypes = {
  onChange: P.func.isRequired,
  value: P.string.isRequired,
  affirmative: P.bool.isRequired,
  placeholder: P.string.isRequired
}

export default DoesEqualPredicateValue
