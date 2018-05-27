// App dependencies
import {app} from 'hyperapp'
import {location} from '@hyperapp/router'
import {state} from './state/'
import {actions} from './actions/'
import {view} from './views/'


// Dev dependencies
import freeze from 'hyperapp-freeze'
import devtools from 'hyperapp-devtools'


// Start with training wheels and an awesome devtools panel
window.main = freeze(devtools)(app)(state, actions, view, document.body);
window.main.init();


console.group('%c[Development build]', 'color: blue; font-size: 16px;');
console.log('Use %c\'npm run build\'%c to build for prod.', 'color: blue; font-size: 14px;', 'color: black;');
console.groupEnd();
