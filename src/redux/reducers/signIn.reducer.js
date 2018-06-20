import uuid from 'uuid'
import {
  SIGN_IN_FULFILLED,
  SIGN_OUT_FULFILLED,
} from '../actions/signIn.action'

const initialState = {
  value: {},
  id: '',
}

const signIn = (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGN_IN_FULFILLED: {
      const uuId = uuid.v1()
      localStorage.setItem('uuId', uuId)
      localStorage.setItem('Email', payload.email)
      return {
        ...state,
        value: payload,
        id: uuId,
      }
    }

    case SIGN_OUT_FULFILLED: {
      localStorage.clear()
      return {
        ...state,
        value: initialState.value,
        id: initialState.id,
      }
    }

    default: {
      return state
    }
  }
}

export default signIn
