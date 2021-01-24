import { app } from 'hyperapp'

// Middlewares
import withLocation from './utils/routing/withLocation'

// Root view
import App from '/components/core/App'

// Data for initial state
import { init as homeInit } from '/pages/HomePage'
import { init as counterInit } from '/pages/CounterPage'

// Global styles
import '/styles/base.css'

// Initialize the app on the #app div
withLocation(app)({
  init: { ...homeInit, ...counterInit },
  view: App,
  node: document.getElementById('app')
})
