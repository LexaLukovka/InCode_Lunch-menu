/* eslint-disable react/prefer-stateless-function */
import React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import { withStyles } from '@material-ui/core/styles'
import { withRouter } from 'react-router'
import Button from '@material-ui/core/es/Button/Button'
import { Link } from 'react-router-dom'
import Toolbar from '@material-ui/core/es/Toolbar/Toolbar'
import Typography from '@material-ui/core/es/Typography/Typography'

const styles = (theme) => ({
  row: {
    width: '100%',
  },
  root: {
    width: 500,
  },
  action: {
    '&:focus': {
      outline: 0,
    },
  },
  button: {
    padding: 15,
    margin: theme.spacing.unit,
    '&:focus': {
      outline: 0,
    },
  },
  left: {
    float: 'left',
  },
  right: {
    float: 'right',
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
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },

})

class Header extends React.Component {
  render() {
    const { classes } = this.props

    return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit" className={classes.flex}>
            <Link className={classes.link} to="/"> Title </Link>
          </Typography>
          <Button color="inherit" onClick={() => this.props.history.push('/login')}>Login</Button>
          <Button color="inherit" onClick={() => this.props.history.push('/logout')}>Logout</Button>
        </Toolbar>
      </AppBar>
    )
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  push: PropTypes.any,
}
Header.defaultProps = {
  push: '',
}

export default withRouter(withStyles(styles)(Header))

