import dishes from '../../dishes.json'
import dishesSelect from '../../dishes_select.json'

export const LOAD_DISHES_PENDING = 'LOAD_DISHES_PENDING'
export const LOAD_DISHES_FULFILLED = 'LOAD_DISHES_FULFILLED'
export const LOAD_DISHES_SELECT_PENDING = 'LOAD_DISHES_SELECT_PENDING'
export const LOAD_DISHES_SELECT_FULFILLED = 'LOAD_DISHES_SELECT_FULFILLED'
export const CREATE_DATA_STATISTICS = 'CREATE_DATA_STATISTICS'
export const CLICK_CARD_INDEX = 'CLICK_CARD_INDEX'

export const loadDishes = () => dispatch => {
  dispatch({
    type: LOAD_DISHES_PENDING,
  })
  setTimeout(() => dispatch({
    type: LOAD_DISHES_FULFILLED,
    payload: dishes,
  }), 500)
}

export const loadDishesSelect = () => dispatch => {
  dispatch({
    type: LOAD_DISHES_SELECT_PENDING,
  })
  setTimeout(() => dispatch({
    type: LOAD_DISHES_SELECT_FULFILLED,
    payload: dishesSelect,
  }), 500)
}

export const clickCardIndex = (index) => dispatch => {
  dispatch({
    type: CLICK_CARD_INDEX,
    payload: index,
  })
}

export const createDataStatistics = () => dispatch => {
  dispatch({
    type: CREATE_DATA_STATISTICS,
  })
}
