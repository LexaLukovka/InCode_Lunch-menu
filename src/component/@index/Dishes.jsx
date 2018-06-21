/* eslint-disable react/no-unused-prop-types */
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/es/Card/Card'
import Cards from './Cards'

const styles = theme => ({
  card: {
    display: 'flex',
    backgroundColor: 'white',
    margin: '1rem',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 70,
    height: 70,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
})

const Dishes = ({ classes, onClick, clicked, value, onUndefinedClick }) =>
  <Cards onClick={onClick} clicked={clicked} onUndefinedClick={onUndefinedClick}>
    {value.map((dish, index) =>
      <Card key={index} className={classes.card}>
        <CardMedia
          className={classes.cover}
          image={dish.images}
        />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography variant="subheading" color="textSecondary">
              {dish.dish}
            </Typography>
          </CardContent>
        </div>
      </Card>)}
  </Cards>

Dishes.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  clicked: PropTypes.bool.isRequired,
  dishesSelect: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
  value: PropTypes.array.isRequired,
  onUndefinedClick: PropTypes.func.isRequired,
}

const mapStateToProps = (store) => ({
  dishesSelect: store.loadDishes.dishesSelect,
})

export default connect(mapStateToProps)(withStyles(styles, { withTheme: true })(Dishes))
