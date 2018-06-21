import modalData from '../../modalData.json'
import Http from '../../services/Http'

export const LOAD_DISHES = 'LOAD_DISHES'
export const LOAD_DISHES_PENDING = 'LOAD_DISHES_PENDING'
export const LOAD_DISHES_FULFILLED = 'LOAD_DISHES_FULFILLED'

export const LOAD_DISHES_SELECT = 'LOAD_DISHES_SELECT'
export const LOAD_DISHES_SELECT_PENDING = 'LOAD_DISHES_SELECT_PENDING'
export const LOAD_DISHES_SELECT_FULFILLED = 'LOAD_DISHES_SELECT_FULFILLED'

export const CREATE_DATA_STATISTICS = 'CREATE_DATA_STATISTICS'
export const CREATE_DATA_ADMIN = 'CREATE_DATA_ADMIN'

export const CLICK_CARD_INDEX = 'CLICK_CARD_INDEX'
export const LOAD_MODAL_DATA = 'LOAD_MODAL_DATA'

export const loadDishes = () => async dispatch => {
  await dispatch({
    type: LOAD_DISHES,
    payload: Http.get('/menu'),
  })
}

export const loadDishesSelect = () => async dispatch => {
  await dispatch({
    type: LOAD_DISHES_SELECT,
    payload: Http.get('/dishes'),
  })
}
export const loadModalData = () => ({
  type: LOAD_MODAL_DATA,
  payload: modalData,
})

export const clickCardIndex = (index, value) => ({
  type: CLICK_CARD_INDEX,
  payload: { index, value },
})

export const createDataStatistics = () => ({
  type: CREATE_DATA_STATISTICS,
})
export const createDataAdmin = () => ({
  type: CREATE_DATA_ADMIN,
})
