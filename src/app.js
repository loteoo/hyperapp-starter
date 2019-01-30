import {app} from 'hyperapp'
import {state} from './app/state'
import {view} from './app/view'

// Initialize the app
app({
  init: state,
  view,
  subscriptions: console.log,
  container: document.body
})
