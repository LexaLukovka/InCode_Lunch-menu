import {
  LOAD_DISHES_PENDING,
  LOAD_DISHES_FULFILLED,
  LOAD_DISHES_SELECT_PENDING,
  LOAD_DISHES_SELECT_FULFILLED,
  CREATE_DATA_STATISTICS,
  CREATE_DATA_ADMIN,
  CLICK_CARD_INDEX,
  LOAD_MODAL_DATA,
} from '../actions/loadDishes.action'

const initialState = {
  loading: false,
  loadingSelect: false,
  modalData: [],
  dish: null,
  index: null,
  clicked: null,
  counter: 0,
  menu: [],
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
      let dish
      const { loading } = state
      if (loading === true) {
        dish = payload
      }
      return {
        ...state,
        menu: dish.menu,
      }
    }
    case LOAD_DISHES_SELECT_PENDING: {
      return {
        ...state,
        loadingSelect: true,
      }
    }
    case LOAD_DISHES_SELECT_FULFILLED: {
      let dishSelect
      const { loadingSelect } = state
      if (loadingSelect === true) {
        dishSelect = payload
      }
      return {
        ...state,
        dishesSelect: dishSelect.dish,
      }
    }

    case LOAD_MODAL_DATA: {
      return {
        ...state,
        modalData: payload,
      }
    }

    case CREATE_DATA_STATISTICS: {
      const { index, counter, dish } = state
      const createData = {
        id: counter,
        date: '18.10.2018',
        number: (index + 1),
        description: dish.value.map(value => value.description).join(', '),
      }
      const arrayStatistics = [...state.masStatistics]
      arrayStatistics.push(createData)
      return {
        ...state,
        counter: counter + 1,
        masStatistics: arrayStatistics,

      }
    }
    case CREATE_DATA_ADMIN: {
      const { index, counter, dish } = state
      const createData = {
        id: counter,
        email: '18.10.2018',
        money: (index + 1),
      }
      const arrayStatistics = [...state.masStatistics]
      arrayStatistics.push(createData)
      return {
        ...state,
        counter: counter + 1,
        masStatistics: arrayStatistics,

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
