import {h} from 'hyperapp'

// Import actions
import {SetValue} from './actions'

// Root view
export default state => (
  <div class="app">
    <header>
      <div class="container">
        <h1>{state.title}</h1>
        <p>{state.description}</p>
      </div>
    </header>
    <main>
      <div class="container">
        <input type="text" value={state.title} oninput={[SetValue, 'title']} />
        <input type="text" value={state.description} oninput={[SetValue, 'description']} />
        <h4>State: </h4>
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </div>
    </main>
  </div>
)
