import {h} from 'hyperapp'

// Bundle css for this view
import 'sanitize.css'
import './global.css'

// Root view
export const view = (state, actions) => (
  <main>
    <h1>Hyperapp!</h1>
    <pre>{JSON.stringify(state, null, 2)}</pre>
  </main>
)
