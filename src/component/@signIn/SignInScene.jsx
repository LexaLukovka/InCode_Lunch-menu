import React from 'react'
// import PropTypes from 'prop-types'
import Grid from '@material-ui/core/es/Grid/Grid'
import Header from '../Header/Header'
import SignIn from './SignIn/SignIn'

const SignInScene = () =>
  <Grid container justify="center">
    <Header />
    <SignIn />
  </Grid>

SignInScene.propTypes = {}

export default SignInScene
