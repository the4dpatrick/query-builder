import React, { PropTypes as P } from 'react'
import './index.css'

const RemoveButton = props => {
  const { onClick } = props
  return (
    <button onClick={onClick} className="remove-button">
      -
    </button>
  )
}

RemoveButton.propTypes = {
  onClick: P.func.isRequired,
}

export default RemoveButton
