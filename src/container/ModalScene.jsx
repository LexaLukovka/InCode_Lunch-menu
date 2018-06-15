/* eslint-disable arrow-body-style */
import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
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
  },
})

class ModalScene extends React.Component {
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
        <Button className={classes.button} color="primary" onClick={this.handleOpen}>Open Modal</Button>
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
                  {modalData.map(value => {
                    return (
                      <TableRow key={value.id}>
                        <TableCell component="th" scope="row">
                          Меню {value.id}
                        </TableCell>
                        <TableCell numeric>{value.countLunch}</TableCell>
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

ModalScene.propTypes = {
  classes: PropTypes.object.isRequired,
  modalData: PropTypes.array,
}
ModalScene.defaultProps = {
  modalData: [],
}

const mapStateToProps = (store) => ({
  modalData: store.loadDishes.modalData,
})

export default connect(mapStateToProps)(withStyles(styles)(ModalScene))
