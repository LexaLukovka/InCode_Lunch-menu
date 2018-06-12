import React from 'react'
// import PropTypes from 'prop-types'
import Grid from '@material-ui/core/es/Grid/Grid'
import Header from '../component/Header'
import IndexBody from '../component/IndexBody'

const IndexScene = () =>
  <Grid container justify="center">
    <Header />
    <IndexBody />
  </Grid>

IndexScene.propTypes = {}

export default IndexScene
