import uuid from 'uuid'
import {
  SIGN_UP_FULFILLED,
  SIGN_UP_REJECTED,
  VERIFY_EMAIL,
} from '../actions/signUp.action'

const initialState = {
  value: {},
  uuId: '',
  uuIdVerify: '',
  email: '',
  messages: {},
}

const signUp = (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGN_UP_FULFILLED: {
      const uuId = uuid.v1()
      localStorage.setItem('token', uuId)
      localStorage.setItem('Email', payload.email)
      return {
        ...state,
        value: payload,
        uuId,
      }
    }

    case SIGN_UP_REJECTED: {
      return {
        ...state,
        errors: payload,
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
