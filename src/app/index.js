import {app} from 'hyperapp'
import {init} from './init'
import {App} from './App'

// Initialize the app
app({
  init,
  view: App,
  subscriptions: console.log,
  container: document.body
})