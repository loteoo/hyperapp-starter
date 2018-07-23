import {h} from 'hyperapp'

// Bundle css for this view
import 'sanitize.css'
import './global.css'

import {TestTest} from './TestTest/TestTest'

// Root view
export const view = (state, actions) => (
  <main>
    <h1>Hyperapp!</h1>
    <TestTest />
  </main>
)
