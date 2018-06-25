import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import TableUsers from './TableUsers'
import { showStatistics } from '../../redux/actions/load.action'

class Statistics extends React.Component {
  componentWillMount() {
    this.props.dispatch(showStatistics())
  }

  render() {
    const { statistics } = this.props
    return (
      <div>
        <TableUsers values={statistics} />
      </div>
    )
  }
}

Statistics.propTypes = {
  statistics: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
}

const mapStateToProps = (store) => ({
  statistics: store.loadDishes.statistics,
})

export default connect(mapStateToProps)(Statistics)

