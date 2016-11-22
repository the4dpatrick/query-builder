import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../actions'
import QueryBuilder from '../../components/QueryBuilder'
import './index.css'

class App extends Component {
  render() {
    const {
      addPredicate, search, changePredicate, changePredicateValue,
      removePredicate, results, query, predicates
    } = this.props

    const resultsElement = results.length ? (
      <div className="results">
        {results}
        <p className="results__subtext">Sent the following to the server:</p>
        <pre className="results__code">
          <code>
            {JSON.stringify(query, null, 4)}
          </code>
        </pre>
      </div>
    ) : null

    return (
      <div className="App">
        <h1>Query Builder</h1>
        <QueryBuilder
          onAdd={addPredicate}
          onSearch={search}
          onChangePredicate={changePredicate}
          onChangePredicateValue={changePredicateValue}
          onRemove={removePredicate}
          predicates={predicates}
        />
        {resultsElement}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    results: state.search,
    predicates: state.predicates,
    query: state.query
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
