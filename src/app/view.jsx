// Bundle css for this view
import 'sanitize.css'
import './style.css'

import {h} from '../lib/hyperappv2.js'
import {setInputValue, addItem, updateItem, toggleItem, deleteItem} from './actions'

// Root view
export const view = state => (
  <main>
    <h1>Hyperapp 2.0!</h1>
    <p>1 kB JavaScript micro-framework for building declarative web applications</p>
    <h4>Todo items:</h4>
    <ul>
      {state.items.map(item => <Item {...item} />)}
    </ul>
    <b>Total: {state.items.length}</b>
    <br/>
    <input type="text" value={state.inputValue} oninput={setInputValue} />
    <button onclick={addItem} disabled={!state.inputValue}>New item</button>
    <h4>State: </h4>
    <pre>{JSON.stringify(state, null, 2)}</pre>
  </main>
)


// Item component
const Item = ({id, value, done}) => (
  <li key={id}>
    <input type="text" value={value} oninput={[updateItem, id]} disabled={done} />
    <button onclick={[deleteItem, id]}>Delete</button>
    <button onclick={[toggleItem, id]}>{done ? 'Uncheck' : 'Check'}</button>
  </li>
)