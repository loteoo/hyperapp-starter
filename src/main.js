import {app} from 'hyperapp'
import {location} from "@hyperapp/router"
import {state} from './state/'
import {actions} from './actions/'
import {view} from './views/'

import 'normalize.css'
import './style.css'

// Start hyperapp
window.main = app(state, actions, view, document.body);

// Activate our router
const unsubscribe = location.subscribe(main.location);
