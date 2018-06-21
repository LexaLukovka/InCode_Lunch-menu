import User from '../../services/api/User'

export const SIGN_UP = 'SIGN_UP'
export const SIGN_UP_REJECTED = 'SIGN_UP_REJECTED'
export const SIGN_UP_FULFILLED = 'SIGN_UP_FULFILLED'

export const VERIFY_EMAIL = 'VERIFY_EMAIL'
export const VERIFY_EMAIL_FULFILLED = 'VERIFY_EMAIL_FULFILLED'

export const signUp = (form) => async dispatch => {
  await dispatch({
    type: SIGN_UP,
    payload: User.register(form),
  })
}

export const verifyEmail = (form) => ({
  type: VERIFY_EMAIL,
  payload: User.login(form),
})
