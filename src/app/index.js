// App dependencies
import {app} from 'hyperapp'
import {state} from './state'
import {actions} from './actions'
import {view} from './view'

window.main = app(state, actions, view, document.body)
window.main.init()
