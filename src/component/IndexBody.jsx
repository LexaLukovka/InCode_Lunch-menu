/* eslint-disable function-paren-newline */
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/es/Grid/Grid'
import Dishes from './Dishes'
import Container from './Container'

const styles = {
  root: {
  },
}

class IndexBody extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isClick: null,
    }
  }

  handleClick(index) {
    this.setState({
      isClick: this.state.isClick === index ? null : index,
    })
  }

  render() {
    const { dishes } = this.props
    return (
      <Container>
        <Grid container>
          {dishes.map((dish, index) =>
            <Grid item>
              <Dishes
                key={index}
                clicked={this.state.isClick === index}
                onClick={() => this.handleClick(index)}
                value={dish}
              />
            </Grid>,
          )}
        </Grid>
      </Container>
    )
  }
}

IndexBody.propTypes = {
  dishes: PropTypes.array.isRequired,
}

const mapStateToProps = (store) => ({
  dishes: store.loadDishes.dishes,
})

export default connect(mapStateToProps)(withStyles(styles)(IndexBody))
