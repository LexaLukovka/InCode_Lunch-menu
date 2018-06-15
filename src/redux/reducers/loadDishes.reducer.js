import {
  LOAD_DISHES_PENDING,
  LOAD_DISHES_FULFILLED,
  LOAD_DISHES_SELECT_PENDING,
  LOAD_DISHES_SELECT_FULFILLED,
  CREATE_DATA_STATISTICS,
  CLICK_CARD_INDEX,
  LOAD_MODAL_DATA,
} from '../actions/loadDishes.action'

const initialState = {
  loading: false,
  loadingSelect: false,
  modalData: [],
  index: null,
  clicked: null,
  counter: 0,
  dishes: [],
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
        dishes: dish,
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
        dishesSelect: dishSelect,
      }
    }

    case LOAD_MODAL_DATA: {
      return {
        ...state,
        modalData: payload,
      }
    }

    case
    CREATE_DATA_STATISTICS: {
      const { dishesSelect, index, counter } = state
      const descriptions = dishesSelect.map(dish => dish.description).join(', ')

      const createData = {
        id: counter,
        date: '18.10.2018',
        number: (index + 1),
        description: descriptions,
      }
      const arrayStatistics = [...state.masStatistics]
      arrayStatistics.push(createData)
      return {
        ...state,
        counter: counter + 1,
        masStatistics: arrayStatistics,

      }
    }

    case
    CLICK_CARD_INDEX: {
      return {
        ...state,
        index: payload,
        clicked: state.clicked !== payload ? payload : null,
      }
    }

    default: {
      return state
    }
  }
}

export default loadDishes
