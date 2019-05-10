import React from 'react'
import './config/ReactotronConfig'

import { Provider } from 'react-redux'
import GlobalStyle from './styles/global'

import store from './store'

/**
 * pages
 */
import Router from './routes'

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Router />
    </Provider>
  )
}

export default App
