import React from 'react'
import PropTypes from 'prop-types'
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
  onClick: PropTypes.any,
  classes: PropTypes.object.isRequired,
  children: PropTypes.any.isRequired,
  clicked: PropTypes.bool,
}
Cards.defaultProps = {
  onClick: PropTypes.any,
  clicked: false,
}

export default withStyles(styles)(Cards)
