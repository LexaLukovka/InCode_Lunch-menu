import React from 'react'
// import PropTypes from 'prop-types'
import Grid from '@material-ui/core/es/Grid/Grid'
import Header from '../component/Header/Header'
import SignIn from '../component/Header/SignIn'

const SignInScene = () =>
  <Grid container justify="center">
    <Header />
    <SignIn />
  </Grid>

SignInScene.propTypes = {}

export default SignInScene
