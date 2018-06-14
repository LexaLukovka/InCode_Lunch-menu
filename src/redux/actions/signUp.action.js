export const SIGN_UP = 'SIGN_UP'
export const VERIFY_EMAIL = 'VERIFY_EMAIL'

export const signUp = (values) => {
  console.log(values)
  return {
    type: SIGN_UP,
    payload: values,
  }
}

export const verifyEmail = (value) => ({
  type: VERIFY_EMAIL,
  payload: value,
})
