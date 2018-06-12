import React from 'react'
// import PropTypes from 'prop-types'
import Grid from '@material-ui/core/es/Grid/Grid'
import Header from '../component/Header'
import Login from '../component/Login'

const LoginScene = () =>
  <Grid container justify="center">
    <Header />
    <Login />
  </Grid>

LoginScene.propTypes = {}

export default LoginScene
