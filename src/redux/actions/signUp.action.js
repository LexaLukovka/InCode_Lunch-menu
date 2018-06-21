import Http from '../../services/Http'

export const SIGN_UP = 'SIGN_UP'
export const SIGN_UP_REJECTED = 'SIGN_UP_REJECTED'
export const SIGN_UP_FULFILLED = 'SIGN_UP_FULFILLED'

export const VERIFY_EMAIL = 'VERIFY_EMAIL'
export const VERIFY_EMAIL_FULFILLED = 'VERIFY_EMAIL_FULFILLED'

export const signUp = (value) => async dispatch => {
  await dispatch({
    type: SIGN_UP,
    payload: Http.post('http://localhost:3333/signUp', value),
  })
}

export const verifyEmail = (value) => ({
  type: VERIFY_EMAIL,
  payload: Http.post('http://localhost:3333/signIn', value),
})
