import { app } from 'hyperapp'

// Actions
import Navigate from '/src/actions/Navigate'
import LocationChange from '/src/actions/LocationChange'

// Subscriptions
import onRouteChanged from '/src/subscriptions/onRouteChanged'
import onLinkClicked from '/src/subscriptions/onLinkClicked'

// Utils
import parseUrl from '/src/utils/parseUrl'

// Root view
import App from '/src/components/core/App'

// Data for initial state
import { init as homeInit } from '/src/pages/HomePage'
import { init as counterInit } from '/src/pages/CounterPage'

// Global styles
import '/src/styles/base.module.css'

// Initialize the app on the #app div
app({
  init: {
    location: parseUrl(window.location.pathname + window.location.search),
    ...homeInit,
    ...counterInit,
  },
  view: App,
  subscriptions: (state) => [
    onRouteChanged(LocationChange),
    onLinkClicked(Navigate)
  ],
  node: document.getElementById('app'),
})
