/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import { loadDishes } from './redux/actions/loadDishes.action'
import IndexScene from './container/IndexScene'
import SignUpScene from './container/SignUpScene'
import SignInScene from './container/SignInScene'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(loadDishes())
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={IndexScene} />
          <Route path="/signUp" redirect component={SignUpScene} />
          <Route path="/signIn" component={SignInScene} />
        </Switch>
      </BrowserRouter>
    )
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
}
App.defaultProps = {}

export default connect()(App)
