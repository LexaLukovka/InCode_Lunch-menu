import React from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import PropTypes from 'prop-types'

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
    const { dishesSelect } = this.props
    return (
      <Select
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
  dishesSelect: PropTypes.array.isRequired,
}
const mapStateToProps = (store) => ({
  dishesSelect: store.loadDishes.dishesSelect,
})

export default connect(mapStateToProps)(Selected)
