import {app} from 'hyperapp'
import {init} from './app/init'
import {view} from './app/view'

// Initialize the app
app({
  init,
  view,
  subscriptions: console.log,
  container: document.body
})
