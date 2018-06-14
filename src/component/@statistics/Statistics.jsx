/* eslint-disable no-mixed-operators */
import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import EnhancedTableToolbar from './Table/EnhancedTableToolbar'
import EnhancedTableHead from './Table/EnhancedTableHead'
import Container from '../Container'
import { createDataStatistics } from '../../redux/actions/loadDishes.action'

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
  },
  table: {
    minWidth: 1020,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
})

class Statistics extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selected: [],
      page: 0,
      rowsPerPage: 5,
    }
  }

  componentWillMount() {
    this.props.dispatch(createDataStatistics())
  }

  handleChangePage = (event, page) => {
    this.setState({ page })
  }

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value })
  }

  isSelected = id => this.state.selected.indexOf(id) !== -1

  render() {
    const { classes, masStatistics } = this.props
    const { selected, rowsPerPage, page } = this.state
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, masStatistics.length - page * rowsPerPage)
    return (
      <Container>
        <Paper className={classes.root}>
          <EnhancedTableToolbar numSelected={selected.length} />
          <div className={classes.tableWrapper}>
            <Table className={classes.table} aria-labelledby="tableTitle">
              <EnhancedTableHead
                numSelected={selected.length}
                rowCount={masStatistics.length}
              />
              <TableBody>
                {masStatistics.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((value, index) => {
                  const isSelected = this.isSelected(index)
                  return (
                    <TableRow
                      key={index}
                      hover
                      role="checkbox"
                      aria-checked={isSelected}
                      tabIndex={-1}
                      selected={isSelected}
                    >
                      <TableCell component="th" scope="row">
                        {value.date}
                      </TableCell>
                      <TableCell numeric>
                        {value.number}
                      </TableCell>
                      <TableCell numeric>
                        {value.description}
                      </TableCell>
                    </TableRow>
                  )
                })}
                {emptyRows > 0 && (
                  <TableRow style={{ height: 49 * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
          <TablePagination
            component="div"
            count={masStatistics.length}
            rowsPerPage={rowsPerPage}
            page={page}
            backIconButtonProps={{
              'aria-label': 'Previous Page',
            }}
            nextIconButtonProps={{
              'aria-label': 'Next Page',
            }}
            onChangePage={this.handleChangePage}
            onChangeRowsPerPage={this.handleChangeRowsPerPage}
          />
        </Paper>
      </Container>
    )
  }
}

Statistics.propTypes = {
  dispatch: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  masStatistics: PropTypes.array.isRequired,
}

const mapStateToProps = (store) => ({
  masStatistics: store.loadDishes.masStatistics,
})

export default connect(mapStateToProps)(withStyles(styles)(Statistics))
