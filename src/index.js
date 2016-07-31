import ReactDOM from 'react-dom'
import React from 'react'
import App from './components/App'
import vhfix from 'viewport-units-buggyfill'
import './core.css'

vhfix.init()

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
