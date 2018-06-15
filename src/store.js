import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import loadDishes from './redux/reducers/loadDishes.reducer'
import signUp from './redux/reducers/signUp.reducer'
import signIn from './redux/reducers/signIn.reducer'
import selectControl from './redux/reducers/selectControl.reducer'
import buttonNavigation from './redux/reducers/buttonNavigation.reducer'

const reducers = combineReducers({
  loadDishes,
  signUp,
  signIn,
  selectControl,
  buttonNavigation,
})

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk)),
)

export default store
