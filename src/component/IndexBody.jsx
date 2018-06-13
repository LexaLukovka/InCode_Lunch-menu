import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/es/Grid/Grid'
import Dishes from './Dishes'

const styles = {
  root: {
    display: 'flex',
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
    const { classes, dishes } = this.props
    return (
      <div className={classes.root}>
        <Grid container>
          <Grid item>
            {dishes.map((dish, index) =>
              <Dishes
                key={index}
                clicked={this.state.isClick === index}
                onClick={() => this.handleClick(index)}
                value={dish}
              />)}
          </Grid>
        </Grid>
      </div>
    )
  }
}

IndexBody.propTypes = {
  classes: PropTypes.object.isRequired,
  dishes: PropTypes.array.isRequired,
}

const mapStateToProps = (store) => ({
  dishes: store.loadDishes.dishes,
})

export default connect(mapStateToProps)(withStyles(styles)(IndexBody))
