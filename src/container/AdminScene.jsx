import React from 'react'
// import PropTypes from 'prop-types'
import Grid from '@material-ui/core/es/Grid/Grid'
import Header from '../component/Header/Header'
import AdminBody from '../component/@admin/AdminBody'

const AdminScene = () =>
  <Grid container justify="center">
    <Header />
    <AdminBody />
  </Grid>

AdminScene.propTypes = {}

export default AdminScene
