// Bundle css for this view
import 'sanitize.css'
import './global.css'

// Import dependencies
import {h} from 'hyperapp'
import {TestTest} from './TestTest/TestTest.js'
import {Counter} from './Counter/Counter.js'

// Root view
export const view = (state, actions) => (
  <main>
    <h1>Hyperapp!</h1>
    <p>State: </p>
    <pre>{JSON.stringify(state, null, 2)}</pre>

    <TestTest title="Container component" >
      <p>Child content within the component</p>
    </TestTest>

    <Counter {...state.counter} />
  </main>
)
