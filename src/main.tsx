import { app } from 'hyperapp'

// Middlewares
import withLocation from './utils/routing/withLocation'

// Root view
import App from '/src/components/core/App'

// Data for initial state
import { init as homeInit } from '/src/pages/HomePage'
import { init as counterInit } from '/src/pages/CounterPage'

// Global styles
import '/src/styles/base.module.css'

// Initialize the app on the #app div
withLocation(app)({
  init: { ...homeInit, ...counterInit },
  view: App,
  node: document.getElementById('app')
})
