/* eslint-disable react/no-unused-prop-types */
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
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
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
})

class Admin extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      age: '',
      name: 'hai',
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    const { classes, dishes } = this.props
    return (
      <Cards>
        {dishes.map(dish =>
          <Card key={dish.id} className={classes.card}>
            <CardMedia
              className={classes.cover}
              image={dish.src}
            />
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography variant="subheading" color="textSecondary">
                  <form className={classes.root} autoComplete="off">
                    <FormControl className={classes.formControl}>
                      <InputLabel htmlFor="age-simple">Age</InputLabel>
                      <Select
                        value={this.state.age}
                        onChange={this.handleChange}
                        inputProps={{
                          name: 'age',
                          id: 'age-simple',
                        }}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        {dishes.map(dishing =>
                          <MenuItem value={dishing.id * 10}>{dishing.description}</MenuItem>)}
                      </Select>
                    </FormControl>
                  </form>
                  {dish.description}
                </Typography>
              </CardContent>
            </div>
          </Card>)}
      </Cards>
    )
  }
}

Admin.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  dishes: PropTypes.array.isRequired,
}

const mapStateToProps = (store) => ({
  dishes: store.loadDishes.dishes,
})

export default connect(mapStateToProps)(withStyles(styles, { withTheme: true })(Admin))
