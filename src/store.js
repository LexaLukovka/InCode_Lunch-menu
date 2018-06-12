import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import loadDishes from './redux/reducers/loadDishes.reducer'

const reducers = combineReducers({
  loadDishes,
})

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk)),
)

export default store
