import Input from '/src/components/ui/Input'
import utils from '/src/styles/utils.module.css'

// Initial state
export const init = {
  a: 1,
  b: 2
}

// Actions
const SetA = (state, ev) => ({ ...state, a: Number(ev.target.value) })
const SetB = (state, ev) => ({ ...state, b: Number(ev.target.value) })

// View
const HomePage = (state) => (
  <div class={utils.container}>
    <h1>👋 Welcome to hyperapp</h1>
    <div class={utils.grid}>
      <Input type="number" name="a" value={state.a} onchange={SetA} />
      <Input type="number" name="b" value={state.b} onchange={SetB} />
    </div>
    <h2>
      {state.a} + {state.b} = {state.a + state.b}
    </h2>
  </div>
)

export default HomePage
