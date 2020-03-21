import { SetA, SetB } from '/actions'
import { decodeNumberInput } from '/utils'
import utils from '/styles/utils.css'

// Root application view
export default state => (
  <main class={utils.container}>
    <h1>Do more with less</h1>
    <div className={utils.grid}>
      <input
        type="number"
        value={state.a}
        oninput={[SetA, decodeNumberInput]}
      />
      <input
        type="number"
        value={state.b}
        oninput={[SetB, decodeNumberInput]}
      />
    </div>
    <h2>
      {state.a} + {state.b} = {state.a + state.b}
    </h2>
    <pre>
      <code>state: {JSON.stringify(state, null, 2)}</code>
    </pre>
  </main>
)
