/* eslint-disable no-return-assign,no-cond-assign */
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { withStyles } from '@material-ui/core/styles'
import { createForm, formShape } from 'rc-form'
import TextField from '@material-ui/core/TextField'
import Card from '@material-ui/core/es/Card/Card'
import Button from '@material-ui/core/es/Button/Button'
import Grid from '@material-ui/core/es/Grid/Grid'
import { signUp } from '../redux/actions/signUp.action'
import Typography from '@material-ui/core/es/Typography/Typography'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  card: {
    margin: '5rem',
    padding: '2rem',
  },
  button: {
    marginTop: 25,
    margin: theme.spacing.unit,
    '&:focus': {
      outline: 0,
    },
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
        if (!error) {
          this.props.history.push('/')
        }
        this.setState({
          isVisibility: false,
        })
      }
      else {
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
      <Typography variant="caption" color="error"
                  style={{ visibility: this.state.isVisibility ? 'visibility' : 'hidden' }}>
        <Grid container justify="center">
          Пароли не совпадают
        </Grid>
      </Typography>

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <Card className={classes.card}>
          <div>
            <TextField
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
              error={getFieldError('Repeat_password') && true}
              id="repeat-password-input"
              label={(errors = getFieldError('Repeat_password')) ? errors.join(',') : 'Repeat password'}
              className={classes.textField}
              type="password"
              autoComplete="current-password"
              margin="normal"
              {...getFieldProps('Repeat_password', {
                onChange() {},
                rules: [{ required: true }],
              })}
            />
            <Errors />
          </div>
          <Grid container justify="center">
            <Button variant="outlined" color="primary" className={classes.button} onClick={this.submit}>
              Sign Up
            </Button>
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
