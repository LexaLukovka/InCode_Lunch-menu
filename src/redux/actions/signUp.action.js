export const SIGN_UP = 'SIGN_UP'
export const VERIFY_EMAIL = 'VERIFY_EMAIL'

export const signUp = (values) => ({
  type: SIGN_UP,
  payload: values,
})

export const verifyEmail = (value) => ({
  type: VERIFY_EMAIL,
  payload: value,
})
