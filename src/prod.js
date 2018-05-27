// App dependencies
import {app} from 'hyperapp'
import {location} from '@hyperapp/router'
import {state} from './state/'
import {actions} from './actions/'
import {view} from './views/'


// Start the Hyperapp app
window.main = app(state, actions, view, document.body);
window.main.init();
