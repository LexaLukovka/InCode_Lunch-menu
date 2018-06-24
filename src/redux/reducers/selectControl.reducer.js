import Cache from '../../services/Cache'
import { SELECT_CONTROL_FULFILLED } from '../actions/selectControl.action'

const initialState = {
  checked: Cache.get('checked'),
}

const selectControl = (state = initialState, { type, payload }) => {
  switch (type) {
    case SELECT_CONTROL_FULFILLED: {
      return {
        ...state,
        checked: payload.checked ? payload.checked.checked : Cache.get('checked'),
      }
    }

    default: {
      return state
    }
  }
}

export default selectControl
