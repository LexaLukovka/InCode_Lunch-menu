import React from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles/index'

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

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
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
        <MenuItem value=""> <em>None</em> </MenuItem>
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
}

export default connect()(withStyles(styles)(Selected))
