import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import Grid from '@material-ui/core/es/Grid/Grid'
import Header from '../component/Header'
import IndexBody from '../component/IndexBody'

class IndexScene extends React.Component {
  componentWillMount() {
    const localStore = localStorage.getItem('Email')
    if (!localStore) {
      this.props.history.push('/signUp')
    }
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
}

export default withRouter(IndexScene)
