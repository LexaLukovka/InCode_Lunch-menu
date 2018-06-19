import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import Grid from '@material-ui/core/es/Grid/Grid'
import Header from '../component/Header/Header'
import IndexBody from '../component/@index/IndexBody'

class IndexScene extends React.Component {
  state = { users: [] }

  componentWillMount() {
    const localStoreEmail = localStorage.getItem('Email')
    if (!localStoreEmail) {
      this.props.history.push('/signUp')
    }
  }

  componentDidMount() {
    fetch('/users')
      .then((res, err) => !err && res.json())
      .then((users, err) => !err && this.setState({ users }))
  }

  render() {
    return (
      <Grid container justify="center">
        <Header />
        <IndexBody />
        {console.log(this.state.users)}
      </Grid>
    )
  }
}

IndexScene.propTypes = {
  history: PropTypes.object.isRequired,
}

export default withRouter(IndexScene)
