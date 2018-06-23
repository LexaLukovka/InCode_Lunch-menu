import {
  LOAD_DISHES_PENDING,
  LOAD_DISHES_FULFILLED,
  LOAD_DISHES_REJECTED,

  CHANGE_SELECT_FULFILLED,

  LOAD_DISHES_SELECT_PENDING,
  LOAD_DISHES_SELECT_FULFILLED,

  CREATE_DATA_ADMIN_FULFILLED,
  CREATE_DATA_STATISTICS_FULFILLED,
  SHOW_STATISTICS_FULFILLED,
  CHANGE_BALANCE_FULFILLED,

  CLICK_CARD_INDEX,
  LOAD_MODAL_DATA,
} from '../actions/loadDishes.action'

const initialState = {
  loading: false,
  loadingSelect: false,
  users: null,
  userBalance: null,
  modalData: [],
  dish: null,
  index: null,
  clicked: null,
  counter: 0,
  menu: [],
  statistics: [],
  dishesSelect: [],
  masStatistics: [],
}

const loadDishes = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_DISHES_PENDING: {
      return {
        ...state,
        loading: true,
      }
    }
    case LOAD_DISHES_FULFILLED: {
      return {
        ...state,
        menu: payload.menu,
      }
    }
    case LOAD_DISHES_REJECTED: {
      return {
        ...state,
      }
    }

    case CHANGE_SELECT_FULFILLED: {
      return {
        ...state,
      }
    }

    case LOAD_DISHES_SELECT_PENDING: {
      return {
        ...state,
        loadingSelect: true,
      }
    }
    case LOAD_DISHES_SELECT_FULFILLED: {
      return {
        ...state,
        dishesSelect: payload.dish,
      }
    }

    case SHOW_STATISTICS_FULFILLED: {
      return {
        ...state,
        statistics: payload.orders,
      }
    }

    case CHANGE_BALANCE_FULFILLED: {
      return {
        ...state,
        userBalance: payload.users,
      }
    }

    case LOAD_MODAL_DATA: {
      return {
        ...state,
        modalData: payload,
      }
    }

    case CREATE_DATA_STATISTICS_FULFILLED: {
      return {
        ...state,
        masStatistics: payload.createData,
      }
    }

    case CREATE_DATA_ADMIN_FULFILLED: {
      return {
        ...state,
        users: payload.user,
      }
    }

    case CLICK_CARD_INDEX: {
      return {
        ...state,
        index: payload.index,
        dish: payload,
        clicked: state.clicked !== payload.index ? payload.index : null,
      }
    }

    default: {
      return state
    }
  }
}

export default loadDishes
