import { SELECT_CONTROL } from '../actions/selectControl.action'

const initialState = {
  checked: true,
}

const selectControl = (state = initialState, { type, payload }) => {
  switch (type) {
    case SELECT_CONTROL: {
      return {
        ...state,
        checked: payload,
      }
    }

    default: {
      return state
    }
  }
}

export default selectControl
