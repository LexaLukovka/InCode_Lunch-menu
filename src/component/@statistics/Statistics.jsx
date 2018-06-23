import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import TableUsers from './TableUsers'

const Statistics = ({ statistics }) =>
  <div>
    <TableUsers values={statistics} />
  </div>

Statistics.propTypes = {
  statistics: PropTypes.array.isRequired,
}

const mapStateToProps = (store) => ({
  statistics: store.loadDishes.statistics,
})

export default connect(mapStateToProps)(Statistics)

