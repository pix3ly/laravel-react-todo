import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import THING from './reducers'

import App from './components/App'

let store = createStore(THING)

render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('app'))
