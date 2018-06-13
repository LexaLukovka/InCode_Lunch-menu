/* eslint-disable function-paren-newline */
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/es/Grid/Grid'
import Container from '../Container'
import Admin from './Admin'

const styles = {
  root: {},
}

class AdminBody extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    const { dishes } = this.props
    return (
      <Container>
        <Grid container>
          {dishes.map((dish, index) =>
            <Grid key={index} item>
              <Admin />
            </Grid>)}
        </Grid>
      </Container>
    )
  }
}

AdminBody.propTypes = {
  dishes: PropTypes.array.isRequired,
}

const mapStateToProps = (store) => ({
  dishes: store.loadDishes.dishes,
})

export default connect(mapStateToProps)(withStyles(styles)(AdminBody))
