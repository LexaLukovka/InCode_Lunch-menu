/* eslint-disable no-return-assign,no-cond-assign,react/jsx-curly-spacing */
import React from 'react'
import PropTypes from 'prop-types'
import { withFormik } from 'formik'
import * as Yup from 'yup'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { withStyles } from '@material-ui/core/styles'
import Link from 'react-router-dom/es/Link'
import Card from '@material-ui/core/es/Card/Card'
import Button from '@material-ui/core/es/Button/Button'
import Grid from '@material-ui/core/es/Grid/Grid'
import Typography from '@material-ui/core/es/Typography/Typography'
import FormControl from '@material-ui/core/es/FormControl/FormControl'
import TextField from '@material-ui/core/es/TextField/TextField'
import InputAdornment from '@material-ui/core/es/InputAdornment/InputAdornment'
import IconButton from '@material-ui/core/es/IconButton/IconButton'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import { signUp, verifyEmailGet } from '../../../redux/actions/auth.action'
import Errors from '../../Errors/Errors'

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

class SignUp extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showPassword: false,
      showRepeatPassword: false,
    }
  }

  handleSubmit = (e) => {
    const { handleSubmit } = this.props
    this.setState({ isSubmited: true })

    handleSubmit(e)
  }

  serverError = (fieldName) => {
    const { auth } = this.props

    const serverErrors = {}
    if (auth.errors) {
      auth.errors.forEach(error => {
        serverErrors[error.field] = error.message
      })
    }

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
  handleClickShowReapedPassword = () => {
    this.setState({ showRepeatPassword: !this.state.showRepeatPassword })
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
                name="email"
                type="text"
                label="Введите Email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.email && touched.email ? classes.errors : classes.textField}
                error={!!this.hasError('email')}
                helperText={this.showHelperError('email')}
              />
            </FormControl>
          </div>
          <div className={classes.div}>
            <FormControl className={classes.textFieldS}>
              <TextField
                fullWidth
                name="password"
                label="Введите пароль"
                type={this.state.showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.password && touched.password ? classes.errors : classes.textField}
                error={!!this.hasError('password')}
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
              />
            </FormControl>
          </div>
          <div className={classes.div}>
            <FormControl className={classes.textFieldS}>
              <TextField
                fullWidth
                name="repeatPassword"
                label="Повторите пароль"
                type={this.state.showRepeatPassword ? 'text' : 'password'}
                value={values.repeatPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.repeatPassword && touched.repeatPassword ? classes.errors : classes.textField}
                helperText={this.showHelperError('repeatPassword')}
                error={!!this.hasError('repeatPassword')}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="Toggle password visibility"
                        onClick={this.handleClickShowReapedPassword}
                        onMouseDown={this.handleMouseDownPassword}
                      >
                        {this.state.showRepeatPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </FormControl>
          </div>
          {!errors.repeatPassword && values.password !== values.repeatPassword &&
          <Errors> Пароли не совпадают </Errors>
          }
          <Grid container justify="center">
            <Button
              type="submit"
              color="primary"
              className={classes.button}
              disabled={isSubmitting}
            >
              Sign Up
            </Button>
            <div className={classes.link}>
              <Link to="/signIn">
                <Typography variant="caption" color="inherit"> Есть аккаунт? </Typography>
              </Link>
            </div>
          </Grid>
        </Card>
      </form>
    )
  }
}

SignUp.propTypes = {
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
  auth: store.auth,
})

export default connect(mapStateToProps)(withRouter(withFormik({
  mapPropsToValues: () => ({
    email: '',
    password: '',
    repeatPassword: '',
  }),

  validationSchema: Yup.object().shape({

    email: Yup.string()
      .email('Неправильный email адрес!')
      .required('Поле является обязательным!'),

    password: Yup.string()
      .min(6, 'Пароль должен быть больше чем 6 символов!')
      .required('Поле является обязательным!'),

    repeatPassword: Yup.string()
      .min(6, 'Пароль должен быть больше чем 6 символов!')
      .required('Поле является обязательным!'),
  }),
  handleSubmit: (values, { props, setSubmitting }) => {
    setTimeout(() => {
      if (values.password === values.repeatPassword) {
        props.dispatch(signUp(values))
        props.dispatch(verifyEmailGet())
      }
      setSubmitting(false)
    }, 500)
  },
  displayName: 'SignUp',
})(withStyles(styles)(SignUp))))
