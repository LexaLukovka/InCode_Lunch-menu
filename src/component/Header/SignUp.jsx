/* eslint-disable no-return-assign,no-cond-assign */
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { withStyles } from '@material-ui/core/styles'
import { createForm, formShape } from 'rc-form'
import Link from 'react-router-dom/es/Link'
import TextField from '@material-ui/core/TextField'
import Card from '@material-ui/core/es/Card/Card'
import Button from '@material-ui/core/es/Button/Button'
import Grid from '@material-ui/core/es/Grid/Grid'
import Typography from '@material-ui/core/es/Typography/Typography'
import { signUp } from '../../redux/actions/signUp.action'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
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
})

class SignUp extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isVisibility: false,
    }
  }

  submit = () => {
    this.props.form.validateFields((error, value) => {
      this.props.dispatch(signUp(value))
      if (value.Password === value.Repeat_password) {
        this.setState({
          isVisibility: false,
        })
        if (!error) {
          this.props.history.push('/verifyEmail')
        }
      } else {
        this.setState({
          isVisibility: true,
        })
      }
    })
  }

  render() {
    let errors
    const { classes } = this.props
    const { getFieldProps, getFieldError } = this.props.form
    const Errors = () =>
      <Typography
        variant="caption"
        color="error"
        style={{ visibility: this.state.isVisibility ? 'visibility' : 'hidden' }}
      >
        <Grid container justify="center">
          Пароли не совпадают
        </Grid>
      </Typography>

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <Card className={classes.card}>
          <div>
            <TextField
              fullWidth
              error={getFieldError('Email') && true}
              id="email"
              label={(errors = getFieldError('Email')) ? errors.join(',') : 'Email'}
              className={classes.textField}
              type="email"
              margin="normal"
              {...getFieldProps('Email', {
                onChange() {},
                rules: [{ required: true }],
              })}
            />
          </div>
          <div>
            <TextField
              fullWidth
              error={getFieldError('Password') && true}
              id="password-input"
              label={(errors = getFieldError('Password')) ? errors.join(',') : 'Password'}
              className={classes.textField}
              type="password"
              autoComplete="current-password"
              margin="normal"
              {...getFieldProps('Password', {
                onChange() {},
                rules: [{ required: true }],
              })}
            />
          </div>
          <div>
            <TextField
              fullWidth
              error={getFieldError('Repeat_password') && true}
              id="repeat-password-input"
              label={(errors = getFieldError('Repeat_password')) ? errors.join(',') : 'Repeat password'}
              className={classes.textField}
              type="password"
              autoComplete="current-password"
              margin="normal"
              {...getFieldProps('Repeat_password', {

                rules: [{ required: true }],
              })}
            />
            <Errors />
          </div>
          <Grid container justify="center">
            <Button color="primary" className={classes.button} onClick={this.submit}>
              Sign Up
            </Button>
            <div className={classes.link}>
              <Link to="/signIn"> <Typography variant="caption" color="inherit"> Есть аккаунт? </Typography></Link>
            </div>
          </Grid>
        </Card>
      </form>
    )
  }
}

SignUp.propTypes = {
  classes: PropTypes.object.isRequired,
  form: formShape,
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
}
SignUp.defaultProps = {
  form: '',
}

export default connect()(createForm()(withRouter(withStyles(styles)(SignUp))))
