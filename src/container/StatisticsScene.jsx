import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/es/Grid/Grid'
import Header from '../component/Header/Header'
import Statistics from '../component/@statistics/Statistics'

class StatisticsScene extends React.Component {
  componentWillMount() {
    const localStoreEmail = JSON.parse(localStorage.getItem('Email'))
    if (localStoreEmail === ' ' || !localStoreEmail) {
      this.props.history.push('/signUp')
    }
  }

  render() {
    return (
      <Grid container justify="center">
        <Header />
        <Statistics />
      </Grid>
    )
  }
}

StatisticsScene.propTypes = {
  history: PropTypes.object.isRequired,
}

export default StatisticsScene
