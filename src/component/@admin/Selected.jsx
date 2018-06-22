/* eslint-disable class-methods-use-this,no-underscore-dangle */
import React from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles/index'
import { changeSelect } from '../../redux/actions/loadDishes.action'

const styles = {
  root: {
    width: 200,
  },
}

class Selected extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
    }
    // console.log(this.props.values.map(v => v.description))
  }

  handleChange = (event) => {
    console.log(event.target.value)
    this.setState({ [event.target.name]: event.target.value })
    this.props.dispatch(changeSelect(event.target.value))
  }

  render() {
    const { classes, values } = this.props
    return (
      <Select
        className={classes.root}
        value={this.state.value}
        onChange={this.handleChange}
        inputProps={{
          name: 'value',
          id: 'age-simple',
        }}
      >
        {values.map(dish =>
          <MenuItem
            key={dish._id}
            name={dish._id}
            value={dish.description}
          >
            {dish.description}
          </MenuItem>)}
      </Select>
    )
  }
}

Selected.propTypes = {
  classes: PropTypes.object.isRequired,
  values: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
}

export default connect()(withStyles(styles)(Selected))
