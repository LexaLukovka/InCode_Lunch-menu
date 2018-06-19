import axios from 'axios/index'

export const SIGN_IN = 'SIGN_IN'
export const SIGN_OUT = 'SIGN_OUT'

export const signIn = (value) => {
  axios.post('http://localhost:3333/signIn', value)

  return {
    type: SIGN_IN,
    payload: value,
  }
}

export const signOut = () => ({
  type: SIGN_OUT,
})
