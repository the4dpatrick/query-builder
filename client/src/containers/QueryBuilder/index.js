import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../actions'

class QueryBuilder extends Component {
  render() {
    return (
      <div>
        <h1>QueryBuilder</h1>
        <button>Add</button>
        <button onClick={this.props.search}>Search</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(QueryBuilder)
