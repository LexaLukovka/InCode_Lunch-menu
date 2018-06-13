import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { withStyles } from '@material-ui/core/styles'
import { createForm, formShape } from 'rc-form'
import Link from 'react-router-dom/es/Link'
import TextField from '@material-ui/core/TextField'
import Card from '@material-ui/core/es/Card/Card'
import Typography from '@material-ui/core/es/Typography/Typography'
import Button from '@material-ui/core/es/Button/Button'
import Grid from '@material-ui/core/es/Grid/Grid'
import { signIn } from '../../redux/actions/signIn.action'

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

class SignIn extends React.Component {
  submit = () => {
    this.props.form.validateFields((error, value) => {
      this.props.dispatch(signIn(value))
      if (!error) {
        this.props.history.push('/')
      }
    })
  }

  render() {
    const { classes } = this.props
    const { getFieldProps, getFieldError } = this.props.form
    return (
      <form className={classes.container} noValidate autoComplete="off">
        <Card className={classes.card}>
          <div>
            <TextField
              fullWidth
              error={getFieldError('Email') && true}
              id="required"
              label={getFieldError('Email') ? getFieldError('Email').join(',') : 'Email'}
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
              label={getFieldError('Password') ? getFieldError('Password').join(',') : 'Password'}
              className={classes.textField}
              type="password"
              autoComplete="current-password"
              margin="normal"
              {...getFieldProps('Password', {
                rules: [{ required: true }],
              })}
            />
          </div>
          <Grid container justify="center">
            <Button color="primary" className={classes.button} onClick={this.submit}>
              Sign In
            </Button>
            <div className={classes.link}>
              <Link to="/signUp"> <Typography variant="caption" color="inherit"> Нет аккаунта? </Typography></Link>
            </div>
          </Grid>
        </Card>
      </form>
    )
  }
}

SignIn.propTypes = {
  classes: PropTypes.object.isRequired,
  form: formShape,
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
}
SignIn.defaultProps = {
  form: '',
}

export default connect()(createForm()(withRouter(withStyles(styles)(SignIn))))
