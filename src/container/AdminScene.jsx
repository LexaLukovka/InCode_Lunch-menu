import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/es/Grid/Grid'
import Header from '../component/Header/Header'
import Admin from '../component/@admin/Admin'


class AdminScene extends React.Component {
  componentWillMount() {
    const localStoreEmail = localStorage.getItem('Email')
    if (!localStoreEmail) {
      this.props.history.push('/signUp')
    }
  }

  render() {
    return (
      <Grid container justify="center">
        <Header />
        <Admin />
      </Grid>

    )
  }
}

AdminScene.propTypes = {
  history: PropTypes.object.isRequired,
}

export default AdminScene
