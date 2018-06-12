import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import App from './App'
import store from './store'
import SignUpScene from './container/SignUpScene'
import SignInScene from './container/SignInScene'

const Wrapper = () =>
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/signUp" component={SignUpScene} />
        <Route path="/signIn" component={SignInScene} />
      </Switch>
    </BrowserRouter>
  </Provider>

ReactDOM.render(<Wrapper />, document.getElementById('root'))


