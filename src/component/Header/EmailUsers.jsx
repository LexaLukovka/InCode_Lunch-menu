import React from 'react'
// import PropTypes from 'prop-types'
import Grid from '@material-ui/core/es/Grid/Grid'
import Typography from '@material-ui/core/es/Typography/Typography'
import Cache from '../../services/Cache'

const EmailUsers = () =>
  <Grid container justify="flex-start">
    <Typography variant="subheading" color="inherit">
      {Cache.get('user') ? Cache.get('user').email : ''}
    </Typography>
  </Grid>

EmailUsers.propTypes = {}

export default EmailUsers
