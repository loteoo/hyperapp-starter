import { app } from 'hyperapp'

// Middlewares
import withLocation from './utils/routing/withLocation'

// Root view
import App from '/components/core/App'

// Data for initial state
import { initialState as homeInitialState } from '/pages/HomePage'

// Utils
import provide from '/utils/provide'

// Global styles
import '/styles/base.css'

// Initialize the app on the #app div
withLocation(app)({
  init: { ...homeInitialState },
  view: (state) => provide(state, <App />),
  node: document.getElementById('app')
})
