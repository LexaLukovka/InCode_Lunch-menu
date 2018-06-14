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
import { verifyEmail } from '../../redux/actions/signUp.action'

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

class EmailVerification extends React.Component {
  submit = () => {
    this.props.form.validateFields((error, value) => {
      this.props.dispatch(verifyEmail(value))
      if (!error) {
        this.props.history.push('/')
      }
    })
  }

  render() {
    const { classes, email, uuId } = this.props
    const { getFieldProps, getFieldError } = this.props.form
    return (
      <form className={classes.container} noValidate autoComplete="off">
        <Card className={classes.card}>
          <TextField
            fullWidth
            error={getFieldError('Email') && true}
            id="required"
            label={getFieldError('Email') ? getFieldError('Email').join(',') : 'Email'}
            className={classes.textField}
            type="email"
            margin="normal"
            {...getFieldProps('Email', {
              rules: [{ required: true }],
            })}
            // disabled
            defaultValue={email}
          />
          <TextField
            type="hidden"
            {...getFieldProps('uuId')}
            defaultValue={uuId}
          />
          <Grid container justify="center">
            <Button color="primary" className={classes.button} onClick={this.submit}>
              Verify email
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

EmailVerification.propTypes = {
  classes: PropTypes.object.isRequired,
  form: formShape,
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  email: PropTypes.string,
  uuId: PropTypes.string,
}
EmailVerification.defaultProps = {
  form: '',
  email: '',
  uuId: '',
}

const mapStateToProps = (store) => ({
  email: store.signUp.value.Email,
  uuId: store.signUp.uuId,
})

export default connect(mapStateToProps)(createForm()(withRouter(withStyles(styles)(EmailVerification))))
