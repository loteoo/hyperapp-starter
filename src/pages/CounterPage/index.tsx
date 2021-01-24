import Button from '/components/ui/Button'

import utils from '/styles/utils.css'

// Initial state
export const init = {
  counter: 0
}

// Actions
const Increment = state => ({ ...state, counter: state.counter + 1 })
const Decrement = state => ({ ...state, counter: state.counter - 1 })

// View
const CounterPage = (state) => (
  <div class={utils.container}>
    <h2>Counter</h2>
    <h1>{state.counter}</h1>
    <Button onclick={Decrement}>-</Button>
    <Button onclick={Increment}>+</Button>
  </div>
)

export default CounterPage
