/* eslint-disable function-paren-newline */
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/es/Grid/Grid'
import Dishes from './Dishes'
import Container from '../Container'
import { clickCardIndex, createDataStatistics } from '../../redux/actions/loadDishes.action'

const styles = {
  root: {},
}

const IndexBody = ({ dishes, clicked, dispatch }) =>
  <Container>
    <Grid container>
      {dishes.map((dish, index) =>
        <Grid item key={index}>
          <Dishes
            clicked={clicked === index}
            onClick={() => {
              dispatch(clickCardIndex(index),
                dispatch(createDataStatistics()))
            }}
            value={dish}
          />
        </Grid>,
      )}
    </Grid>
  </Container>

IndexBody.propTypes = {
  dishes: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
  clicked: PropTypes.number,
}
IndexBody.defaultProps = {
  clicked: null,
}

const mapStateToProps = (store) => ({
  dishes: store.loadDishes.dishes,
  clicked: store.loadDishes.clicked,
})

export default connect(mapStateToProps)(withStyles(styles)(IndexBody))
