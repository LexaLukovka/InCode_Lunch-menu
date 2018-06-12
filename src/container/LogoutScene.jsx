import React from 'react'
// import PropTypes from 'prop-types'
import Grid from '@material-ui/core/es/Grid/Grid'
import Header from '../component/Header'
import Logout from '../component/Logout'

const LogoutScene = () =>
  <Grid container justify="center">
    <Header />
    <Logout />
  </Grid>

LogoutScene.propTypes = {}

export default LogoutScene
