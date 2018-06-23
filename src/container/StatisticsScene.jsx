import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Grid from '@material-ui/core/es/Grid/Grid'
import Header from '../component/Header/Header'
import Statistics from '../component/@statistics/Statistics'
import { showStatistics } from '../redux/actions/loadDishes.action'

class StatisticsScene extends React.Component {
  componentWillMount() {
    const localStore = localStorage.getItem('cache-user')
    if (!localStore) {
      this.props.history.push('/signUp')
    }
    this.props.dispatch(showStatistics())
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
  dispatch: PropTypes.func.isRequired,
}

export default connect()(StatisticsScene)
