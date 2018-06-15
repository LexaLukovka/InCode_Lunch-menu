/* eslint-disable react/prefer-stateless-function */
import React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import { withRouter } from 'react-router'
import Button from '@material-ui/core/es/Button/Button'
import Toolbar from '@material-ui/core/es/Toolbar/Toolbar'
import Typography from '@material-ui/core/es/Typography/Typography'
import BottomNavigation from '@material-ui/core/es/BottomNavigation/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/es/BottomNavigationAction/BottomNavigationAction'
import Grid from '@material-ui/core/es/Grid/Grid'
import { signOut } from '../../redux/actions/signIn.action'

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

  handleClickOut = () => {
    this.props.dispatch(signOut())
    this.props.history.push('/signIn')
  }

  render() {
    const { classes } = this.props
    const { value } = this.state
    let localStore = localStorage.getItem('Email')
    if (localStore === undefined) {
      console.log(1)
      localStorage.setItem('Email', (JSON.stringify(' ')))
      localStore = JSON.parse(localStore)
    }

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
            <BottomNavigationAction
              className={classes.buttonNav}
              onClick={() => this.props.history.push('/statistics')}
              label="Statistic"
            />
            <BottomNavigationAction
              className={classes.buttonNav}
              onClick={() => this.props.history.push('/admin')}
              label="Admin"
            />
          </BottomNavigation>
          <Grid container className={classes.gridCenter}>
            <Typography variant="subheading" color="inherit" className={classes.flex}>
              {localStore}
            </Typography>
          </Grid>
          <Grid container justify="flex-end">
            {localStore !== ' ' ?
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


          </Grid>
        </Toolbar>
      </AppBar>
    )
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
}

export default connect()(withRouter(withStyles(styles)(Header)))
