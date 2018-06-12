import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import Dishes from './Dishes'

const styles = {
  row: {
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
    const { classes } = this.props
    return (
      <div>
        <div className={classes.row}>
          <Dishes clicked={this.state.isClick === 1} onClick={() => this.handleClick(1)} />
          <Dishes clicked={this.state.isClick === 2} onClick={() => this.handleClick(2)} />
        </div>
        <div className={classes.row}>
          <Dishes clicked={this.state.isClick === 3} onClick={() => this.handleClick(3)} />
          <Dishes clicked={this.state.isClick === 4} onClick={() => this.handleClick(4)} />
        </div>
      </div>
    )
  }
}
IndexBody.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(IndexBody)
