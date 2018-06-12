import { SIGN_UP } from '../actions/signUp.action'

const initialState = {
  value: {},
}

const signUp = (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGN_UP: {
      return {
        ...state,
        value: payload,
      }
    }
    default: {
      return state
    }
  }
}

export default signUp
