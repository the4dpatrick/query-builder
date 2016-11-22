import React, { PropTypes as P } from 'react'
import Select from 'react-select'
import '../../../node_modules/react-select/dist/react-select.css'
import './index.css'

const options = [
  { value: true, label: "contains" },
  { value: false, label: "does not contain" }
]

const ContainsPredicateValue = props => {
  const { className, onChange, value, affirmative, placeholder } = props
  const changePredicateValue = (newAffirmative=affirmative, newValue=value) => {
    onChange(Object.assign({ affirmative: newAffirmative}, { value: newValue }))
  }

  return (
    <div className={`${className} contains-predicate-value`}>
      <Select
        value={affirmative}
        options={options}
        onChange={(v) => changePredicateValue(v.value)}
      />
      <input
        type="text"
        defaultValue={value}
        onChange={(e) => changePredicateValue(undefined, e.target.value)}
        placeholder={placeholder}
      />
    </div>
  )
}

ContainsPredicateValue.propTypes = {
  onChange: P.func.isRequired,
  value: P.string.isRequired,
  affirmative: P.bool.isRequired,
  placeholder: P.string.isRequired,
}

export default ContainsPredicateValue
