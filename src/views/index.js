import {h} from 'hyperapp'
import {Link, Route, Switch, Redirect, location} from '@hyperapp/router'

// Bundle css for this view
import 'normalize.css'
import './global.css'


// Root view
export const view = (state, actions) => (
  <main>
    <h1>Hyperapp!</h1>
  </main>
)
