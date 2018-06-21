import uuid from 'uuid'
import {
  SIGN_IN_FULFILLED,
  SIGN_IN_REJECTED,
  SIGN_OUT,
} from '../actions/signIn.action'

const initialState = {
  user: null,
  id: '',
  errors: [],
}

const signIn = (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGN_IN_FULFILLED: {
      const uuId = uuid.v1()
      localStorage.setItem('uuId', uuId)
      localStorage.setItem('Email', payload.user[0].email)
      return {
        ...state,
        user: payload,
        id: uuId,
      }
    }

    case SIGN_IN_REJECTED: {
      return {
        ...state,
        errors: payload,
      }
    }

    case SIGN_OUT: {
      localStorage.clear()
      return {
        ...state,
        user: initialState.user,
        id: initialState.id,
      }
    }

    default: {
      return state
    }
  }
}

export default signIn
