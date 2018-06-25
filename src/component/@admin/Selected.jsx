/* eslint-disable class-methods-use-this,no-underscore-dangle */
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import { withStyles } from '@material-ui/core/styles/index'
import { changeSelect } from '../../redux/actions/load.action'

const styles = {
  root: {
    width: 200,
  },
}

class Selected extends React.Component {
  constructor(props) {
    super(props)
    // const dish = (this.props.values.map((v) => v.description))
    this.state = {
      dishOne: '',
    }
    // dish.forEach(key => { this.setState({ dishOne: key }) })
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
    this.props.dispatch(changeSelect(this.props.IndexMenu, this.props.indexDish, event.target.value))
  }

  render() {
    const { classes, values } = this.props
    return (
      <Select
        className={classes.root}
        value={this.state.dishOne}
        index={1}
        onChange={this.handleChange}
        inputProps={{
          name: 'dishOne',
          id: 'age-simple',
        }}
      >
        {values.map((dish, i) =>
          <MenuItem
            key={i}
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
  IndexMenu: PropTypes.number.isRequired,
  indexDish: PropTypes.number.isRequired,
}

export default connect()(withStyles(styles)(Selected))
