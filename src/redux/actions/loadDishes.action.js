import modalData from '../../modalData.json'
import Http from '../../services/Http'
import Menu from '../../services/api/Menu'

export const LOAD_DISHES = 'LOAD_DISHES'
export const LOAD_DISHES_PENDING = 'LOAD_DISHES_PENDING'
export const LOAD_DISHES_FULFILLED = 'LOAD_DISHES_FULFILLED'
export const LOAD_DISHES_REJECTED = 'LOAD_DISHES_REJECTED'

export const CHANGE_SELECT = 'CHANGE_SELECT'
export const CHANGE_SELECT_FULFILLED = 'CHANGE_SELECT_FULFILLED'

export const LOAD_DISHES_SELECT = 'LOAD_DISHES_SELECT'
export const LOAD_DISHES_SELECT_PENDING = 'LOAD_DISHES_SELECT_PENDING'
export const LOAD_DISHES_SELECT_FULFILLED = 'LOAD_DISHES_SELECT_FULFILLED'

export const CREATE_DATA_STATISTICS = 'CREATE_DATA_STATISTICS'
export const CREATE_DATA_STATISTICS_FULFILLED = 'CREATE_DATA_STATISTICS_FULFILLED'

export const CREATE_DATA_ADMIN = 'CREATE_DATA_ADMIN'
export const CREATE_DATA_ADMIN_FULFILLED = 'CREATE_DATA_ADMIN_FULFILLED'

export const CHANGE_BALANCE = 'CHANGE_BALANCE'
export const CHANGE_BALANCE_FULFILLED = 'CHANGE_BALANCE_FULFILLED'

export const CLICK_CARD_INDEX = 'CLICK_CARD_INDEX'
export const LOAD_MODAL_DATA = 'LOAD_MODAL_DATA'

export const loadDishes = () => ({
  type: LOAD_DISHES,
  payload: Menu.all(),
})

export const loadDishesSelect = () => ({
  type: LOAD_DISHES_SELECT,
  // payload: Http.get('/dishes'),
})

export const changeSelect = (value) => ({
  type: CHANGE_SELECT,
  // payload: Http.put('/menu'),
})

export const changeBalance = (email, value) => ({
  type: CHANGE_BALANCE,
  payload: Http.put('/balance', { email, value }),
})

export const loadModalData = () => ({
  type: LOAD_MODAL_DATA,
  payload: modalData,
})

export const clickCardIndex = (index, value) => ({
  type: CLICK_CARD_INDEX,
  payload: { index, value },
})

export const createDataStatistics = (index, value) => ({
  type: CREATE_DATA_STATISTICS,
  payload: Http.post('/order', { index, value }),
})

export const createDataAdmin = () => ({
  type: CREATE_DATA_ADMIN,
  payload: Http.get('/users'),
})
