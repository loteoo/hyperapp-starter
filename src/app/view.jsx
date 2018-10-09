// Bundle css for this view
import 'sanitize.css'
import './style.css'

import {h} from 'hyperapp'

// Import actions
import {setInputValue} from './actions'

// Root view
export const view = state => (
  <div className="app">
    <header>
      <div className="container">
        <h1>{state.inputValue}</h1>
        <p>1 kB JavaScript micro-framework for building declarative web applications</p>
      </div>
    </header>
    <main>
      <div className="container">
        <input type="text" value={state.inputValue} oninput={setInputValue} />
        <h4>State: </h4>
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </div>
    </main>
  </div>
)
