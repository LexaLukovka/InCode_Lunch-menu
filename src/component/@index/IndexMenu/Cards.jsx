import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'

const styles = {
  card: {
    width: 400,
    margin: '3rem',
  },
}

const Cards = ({ classes, children, onClick, clicked, onUndefinedClick }) =>
  <Card
    className={classes.card}
    style={{ background: clicked ? '#d0d0d0' : 'white' }}
    onClick={!clicked ? onClick : onUndefinedClick}
  >
    {children}
  </Card>

Cards.propTypes = {
  onClick: PropTypes.func,
  classes: PropTypes.object.isRequired,
  children: PropTypes.any.isRequired,
  clicked: PropTypes.bool,
  onUndefinedClick: PropTypes.func,
}
Cards.defaultProps = {
  clicked: false,
  onClick: null,
  onUndefinedClick: null,
}

const mapStateToProps = (store) => ({
  index: store.loadDishes.index,
})

export default connect(mapStateToProps)(withStyles(styles)(Cards))
