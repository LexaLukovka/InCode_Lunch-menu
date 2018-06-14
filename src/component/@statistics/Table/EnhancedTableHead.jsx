import React from 'react'
// import PropTypes from 'prop-types'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableSortLabel from '@material-ui/core/TableSortLabel'

const columnData = [
  { id: 'date', numeric: false, disablePadding: true, label: 'Дата' },
  { id: 'number', numeric: true, disablePadding: false, label: 'Номер обеда' },
  { id: 'description', numeric: true, disablePadding: false, label: 'Описание обеда' },
]

const EnhancedTableHead = () =>
  <TableHead>
    <TableRow>
      {columnData.map(column => (
        <TableCell
          key={column.id}
          numeric={column.numeric}
        >
          <TableSortLabel>
            {column.label}
          </TableSortLabel>
        </TableCell>
      ), this)}
    </TableRow>
  </TableHead>

EnhancedTableHead.propTypes = {}

export default EnhancedTableHead
