import {
  LOAD_DISHES_PENDING,
  LOAD_DISHES_FULFILLED,
  LOAD_DISHES_SELECT_PENDING,
  LOAD_DISHES_SELECT_FULFILLED,
} from '../actions/loadDishes.action'

const initialState = {
  loading: false,
  loadingSelect: false,
  dishes: [],
  dishesSelect: [],
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


    default: {
      return state
    }
  }
}

export default loadDishes
