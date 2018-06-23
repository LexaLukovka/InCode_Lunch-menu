/* eslint-disable react/prefer-stateless-function */
import React from 'react'
// import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Grid from '@material-ui/core/es/Grid/Grid'
import Toolbar from '@material-ui/core/es/Toolbar/Toolbar'
import ButtonNavigation from './ButtonNavigations'
import EmailUsers from './EmailUsers'
import Authorization from './Authorization'

const Header = () =>
  <AppBar position="static" color="inherit">
    <Toolbar>
      <Grid container justify="flex-start">
        <ButtonNavigation />
      </Grid>
      <Grid container justify="center" style={{ marginLeft: '15rem' }}>
        <EmailUsers />
      </Grid>
      <Grid container justify="flex-end">
        <Authorization />
      </Grid>
    </Toolbar>
  </AppBar>

Header.propTypes = {}

export default Header
