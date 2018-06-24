import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import Grid from '@material-ui/core/es/Grid/Grid'
import Header from '../component/Header/Header'
import IndexBody from '../component/@index/IndexBody'
import { loadModalData, showStatistics } from '../redux/actions/loadDishes.action'

class IndexScene extends React.Component {
  componentWillMount() {
    const localStore = localStorage.getItem('cache-user')
    if (!localStore) {
      this.props.history.push('/signUp')
    }
    this.props.dispatch(showStatistics())
    this.props.dispatch(loadModalData())
  }

  render() {
    return (
      <Grid container justify="center">
        <Header />
        <IndexBody />
      </Grid>
    )
  }
}

IndexScene.propTypes = {
  history: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
}

export default connect()(withRouter(IndexScene))
