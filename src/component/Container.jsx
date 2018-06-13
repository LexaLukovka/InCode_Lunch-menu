import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const styles = theme => ({
  root: {
    margin: '0 auto',
    maxWidth: 1200,
  },
})
const Container = ({ classes, children }) =>
  <div className={classes.root}>
    {children}
  </div>

Container.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
}

export default withStyles(styles)(Container)
