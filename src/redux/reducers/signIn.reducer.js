import { SIGN_IN } from '../actions/signIn.action'

const initialState = {
  value: {},
}

const signIn = (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGN_IN: {
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

export default signIn
