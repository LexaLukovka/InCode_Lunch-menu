import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import App from './App'
import store from './store'
import LoginScene from './container/LoginScene'
import LogoutScene from './container/LogoutScene'

const Wrapper = () =>
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/login" component={LoginScene} />
        <Route path="/logout" component={LogoutScene} />
      </Switch>
    </BrowserRouter>
  </Provider>

ReactDOM.render(<Wrapper />, document.getElementById('root'))


