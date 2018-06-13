import React from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'

class Selected extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      age: '',
      value: [],
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    const { dishesSelect } = this.props
    return (
      <Select
        value={this.state.age}
        onChange={this.handleChange}
        inputProps={{
          name: 'age',
          id: 'age-simple',
        }}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {dishesSelect.map(dishesSel =>
          <MenuItem value={dishesSel.idDishes}>{dishesSel.description}</MenuItem>)}
      </Select>
    )
  }
}

Select.propTypes = {}
const mapStateToProps = (store) => ({
  dishesSelect: store.loadDishes.dishesSelect,
})

export default connect(mapStateToProps)(Selected)
