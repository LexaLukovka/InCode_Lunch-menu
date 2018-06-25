/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom'
import { loadDishes, loadDishesSelect, loadModalData } from './redux/actions/load.action'
import IndexScene from './component/@index/IndexScene'
import SignUpScene from './component/@signUp/SignUpScene'
import SignInScene from './component/@signIn/SignInScene'
import Errors from './component/@errors/Errors'
import AdminScene from './component/@admin/AdminScene'
import StatisticsScene from './component/@statistics/StatisticsScene'
import VerifyEmailScene from './component/@emailVerification/VerifyEmailScene'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(loadDishes())
    this.props.dispatch(loadModalData())
    this.props.dispatch(loadDishesSelect())
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={IndexScene} />
          <Route path="/admin" component={AdminScene} />
          <Route path="/signUp" redirect component={SignUpScene} />
          <Route path="/signIn" component={SignInScene} />
          <Route path="/statistics" component={StatisticsScene} />
          <Route path="/verifyEmail" component={VerifyEmailScene} />
          <Route path="/error" component={Errors} />
          <Redirect from="*" to="/error" />
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
