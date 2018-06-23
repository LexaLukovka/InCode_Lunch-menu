import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const toolbarStyles = theme => ({
  root: {
    paddingRight: theme.spacing.unit,
  },
  title: {
    flex: '0 0 auto',
  },
})

const EnhancedTableToolbar = ({ classes }) =>
  <Toolbar className={classes.root}>
    <div className={classes.title}>
      <Typography variant="title" id="tableTitle">
        Пользователи
      </Typography>
    </div>
  </Toolbar>

EnhancedTableToolbar.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(toolbarStyles)(EnhancedTableToolbar)
