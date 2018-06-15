import { BUTTON_NAVIGATION } from '../actions/buttonNavigation.action'

const initialState = {
  buttonNavigation: null,
}

const buttonNavigation = (state = initialState, { type, payload }) => {
  switch (type) {
    case BUTTON_NAVIGATION: {
      return {
        ...state,
        buttonNavigation: payload,
      }
    }

    default: {
      return state
    }
  }
}
export default buttonNavigation
