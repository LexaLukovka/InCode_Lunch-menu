import React from 'react'
// import PropTypes from 'prop-types'
import Grid from '@material-ui/core/es/Grid/Grid'
import Header from '../component/Header'
import Admin from '../component/Admin'

const AdminScene = () =>
  <Grid container justify="center">
    <Header />
    <Admin />
  </Grid>

AdminScene.propTypes = {}

export default AdminScene
