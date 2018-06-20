/* eslint-disable react/jsx-curly-spacing */
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { withStyles } from '@material-ui/core/styles'
import * as Yup from 'yup'
import { withFormik } from 'formik/dist/formik'
import VisibilityOff from '@material-ui/icons/es/VisibilityOff'
import Visibility from '@material-ui/icons/es/Visibility'
import Link from 'react-router-dom/es/Link'
import Card from '@material-ui/core/es/Card/Card'
import Typography from '@material-ui/core/es/Typography/Typography'
import Button from '@material-ui/core/es/Button/Button'
import Grid from '@material-ui/core/es/Grid/Grid'
import FormControl from '@material-ui/core/es/FormControl/FormControl'
import InputLabel from '@material-ui/core/es/InputLabel/InputLabel'
import Input from '@material-ui/core/es/Input/Input'
import InputAdornment from '@material-ui/core/es/InputAdornment/InputAdornment'
import IconButton from '@material-ui/core/es/IconButton/IconButton'
import { signIn } from '../../redux/actions/signIn.action'
import Errors from '../Errors/Errors'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    width: 300,
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  card: {
    margin: '5rem',
    padding: '2rem',
    width: 400,
  },
  button: {
    marginTop: 25,
    margin: theme.spacing.unit,
    '&:focus': {
      outline: 0,
    },
  },
  link: {
    width: '100%',
    textAlign: 'center',
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  withoutLabel: {
    marginTop: theme.spacing.unit * 3,
  },
  textFieldS: {
    flexBasis: 200,
  },
  errors: {
    width: 300,
    color: theme.palette.error.dark,
  },
  div: {
    marginBottom: '1rem',
  },
})

class SignIn extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showPassword: false,
    }
  }

  handleMouseDownPassword = event => {
    event.preventDefault()
  }

  handleClickShowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword })
  }

  render() {
    const {
      classes,
      massages,
      values,
      touched,
      errors,
      isSubmitting,
      handleChange,
      handleBlur,
      handleSubmit,
    } = this.props

    return (
      <form className={classes.container} onSubmit={handleSubmit} noValidate autoComplete="off">
        <Card className={classes.card}>
          <div className={classes.div}>
            <FormControl className={classes.textFieldS}>
              <InputLabel
                htmlFor="email"
                style={errors.email && touched.email && { color: 'red' }}
              >
                {errors.email && touched.email ? errors.email : 'Email'}
              </InputLabel>
              <Input
                fullWidth
                id="email"
                type="text"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.email && touched.email ? classes.errors : classes.textField}
                error={errors.email && touched.email && true}
              />
            </FormControl>
          </div>
          <div className={classes.div}>
            <FormControl className={classes.textFieldS}>
              <InputLabel
                htmlFor="password"
                style={errors.password && touched.password && { color: 'red' }}
              >
                {errors.password && touched.password ? errors.password : 'Password'}
              </InputLabel>
              <Input
                fullWidth
                id="password"
                type={this.state.showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.password && touched.password ? classes.errors : classes.textField}
                error={errors.password && touched.password && true}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="Toggle password visibility"
                      onClick={this.handleClickShowPassword}
                      onMouseDown={this.handleMouseDownPassword}
                    >
                      {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>}
              />
            </FormControl>
          </div>
          <Errors>{massages.length && massages}</Errors>
          <Grid container justify="center">
            <Button
              type="submit"
              color="primary"
              className={classes.button}
              disabled={isSubmitting}
            >
              Sign In
            </Button>
            <div className={classes.link}>
              <Link to="/signUp">
                <Typography variant="caption" color="inherit"> Нет аккаунта? </Typography>
              </Link>
            </div>
          </Grid>
        </Card>
      </form>
    )
  }
}

SignIn.propTypes = {
  classes: PropTypes.object.isRequired,
  massages: PropTypes.object,
  values: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}
SignIn.defaultProps = {
  massages: {},
}

const mapStateToProps = (store) => ({
  massages: store.signIn.massages,
})

export default connect(mapStateToProps)(withRouter(withFormik({
  mapPropsToValues: () => ({
    email: '',
    password: '',
  }),

  validationSchema: Yup.object().shape({

    email: Yup.string()
      .email('Неправильный email адрес!')
      .required('Поле является обязательным!'),

    password: Yup.string()
      .min(6, 'Пароль должен быть больше чем 6 символов!')
      .required('Поле является обязательным!'),

  }),
  handleSubmit: (values, { props, setSubmitting }) => {
    setTimeout(() => {
      props.dispatch(signIn(values))
      props.history.push('/')
      setSubmitting(false)
    }, 100)
  },
  displayName: 'SignIn',
})(withStyles(styles)(SignIn))))
