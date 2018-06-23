import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { withStyles } from '@material-ui/core/styles/index'
import Button from '@material-ui/core/es/Button/Button'
import { signOut } from '../../redux/actions/auth.action'
import Cache from '../../services/Cache'

const styles = (theme) => ({
  button: {
    padding: 15,
    margin: theme.spacing.unit,
    '&:focus': {
      outline: 0,
    },
  },
  link: {
    color: 'white',
    '&:hover': {
      color: 'silver',
    },
  },
  flex: {
    flex: 1,
  },
  root: {
    width: 500,
    backgroundColor: 'inherit',
  },
  buttonNav: {
    '&:focus': {
      outline: 0,
    },
  },
  gridCenter: {
    textAlign: 'center',
  },
})

class Authorization extends React.Component {
  handleClickOut = () => {
    this.props.dispatch(signOut())
    this.props.history.push('/signIn')
  }

  render() {
    const { classes } = this.props
    return (
      <div>
        {Cache.get('user') ?
          <Button
            color="primary"
            className={classes.button}
            onClick={this.handleClickOut}
          >
            Sign Out
          </Button>
          :
          <div>
            <Button
              color="primary"
              className={classes.button}
              onClick={() => this.props.history.push('/signIn')}
            >
              Sign In
            </Button>
            <Button
              color="primary"
              className={classes.button}
              onClick={() => this.props.history.push('/signUp')}
            >
              Sign Up
            </Button>
          </div>
        }
      </div>
    )
  }
}

Authorization.propTypes = {
  classes: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.object,
}
Authorization.defaultProps = {
  history: null,
}

export default connect()(withRouter(withStyles(styles)(Authorization)))
