import uuid from 'uuid'
import { SIGN_IN } from '../actions/signIn.action'

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
    default: {
      return state
    }
  }
}

export default signIn
