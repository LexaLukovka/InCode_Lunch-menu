import uuid from 'uuid'
import { SIGN_UP, VERIFY_EMAIL } from '../actions/signUp.action'

const initialState = {
  value: {},
  uuId: '',
  uuIdVerify: '',
  email: '',
}

const signUp = (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGN_UP: {
      const uuId = uuid.v1()
      localStorage.setItem('uuId', uuId)
      localStorage.setItem('Email', payload.email)
      return {
        ...state,
        value: payload,
        uuId,
      }
    }
    case VERIFY_EMAIL: {
      return {
        ...state,
        email: payload.Email,
        uuIdVerify: payload.uuid,
      }
    }
    default: {
      return state
    }
  }
}

export default signUp
