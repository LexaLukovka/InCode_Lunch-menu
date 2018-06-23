import React from 'react'
// import PropTypes from 'prop-types'
import Grid from '@material-ui/core/es/Grid/Grid'
import Typography from '@material-ui/core/es/Typography/Typography'
import Cache from '../../services/Cache'

const EmailUsers = () =>
  <Grid container>
    <Typography variant="subheading" color="inherit">
      <div style={{ display: 'flex' }}>
        <div style={{ marginRight: 10 }}>{Cache.get('user') ? Cache.get('user').email : ''}</div>
        <div>{Cache.get('user') ? `Баланс ${Cache.get('user').balance}` : ''}</div>
      </div>
    </Typography>
  </Grid>

EmailUsers.propTypes = {}

export default EmailUsers
