import { app } from 'hyperapp'

// Middlewares
import withLocation from './utils/routing/withLocation'

// Root view
import App from '/components/core/App'

// Data for initial state
import { initialState as homeInitialState } from '/pages/HomePage'

// Global styles
import '/styles/base.css'

// Initialize the app on the #app div
withLocation(app)({
  init: { ...homeInitialState },
  view: App,
  node: document.getElementById('app')
})
