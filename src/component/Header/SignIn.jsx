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
import TextField from '@material-ui/core/es/TextField/TextField'
import Typography from '@material-ui/core/es/Typography/Typography'
import Button from '@material-ui/core/es/Button/Button'
import Grid from '@material-ui/core/es/Grid/Grid'
import FormControl from '@material-ui/core/es/FormControl/FormControl'
import InputAdornment from '@material-ui/core/es/InputAdornment/InputAdornment'
import IconButton from '@material-ui/core/es/IconButton/IconButton'
import { signIn } from '../../redux/actions/signIn.action'

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
  state = {
    showPassword: false,
    isSubmited: false,
  }

  handleSubmit = (e) => {
    const { handleSubmit } = this.props
    this.setState({ isSubmited: true })

    handleSubmit(e)
  }

  serverError = (fieldName) => {
    const { auth } = this.props

    const serverErrors = {}
    auth.errors.forEach(error => {
      serverErrors[error.field] = error.message
    })

    return serverErrors[fieldName]
  }

  hasError = (fieldName) => {
    const { isSubmited } = this.state
    const { errors, touched } = this.props

    return (!!errors[fieldName] && touched[fieldName] && isSubmited) || this.serverError(fieldName)
  }

  showHelperError = (fieldName) => {
    const { errors, touched } = this.props

    return (touched[fieldName] && errors[fieldName]) || this.serverError(fieldName)
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
      values,
      touched,
      errors,
      isSubmitting,
      handleChange,
      handleBlur,
    } = this.props
    return (
      <form className={classes.container} onSubmit={this.handleSubmit} noValidate>
        <Card className={classes.card}>
          <div className={classes.div}>
            <FormControl className={classes.textFieldS}>
              <TextField
                fullWidth
                label="Введите email"
                name="email"
                type="text"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.email && touched.email ? classes.errors : classes.textField}
                error={this.hasError('email')}
                helperText={this.showHelperError('email')}
              />
            </FormControl>
          </div>
          <div className={classes.div}>
            <FormControl className={classes.textFieldS}>
              <TextField
                fullWidth
                label="Введите пароль"
                name="password"
                type={this.state.showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handleChange}
                helperText={this.showHelperError('password')}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="Toggle password visibility"
                        onClick={this.handleClickShowPassword}
                        onMouseDown={this.handleMouseDownPassword}
                      >
                        {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                onBlur={handleBlur}
                className={errors.password && touched.password ? classes.errors : classes.textField}
                error={this.hasError('password')}

              />
            </FormControl>
          </div>
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
  auth: PropTypes.object.isRequired,
  values: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}

const mapStateToProps = (store) => ({
  auth: store.signIn,
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
      // props.history.push('/')
      setSubmitting(false)
    }, 100)
  },
  displayName: 'SignIn',
})(withStyles(styles)(SignIn))))
