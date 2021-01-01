import { SetA, SetB } from '/actions'
import Input from '/components/ui/Input'
import utils from '/styles/utils.css'

export const initialState = {
  a: 1,
  b: 2
}

const HomePage = () => (state) => (
  <div class={utils.container}>
    <h1>Parcel + hyperapp = 💖</h1>
    <div class={utils.grid}>
      <Input type="number" name="a" value={state.a} onchange={SetA} />
      <Input type="number" name="b" value={state.b} onchange={SetB} />
    </div>
    <h2>
      {state.a} + {state.b} = {state.a + state.b}
    </h2>
    <pre>
      <code>{`state: ${JSON.stringify(state, null, 2)}`}</code>
    </pre>
  </div>
)

export default HomePage
