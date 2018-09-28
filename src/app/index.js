// App dependencies
import {app} from '../lib/hyperappv2.js'
import {state} from './state'
import {actions} from './actions'
import {view} from './view'


app({
  init: state,
  view,
  container: document.body
})