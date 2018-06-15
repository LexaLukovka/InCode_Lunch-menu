import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import Grid from '@material-ui/core/es/Grid/Grid'
import Header from '../component/Header/Header'
import IndexBody from '../component/@index/IndexBody'

class IndexScene extends React.Component {
  componentWillMount() {
    const localStoreEmail = localStorage.getItem('Email')
    if (localStoreEmail === ' ' || !localStoreEmail) {
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
