import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import { withRouter } from 'react-router'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import { buttonNavigationAction } from '../../redux/actions/buttonNavigation.action'
import Cache from '../../services/Cache'

const styles = (theme) => ({
  button: {
    padding: 15,
    margin: theme.spacing.unit,
    '&:focus': {
      outline: 0,
    },
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
})

class ButtonNavigations extends React.Component {
  handleChange = (event, value) => {
    this.props.dispatch(buttonNavigationAction(value))
  }

  render() {
    const { classes, buttonNavigation } = this.props
    const value = localStorage.getItem('buttonNavigation')
    return (
      <BottomNavigation
        value={buttonNavigation === null ? value : buttonNavigation}
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
          label="Statistics"
        />
        <BottomNavigationAction
          disabled={Cache.get('user') && Cache.get('user').role === 'user' && true}
          className={classes.buttonNav}
          onClick={() => this.props.history.push('/admin')}
          label="Admin"
        />
      </BottomNavigation>
    )
  }
}

ButtonNavigations.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  buttonNavigation: PropTypes.number,
}
ButtonNavigations.defaultProps = {
  buttonNavigation: null,
}
const mapStateToProps = (store) => ({
  buttonNavigation: store.buttonNavigation.buttonNavigation,
})

export default connect(mapStateToProps)(withRouter(withStyles(styles)(ButtonNavigations)))
