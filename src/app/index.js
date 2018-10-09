import {app} from 'hyperapp'
import {init} from './init'
import {view} from './view'

// Initialize the app
app({
  init,
  view,
  subscriptions: console.log,
  container: document.body
})