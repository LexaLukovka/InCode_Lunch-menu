
import {
  SIGN_IN_FULFILLED,
  SIGN_IN_REJECTED,
  SIGN_OUT_FULFILLED,
  SIGN_UP_FULFILLED,
  SIGN_UP_REJECTED,
  VERIFY_EMAIL_FULFILLED,
} from '../actions/auth.action'

const initialState = {
  user: null,
  errors: [],
}

const auth = (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGN_IN_FULFILLED: {
      return {
        ...state,
        user: payload,
      }
    }

    case SIGN_IN_REJECTED: {
      return {
        ...state,
        errors: payload,
      }
    }

    case SIGN_OUT_FULFILLED: {
      return {
        ...state,
      }
    }

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

export default auth
