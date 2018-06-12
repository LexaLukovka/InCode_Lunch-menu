/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Grid from '@material-ui/core/es/Grid/Grid'
import { loadDishes } from './redux/actions/loadDishes.action'
import IndexScene from './container/IndexScene'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(loadDishes())
  }

  render() {
    return (
      <Grid container justify="center">
        <IndexScene />
      </Grid>
    )
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

export default connect()(App)
