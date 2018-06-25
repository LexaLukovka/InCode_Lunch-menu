/* eslint-disable no-mixed-operators,arrow-body-style */
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
import TextField from '@material-ui/core/es/TextField/TextField'
import EnhancedTableToolbar from './Table/EnhancedTableToolbar'
import EnhancedTableHead from './Table/EnhancedTableHead'
import ModalScene from '../../container/ModalScene'
import { changeBalance, createDataAdmin } from '../../redux/actions/load.action'

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    marginRight: 300,
  },
  table: {
    minWidth: 350,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
})

class TableUsers extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      order: 'asc',
      orderBy: 'balance',
      data: [].sort((a, b) => (a.balance < b.balance ? -1 : 1)),
      page: 0,
      rowsPerPage: 5,
    }
  }

  componentWillMount() {
    this.props.dispatch(createDataAdmin())
    this.setState({
      data: this.props.values ? this.props.values[0] : [],
    })
  }

  handleRequestSort = (event, property) => {
    const orderBy = property
    let order = 'desc'

    if (this.state.orderBy === property && this.state.order === 'desc') {
      order = 'asc'
    }

    const data =
      order === 'desc'
        ? this.state.data.sort((a, b) => (b[orderBy] < a[orderBy] ? -1 : 1))
        : this.state.data.sort((a, b) => (a[orderBy] < b[orderBy] ? -1 : 1))

    this.setState({ data, order, orderBy })
  }

  handleChangePage = (event, page) => {
    this.setState({ page })
  }

  handleChange = (event, email) => {
    this.props.dispatch(changeBalance(email, event.target.value))
    this.props.dispatch(createDataAdmin())
  }

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value })
  }

  render() {
    const { classes } = this.props
    const { data, order, orderBy, rowsPerPage, page } = this.state
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage)
    return (
      <div>
        <Paper className={classes.root}>
          <EnhancedTableToolbar />
          <div className={classes.tableWrapper}>
            <Table className={classes.table} aria-labelledby="tableTitle">
              <EnhancedTableHead
                order={order}
                orderBy={orderBy}
                onRequestSort={this.handleRequestSort}
                rowCount={data.length}
              />
              <TableBody>
                {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((value, index) => {
                  return (
                    <TableRow
                      hover
                      tabIndex={-1}
                      key={value.id}
                    >
                      <TableCell padding="default">
                        {value.email}
                      </TableCell>
                      <TableCell numeric>
                        <TextField
                          fullWidth
                          id="required"
                          label="Баланс"
                          index={index}
                          defaultValue={value.balance}
                          onChange={(event) => this.handleChange(event, value.email)}
                          type="number"
                          margin="normal"
                        />
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
            count={data.length}
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

        <ModalScene />
      </div>
    )
  }
}

TableUsers.propTypes = {
  classes: PropTypes.object.isRequired,
  values: PropTypes.array,
  dispatch: PropTypes.func.isRequired,
}
TableUsers.defaultProps = {
  values: null,
}

export default connect()(withStyles(styles)(TableUsers))
