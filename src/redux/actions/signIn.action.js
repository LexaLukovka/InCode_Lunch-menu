export const SIGN_IN = 'SIGN_IN'
export const SIGN_OUT = 'SIGN_OUT'

export const signIn = (value) => ({
  type: SIGN_IN,
  payload: value,
})

export const signOut = () => ({
  type: SIGN_OUT,
})
