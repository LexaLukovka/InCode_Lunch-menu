import React from 'react'
// import PropTypes from 'prop-types'
import Grid from '@material-ui/core/es/Grid/Grid'
import Header from '../component/Header/Header'
import Statistics from '../component/@statistics/Statistics'

const StatisticsScene = () =>
  <Grid container justify="center">
    <Header />
    <Statistics />
  </Grid>

StatisticsScene.propTypes = {}

export default StatisticsScene
