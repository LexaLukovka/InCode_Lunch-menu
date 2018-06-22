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
      return {
        ...state,
        user: payload,
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
      }
    }
    default: {
      return state
    }
  }
}

export default signUp
