import Http from '../../services/Http'

export const SIGN_IN = 'SIGN_IN'
export const SIGN_IN_FULFILLED = 'SIGN_IN_FULFILLED'
export const SIGN_IN_REJECTED = 'SIGN_IN_REJECTED'

export const SIGN_OUT = 'SIGN_OUT'
export const SIGN_OUT_FULFILLED = 'SIGN_OUT_FULFILLED'

export const signIn = (value) => ({
  type: SIGN_IN,
  payload: Http.post('http://localhost:3333/signIn', value),
})

export const signOut = () => ({
  type: SIGN_OUT,
})
