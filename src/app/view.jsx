import { SetA, SetB } from './actions'

const decodeInput = event => parseInt(event.target.value || 0)

const container = {
  maxWidth: '768px',
  margin: '3rem auto'
}

// Root application view
export default state => (
  <main style={container}>
    <h1>Do more with less</h1>
    <input type="number" value={state.a} oninput={[SetA, decodeInput]} />
    <input type="number" value={state.b} oninput={[SetB, decodeInput]} />
    <h2>{state.a} + {state.b} = {state.a + state.b}</h2>
    <pre><code>state: {JSON.stringify(state, null, 2)}</code></pre>
  </main>
)
