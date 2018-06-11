import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {Provider} from 'react-redux'
import store from './store'

const Wrapper = () =>
    <Provider store={store}>
        <App/>
    </Provider>


ReactDOM.render(<Wrapper/>, document.getElementById('root'))
