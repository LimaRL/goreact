import React, { Fragment } from 'react'
import GlobalStyle from './styles/global'

/**
 * pages
 */
import Main from './pages/main'

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Main />
    </Fragment>
  )
}

export default App
