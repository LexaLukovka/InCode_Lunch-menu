/* eslint-disable function-paren-newline */
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/es/Grid/Grid'
import Dishes from './Dishes'
import Container from '../Container'
import {
  clickCardIndex,
  createDataStatistics,
  loadDishes,
  showStatistics,
} from '../../redux/actions/loadDishes.action'

const styles = {
  root: {},
}

class IndexBody extends React.Component {
  componentWillMount() {
    this.props.dispatch(loadDishes())
  }

  handleClick = (index, value) => {
    this.props.dispatch(clickCardIndex(index, value))
    this.props.dispatch(createDataStatistics(index, value))
    this.props.dispatch(showStatistics())
  }

  handleUndefinedClick = (index) => {
    this.props.dispatch(clickCardIndex(index))
  }

  render() {
    const { menu, clicked } = this.props
    const menus = menu.map(v => v.menu)
    return (
      <Container>
        <Grid container justify="center">
          {menus.map((dishes, index) =>
            <Grid item key={index}>
              <Dishes
                clicked={clicked === index}
                onClick={() => this.handleClick(index, dishes)}
                onUndefinedClick={() => this.handleUndefinedClick(index)}
                value={dishes}
              />
            </Grid>)},
        </Grid>
      </Container>
    )
  }
}

IndexBody.propTypes = {
  menu: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
  clicked: PropTypes.number,
}
IndexBody.defaultProps = {
  clicked: null,
}

const mapStateToProps = (store) => ({
  menu: store.loadDishes.menu,
  clicked: store.loadDishes.clicked,
})

export default connect(mapStateToProps)(withStyles(styles)(IndexBody))
