import React from 'react'
// import PropTypes from 'prop-types'
import Grid from '@material-ui/core/es/Grid/Grid'
import Header from '../component/Header/Header'
import Admin from '../component/@admin/Admin'
import SelectControl from '../component/@admin/SelectControl'


const AdminScene = () =>
  <Grid container justify="center">
    <Header />
    <SelectControl />
    <Admin />
  </Grid>

AdminScene.propTypes = {}

export default AdminScene
