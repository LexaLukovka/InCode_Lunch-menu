import dishes from '../../dishes.json'
import dishesSelect from '../../dishes_select.json'

export const LOAD_DISHES_PENDING = 'LOAD_DISHES_PENDING'
export const LOAD_DISHES_FULFILLED = 'LOAD_DISHES_FULFILLED'

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
    type: LOAD_DISHES_PENDING,
  })
  setTimeout(() => dispatch({
    type: LOAD_DISHES_FULFILLED,
    payload: dishesSelect,
  }), 500)
}
