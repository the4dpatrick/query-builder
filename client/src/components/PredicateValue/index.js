import React, { PropTypes as P } from 'react'
import Contains from '../ContainsPredicateValue'
import DoesEqual from '../DoesEqualPredicateValue'
import InBetween from '../InBetweenPredicateValue'
import './index.css'

const PredicateValue = props => {
  // decorate onChange with id
  const onChange = (changeObject) => props.onChange(props.predicateId, changeObject)

  switch(props.type) {
    case 'contains':
      return <Contains className="predicate-value" {...props} onChange={onChange}/>
    case 'doesEqual':
      return <DoesEqual className="predicate-value" {...props} onChange={onChange}/>
    case 'inBetween':
      return <InBetween className="predicate-value" {...props} onChange={onChange}/>
    default:
      return null
  }
}

PredicateValue.propTypes = {
  onChange: P.func.isRequired,
  value: P.oneOfType([P.array, P.string]).isRequired,
  affirmative: P.bool.isRequired,
  unit: P.string,
  placeholder: P.string,
  type: P.string.isRequired,
  predicateId: P.string.isRequired,
}

export default PredicateValue
