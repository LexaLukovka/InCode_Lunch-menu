/* eslint-disable react/prefer-stateless-function */
import React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import { withStyles } from '@material-ui/core/styles'
import { withRouter } from 'react-router'
import Button from '@material-ui/core/es/Button/Button'
import Toolbar from '@material-ui/core/es/Toolbar/Toolbar'
import Typography from '@material-ui/core/es/Typography/Typography'
import BottomNavigation from '@material-ui/core/es/BottomNavigation/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/es/BottomNavigationAction/BottomNavigationAction'
import Grid from '@material-ui/core/es/Grid/Grid'

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

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: 0,
    }
  }

  handleChange = (event, value) => {
    this.setState({ value })
  }

  render() {
    const { classes } = this.props
    const { value } = this.state
    const localStores = JSON.parse(localStorage.getItem('Email'))
    return (
      <AppBar position="static" color="inherit">
        <Toolbar>
          <BottomNavigation
            value={value}
            onChange={this.handleChange}
            showLabels
            className={classes.root}
          >
            <BottomNavigationAction
              className={classes.buttonNav}
              onClick={() => this.props.history.push('/')}
              label="Home"
            />
            <BottomNavigationAction className={classes.buttonNav} label="Statistic" />
            <BottomNavigationAction className={classes.buttonNav} label="Admin" />
          </BottomNavigation>
          <Grid container className={classes.gridCenter}>
            <Typography variant="subheading" color="inherit" className={classes.flex}>
              {localStores}
            </Typography>
          </Grid>
          <Grid container justify="flex-end">
            <Button color="primary" className={classes.button} onClick={() => this.props.history.push('/signIn')}>
              Sign In
            </Button>
            <Button color="primary" className={classes.button} onClick={() => this.props.history.push('/signUp')}>
              Sign Up
            </Button>
            <Button color="primary" className={classes.button} onClick={() => this.props.history.push('/signIn')}>
              Sign Out
            </Button>
          </Grid>
        </Toolbar>
      </AppBar>
    )
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
}

export default withRouter(withStyles(styles)(Header))
