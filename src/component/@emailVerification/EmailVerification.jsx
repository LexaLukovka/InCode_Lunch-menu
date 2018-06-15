import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { withStyles } from '@material-ui/core/styles'
import { withFormik } from 'formik/dist/formik'
import Link from 'react-router-dom/es/Link'
import Card from '@material-ui/core/es/Card/Card'
import Typography from '@material-ui/core/es/Typography/Typography'
import Button from '@material-ui/core/es/Button/Button'
import Grid from '@material-ui/core/es/Grid/Grid'
import FormControl from '@material-ui/core/es/FormControl/FormControl'
import Input from '@material-ui/core/es/Input/Input'
import InputLabel from '@material-ui/core/es/InputLabel/InputLabel'
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

const EmailVerification = ({
  classes,
  errors,
  isSubmitting,
  handleSubmit,
  email,
  uuId,
}) =>
  <form className={classes.container} onSubmit={handleSubmit} noValidate autoComplete="off">
    <Card className={classes.card}>
      <div className={classes.div}>
        <FormControl className={classes.textFieldS}>
          <InputLabel
            htmlFor="email"
            style={errors.email && { color: 'red' }}
          >
            {errors.email ? errors.email : 'Email'}
          </InputLabel>
          <Input
            fullWidth
            id="email"
            type="text"
            value={email}
            disabled
          />
        </FormControl>
      </div>
      <div className={classes.div}>
        <FormControl className={classes.textFieldS}>
          <Input
            fullWidth
            type="hidden"
            id="uuId"
            value={uuId}
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
          Verify email
        </Button>
        <div className={classes.link}>
          <Link to="/signIn"> <Typography variant="caption" color="inherit"> Есть аккаунт? </Typography></Link>
        </div>
      </Grid>
    </Card>
  </form>

EmailVerification.propTypes = {
  classes: PropTypes.object.isRequired,
  email: PropTypes.string,
  uuId: PropTypes.string,
  errors: PropTypes.object.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}
EmailVerification.defaultProps = {
  email: '',
  uuId: '',
}

const mapStateToProps = (store) => ({
  email: store.signUp.value.email,
  uuId: store.signUp.uuId,
})

export default connect(mapStateToProps)(withRouter(withFormik({
  handleSubmit: (values, { props, setSubmitting }) => {
    setTimeout(() => {
      props.dispatch(verifyEmail(values))
      props.history.push('/')
      setSubmitting(false)
    }, 100)
  },
  displayName: 'VerifyEmail',
})(withStyles(styles)(EmailVerification))))
