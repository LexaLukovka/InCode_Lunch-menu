import User from '../../services/api/User'

export const SIGN_IN = 'SIGN_IN'
export const SIGN_IN_FULFILLED = 'SIGN_IN_FULFILLED'
export const SIGN_IN_REJECTED = 'SIGN_IN_REJECTED'

export const SIGN_UP = 'SIGN_UP'
export const SIGN_UP_REJECTED = 'SIGN_UP_REJECTED'
export const SIGN_UP_FULFILLED = 'SIGN_UP_FULFILLED'

export const VERIFY_EMAIL = 'VERIFY_EMAIL'
export const VERIFY_EMAIL_FULFILLED = 'VERIFY_EMAIL_FULFILLED'

export const VERIFY_EMAIL_CHECKED = 'VERIFY_EMAIL_CHECKED'

export const SIGN_OUT = 'SIGN_OUT'
export const SIGN_OUT_FULFILLED = 'SIGN_OUT_FULFILLED'

export const signIn = (form) => async dispatch => {
  await dispatch({
    type: SIGN_IN,
    payload: User.login(form),
  })
}

export const signOut = () => ({
  type: SIGN_OUT,
  payload: User.logout(),
})

export const signUp = (form) => async dispatch => {
  await dispatch({
    type: SIGN_UP,
    payload: User.register(form),
  })
}

export const verifyEmail = (form) => ({
  type: VERIFY_EMAIL,
  payload: User.verifyEmailPost(form),
})
export const verifyEmailGet = () => ({
  type: VERIFY_EMAIL_CHECKED,
  payload: User.verifyEmailGet(),
})
