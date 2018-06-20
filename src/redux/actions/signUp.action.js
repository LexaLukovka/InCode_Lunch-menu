import Http from '../../services/Http'

export const SIGN_UP = 'SIGN_UP'
export const SIGN_UP_REJECTED = 'SIGN_UP_REJECTED'
export const SIGN_UP_FULFILLED = 'SIGN_UP_FULFILLED'

export const VERIFY_EMAIL = 'VERIFY_EMAIL'

export const signUp = (value) => ({
  type: SIGN_UP,
  payload: Http.post('http://localhost:3333/signUp', value),
})

export const verifyEmail = (value) => ({
  type: VERIFY_EMAIL,
  payload: value,
})
