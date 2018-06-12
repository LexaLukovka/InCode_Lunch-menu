/* eslint-disable react/prefer-stateless-function */
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import AppBar from '@material-ui/core/AppBar'
import { withStyles } from '@material-ui/core/styles'
import { withRouter } from 'react-router'
import Button from '@material-ui/core/es/Button/Button'
import { Link } from 'react-router-dom'
import Toolbar from '@material-ui/core/es/Toolbar/Toolbar'
import Typography from '@material-ui/core/es/Typography/Typography'

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
})

class Header extends React.Component {
  render() {
    const { classes, value_signIn, value_signUp } = this.props

    return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit" className={classes.flex}>
            <Link className={classes.link} to="/"> Title </Link>
          </Typography>
          <Typography variant="subheading" color="inherit" className={classes.flex}>
            {value_signIn.Email}
          </Typography>
          <Button color="inherit" className={classes.button} onClick={() => this.props.history.push('/signIn')}>
            Sign In
          </Button>
          <Button color="inherit" className={classes.button} onClick={() => this.props.history.push('/signUp')}>
            Sign Up
          </Button>
        </Toolbar>
      </AppBar>
    )
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  push: PropTypes.any,
  value_signIn: PropTypes.object,
  value_signUp: PropTypes.object,
}
Header.defaultProps = {
  push: '',
  value_signIn: '',
  value_signUp: '',
}

const mapStateToProps = (store) => ({
  value_signIn: store.signIn.value,
  value_signUp: store.signUp.value,
})

export default connect(mapStateToProps)(withRouter(withStyles(styles)(Header)))
