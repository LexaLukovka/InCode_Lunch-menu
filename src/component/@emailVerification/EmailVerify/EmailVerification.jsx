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
import TextField from '@material-ui/core/es/TextField/TextField'
import { verifyEmail } from '../../../redux/actions/auth.action'
import Cache from '../../../services/Cache'

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
  textFieldS: {
    flexBasis: 200,
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

const EmailVerification = ({ classes, isSubmitting, handleSubmit }) =>
  <form className={classes.container} onSubmit={handleSubmit} autoComplete="off">
    <Card className={classes.card}>
      <div>
        <FormControl className={classes.textFieldS}>
          <TextField
            fullWidth
            className={classes.textField}
            name="email"
            label="Email"
            type="text"
            value={Cache.get('user') && Cache.get('user').email}
            disabled
          />
        </FormControl>
      </div>
      <div className={classes.div}>
        <FormControl className={classes.textFieldS}>
          <Input
            fullWidth
            type="hidden"
            name="token"
            value={Cache.get('user') && Cache.get('user').password}
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
  isSubmitting: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}

const mapStateToProps = (store) => ({
  auth: store.auth,
})

export default connect(mapStateToProps)(withRouter(withFormik({
  handleSubmit: (values, { props, setSubmitting }) => {
    setTimeout(() => {
      props.dispatch(verifyEmail(Cache.get('user')))
      setSubmitting(false)
    }, 100)
    props.history.push('/')
  },
  displayName: 'VerifyEmail',
})(withStyles(styles)(EmailVerification))))
