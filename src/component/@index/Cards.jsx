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

const Cards = ({ classes, children, onClick, clicked }) =>
  <Card className={classes.card} style={{ background: clicked ? '#d0d0d0' : 'white' }} onClick={onClick}>
    {children}
  </Card>

Cards.propTypes = {
  onClick: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  children: PropTypes.any.isRequired,
  clicked: PropTypes.bool,
}
Cards.defaultProps = {
  clicked: false,
}

const mapStateToProps = (store) => ({
  index: store.loadDishes.index,
})

export default connect(mapStateToProps)(withStyles(styles)(Cards))
