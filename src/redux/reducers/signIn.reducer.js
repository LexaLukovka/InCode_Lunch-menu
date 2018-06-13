import uuid from 'uuid'
import { SIGN_IN, SIGN_OUT } from '../actions/signIn.action'

const initialState = {
  value: {},
  id: '',
}

const signIn = (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGN_IN: {
      const localStore = JSON.stringify(payload.Email)
      const uuId = uuid.v1()
      localStorage.setItem('uuId', uuId)
      localStorage.setItem('Email', localStore)
      return {
        ...state,
        value: payload,
        id: uuId,
      }
    }

    case SIGN_OUT: {
      localStorage.setItem('Email', (JSON.stringify(' ')))
      localStorage.setItem('uuId', (JSON.stringify(' ')))
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
