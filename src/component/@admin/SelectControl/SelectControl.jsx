import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'
import { connect } from 'react-redux'
import { selectControl } from '../../../redux/actions/selectControl.action'
import Cache from '../../../services/Cache'

const styles = theme => ({
  root: {
    margin: '10rem',
    position: 'fixed',
    left: 0,
  },
  iOSSwitchBase: {
    '&$iOSChecked': {
      color: theme.palette.common.white,
      '& + $iOSBar': {
        backgroundColor: theme.palette.primary.main,
      },
    },
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
      easing: theme.transitions.easing.sharp,
    }),
  },
  iOSChecked: {
    transform: 'translateX(15px)',
    '& + $iOSBar': {
      opacity: 1,
      border: 'none',
    },
  },
  iOSBar: {
    borderRadius: 13,
    width: 42,
    height: 26,
    marginTop: -13,
    marginLeft: -21,
    border: 'solid 1px',
    borderColor: theme.palette.grey[400],
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border']),
  },
  iOSIcon: {
    width: 24,
    height: 24,
  },
  iOSIconChecked: {
    boxShadow: theme.shadows[1],
  },
  rotate: {
    transform: 'rotate(-90deg)',
  },
})

class SelectControl extends React.Component {
  handleChange = event => {
    Cache.put('checked', event.target.checked)
    this.props.dispatch(selectControl())
  }

  render() {
    const { classes, checked } = this.props
    return (
      <FormGroup row className={classes.root}>
        <FormControlLabel
          className={classes.rotate}
          control={<Switch
            classes={{
              switchBase: classes.iOSSwitchBase,
              bar: classes.iOSBar,
              icon: classes.iOSIcon,
              iconChecked: classes.iOSIconChecked,
              checked: classes.iOSChecked,
            }}
            disableRipple
            checked={(checked !== null) && checked}
            onChange={this.handleChange}
            value="checked"
          />}
          label=""
        />
      </FormGroup>
    )
  }
}

SelectControl.propTypes = {
  classes: PropTypes.object.isRequired,
  checked: PropTypes.bool,
  dispatch: PropTypes.func.isRequired,
}
SelectControl.defaultProps = {
  checked: null,
}

const mapStateToProps = (store) => ({
  checked: store.selectControl.checked,
})

export default connect(mapStateToProps)(withStyles(styles)(SelectControl))
