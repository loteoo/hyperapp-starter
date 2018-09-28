// Bundle css for this view
import 'sanitize.css'
import './style.css'

// Import dependencies
import {h} from '../lib/hyperappv2.js'

// Root view
export const view = state => (
  <main>
    <h1>Hyperapp!</h1>
    <h4>State: </h4>
    <pre>{JSON.stringify(state, null, 2)}</pre>
  </main>
)
