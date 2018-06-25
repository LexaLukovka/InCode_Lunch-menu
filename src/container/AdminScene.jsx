import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Grid from '@material-ui/core/es/Grid/Grid'
import Header from '../component/Header/Header'
import Admin from '../component/@admin/Admin'
import { createDataAdmin } from '../redux/actions/load.action'
import Cache from '../services/Cache'

class AdminScene extends React.Component {
  componentWillMount() {
    if (!Cache.get('user').authorization) {
      this.props.history.push('/signUp')
    }
    this.props.dispatch(createDataAdmin())
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
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
}

export default connect()(AdminScene)
