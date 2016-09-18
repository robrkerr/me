import ReactDOM from 'react-dom'
import React from 'react'
import Page from './Page'
import vhfix from 'viewport-units-buggyfill'
import './core.css'

vhfix.init()

ReactDOM.render(
  <Page />,
  document.getElementById('page')
)
