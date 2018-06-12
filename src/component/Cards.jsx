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
  <Card className={classes.card} style={{ background: clicked ? '#eeeeee' : 'inherit' }} onClick={onClick}>
    {children}
  </Card>

Cards.propTypes = {
  onClick: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  children: PropTypes.any.isRequired,
  clicked: PropTypes.bool.isRequired,
}

export default withStyles(styles)(Cards)
