import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/es/Grid/Grid'
import Header from '../component/Header/Header'
import EmailVerification from '../component/@emailVerification/EmailVerification'

class VerifyEmailScene extends React.Component {
  componentWillMount() {
    const localStore = localStorage.getItem('cache-user')
    if (!localStore) {
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
