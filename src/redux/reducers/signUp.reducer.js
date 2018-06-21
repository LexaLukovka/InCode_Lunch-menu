import uuid from 'uuid'
import {
  SIGN_UP_FULFILLED,
  SIGN_UP_REJECTED,
  VERIFY_EMAIL_FULFILLED,
} from '../actions/signUp.action'

const initialState = {
  user: null,
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
      localStorage.setItem('Email', payload.user[0].email)
      return {
        ...state,
        user: payload,
        uuId,
      }
    }

    case SIGN_UP_REJECTED: {
      return {
        ...state,
        errors: payload,
      }
    }

    case VERIFY_EMAIL_FULFILLED: {
      return {
        ...state,
        user: payload,
        uuIdVerify: payload.uuid,
      }
    }
    default: {
      return state
    }
  }
}

export default signUp
