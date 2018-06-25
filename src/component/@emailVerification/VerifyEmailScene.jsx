import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/es/Grid/Grid'
import Header from '../Header/Header'
import EmailVerification from './EmailVerify/EmailVerification'
import Cache from '../../services/Cache'

class VerifyEmailScene extends React.Component {
  componentWillMount() {
    if (!Cache.get('user')) {
      this.props.history.push('/signUp')
    }
  }

  render() {
    return (
      <Grid container justify="center">
        <Header />
        <EmailVerification />
      </Grid>
    )
  }
}

VerifyEmailScene.propTypes = {
  history: PropTypes.object.isRequired,
}

export default VerifyEmailScene
