import React from 'react'
import { render } from 'react-dom'
import './style.scss'
import Button from './Button'

const App = () => {
  return (
    <div>
      <h1>React @</h1>
      <Button>Oi</Button>
    </div>
  )
}

render(<App />, document.getElementById('app'))
