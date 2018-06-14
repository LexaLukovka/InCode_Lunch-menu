import {
  LOAD_DISHES_PENDING,
  LOAD_DISHES_FULFILLED,
  LOAD_DISHES_SELECT_PENDING,
  LOAD_DISHES_SELECT_FULFILLED,
  CREATE_DATA_STATISTICS,
  CLICK_CARD_INDEX,
} from '../actions/loadDishes.action'

const initialState = {
  loading: false,
  loadingSelect: false,
  index: null,
  clicked: null,
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

    case CREATE_DATA_STATISTICS: {
      const { dishesSelect, index } = state
      // console.log(index)
      let counter = 0
      const createData = (date, number, description) => {
        counter += 1
        return { id: counter, date, number, description }
      }
      const descriptions = dishesSelect.map(dish => dish.description).join(', ')
      const create = createData('18.10.2018', index + 1, descriptions)
      const arrayStatistics = [...state.masStatistics]
      arrayStatistics.push(create)
      return {
        ...state,
        masStatistics: arrayStatistics,
      }
    }

    case CLICK_CARD_INDEX: {
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
