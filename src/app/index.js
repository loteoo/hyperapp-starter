import {app} from '../lib/hyperappv2.js'
import {init} from './init'
import {view} from './view'

// Initialize the app
app({init, view, container: document.body})