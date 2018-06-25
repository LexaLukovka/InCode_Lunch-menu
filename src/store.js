/* eslint-disable function-paren-newline */
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise-middleware'
import loadDishes from './redux/reducers/load.reducer'
import auth from './redux/reducers/auth.reducer'
import selectControl from './redux/reducers/selectControl.reducer'
import buttonNavigation from './redux/reducers/buttonNavigation.reducer'

const reducers = combineReducers({
  loadDishes,
  auth,
  selectControl,
  buttonNavigation,
})

const store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(
      thunk,
      promiseMiddleware(),
    ))
  ,
)

export default store
