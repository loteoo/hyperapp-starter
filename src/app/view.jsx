// Bundle css for this view
import 'sanitize.css'
import './style.css'

// Import dependencies
import {h} from 'hyperapp'

// Root view
export const view = (state, actions) => (
  <main>
    <h1>Hyperapp!</h1>
    <h4>State: </h4>
    <pre>{JSON.stringify(state, null, 2)}</pre>
  </main>
)
