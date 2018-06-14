export const SIGN_UP = 'SIGN_UP'
export const VERIFY_EMAIL = 'VERIFY_EMAIL'

export const signUp = (value) => ({
  type: SIGN_UP,
  payload: value,
})

export const verifyEmail = (value) => ({
  type: VERIFY_EMAIL,
  payload: value,
})
