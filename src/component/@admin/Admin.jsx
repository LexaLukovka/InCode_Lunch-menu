/* eslint-disable function-paren-newline */
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/es/Grid/Grid'
import Container from '../Container'
import CardsAdmin from './AdminMenu/CardsAdmin'
import SelectControl from './SelectControl/SelectControl'
import TableUsers from './Table/TableUsers'

const styles = {}

const Admin = ({ menu, checked, classes, users }) =>
  <Container>
    <SelectControl />
    <div className={classes.root}>
      <Grid container justify="center">
        {(checked !== null) && checked ?
          menu.map((dishes, index) =>
            <Grid key={index} item>
              <CardsAdmin index={index} values={dishes.menu} />
            </Grid>)
          :
          <TableUsers values={users} />
        }
      </Grid>
    </div>
  </Container>

Admin.propTypes = {
  classes: PropTypes.object.isRequired,
  users: PropTypes.array,
  menu: PropTypes.array.isRequired,
  checked: PropTypes.bool,
}
Admin.defaultProps = {
  users: null,
  checked: null,
}

const mapStateToProps = (store) => ({
  menu: store.loadDishes.menu,
  checked: store.selectControl.checked,
  users: store.loadDishes.users,
})

export default connect(mapStateToProps)(withStyles(styles)(Admin))
