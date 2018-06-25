import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles/index'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Card from '@material-ui/core/es/Card/Card'
import Cards from '../../@index/IndexMenu/Cards'
import Selected from './Selected'

const styles = theme => ({
  card: {
    height: 70,
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
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    marginLeft: '1rem',
    marginTop: -12,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
})

const CardsAdmin = ({ classes, values, index, dishes }) =>
  <Cards>
    {values.map((dish, i) =>
      <Card key={i} className={classes.card}>
        <CardMedia
          className={classes.cover}
          image={dish.image}
        />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography variant="subheading" color="textSecondary">
              <form className={classes.root} autoComplete="off">
                <FormControl className={classes.formControl}>
                  <InputLabel>Select</InputLabel>
                  <Selected IndexMenu={index} indexDish={i} values={dishes} />
                </FormControl>
              </form>
            </Typography>
          </CardContent>
        </div>
      </Card>)}
  </Cards>

CardsAdmin.propTypes = {
  classes: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  values: PropTypes.array.isRequired,
  dishes: PropTypes.array.isRequired,
}

const mapStateToProps = (store) => ({
  dishes: store.loadDishes.dishesSelect,
})

export default connect(mapStateToProps)(withStyles(styles, { withTheme: true })(CardsAdmin))
