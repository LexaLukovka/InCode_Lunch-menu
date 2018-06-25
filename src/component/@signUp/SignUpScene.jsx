import React from 'react'
// import PropTypes from 'prop-types'
import Grid from '@material-ui/core/es/Grid/Grid'
import Header from '../Header/Header'
import SignUp from './SignUp/SignUp'

const SignUpScene = () =>
  <Grid container justify="center">
    <Header />
    <SignUp />
  </Grid>

SignUpScene.propTypes = {}

export default SignUpScene
