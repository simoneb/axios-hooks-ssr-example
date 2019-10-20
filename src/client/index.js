import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import { loadCache } from 'axios-hooks'

loadCache(window.__AXIOS_HOOKS_CACHE__)

delete window.__AXIOS_HOOKS_CACHE__

ReactDOM.hydrate(<App />, document.getElementById('root'))
