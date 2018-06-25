/* eslint-disable arrow-body-style */
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Button from '@material-ui/core/Button'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/es/Grid/Grid'

const getModalStyle = () => {
  const top = 50
  const left = 50

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  }
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: 500,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
  button: {
    marginTop: 25,
    margin: theme.spacing.unit,
    '&:focus': {
      outline: 0,
    },
  },
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 300,
  },
  div: {
    marginLeft: '15rem',
    marginTop: '5rem',
  },
})

class ModalWindow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
    }
  }

  handleOpen = () => {
    this.setState({ open: true })
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  render() {
    const { classes, modalData } = this.props
    return (
      <Grid container className={classes.div}>
        <Button className={classes.button} color="primary" onClick={this.handleOpen}>Сформировать заказ</Button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <Paper className={classes.root}>
              <Table className={classes.table}>
                <TableHead>
                  <TableRow>
                    <TableCell>Номер обеда</TableCell>
                    <TableCell numeric>Количество обедов</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {modalData.map((value, index) => {
                    return (
                      <TableRow key={index}>
                        <TableCell component="th" scope="row">
                          Меню {index + 1}
                        </TableCell>
                        <TableCell numeric>{value}</TableCell>
                      </TableRow>
                    )
                  })}
                </TableBody>
              </Table>
            </Paper>
          </div>
        </Modal>
      </Grid>
    )
  }
}

ModalWindow.propTypes = {
  classes: PropTypes.object.isRequired,
  modalData: PropTypes.array,
}
ModalWindow.defaultProps = {
  modalData: [],
}

const mapStateToProps = (store) => ({
  modalData: store.loadDishes.modalData,
})

export default connect(mapStateToProps)(withStyles(styles)(ModalWindow))
