// Bundle css for this view
import 'sanitize.css'
import './style.css'

// Import dependencies
import {h} from '../lib/hyperappv2.js'

import {setInputValue, addItem, updateItem, toggleItem, deleteItem} from './actions'


// Root view
export const view = state => (
  <main>
    <h1>Hyperapp 2.0!</h1>
    <h4>Todo items:</h4>
    <ul>
      {state.items.map(item => <Item {...item} />)}
    </ul>
    <br/>
    <input type="text" value={state.inputValue} oninput={setInputValue} />
    <button onclick={addItem}>Add</button>
    <h4>State: </h4>
    <pre>{JSON.stringify(state, null, 2)}</pre>
  </main>
)



const Item = ({id, value, done}) => (
  <li>
    <input type="text" value={value} oninput={[updateItem, id]} disabled={done} />
    <button onclick={[deleteItem, id]}>Delete</button>
    <button onclick={[toggleItem, id]}>{done ? 'Uncheck' : 'Check'}</button>
  </li>
)