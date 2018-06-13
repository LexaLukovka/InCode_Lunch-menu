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
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    const { classes, dishesSelect } = this.props
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
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {dishesSelect.map(dishesSel =>
          <MenuItem key={dishesSel.idDishes} value={dishesSel.idDishes}>{dishesSel.description}</MenuItem>)}
      </Select>
    )
  }
}

Selected.propTypes = {
  classes: PropTypes.object.isRequired,
  dishesSelect: PropTypes.array.isRequired,
}
const mapStateToProps = (store) => ({
  dishesSelect: store.loadDishes.dishesSelect,
})

export default connect(mapStateToProps)(withStyles(styles)(Selected))
