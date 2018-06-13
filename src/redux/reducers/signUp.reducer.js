import uuid from 'uuid'
import { SIGN_UP } from '../actions/signUp.action'

const initialState = {
  value: {},
}

const signUp = (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGN_UP: {
      const localStore = JSON.stringify(payload.Email)
      const uuId = uuid.v1()
      localStorage.setItem('uuId', uuId)
      localStorage.setItem('Email', localStore)
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
