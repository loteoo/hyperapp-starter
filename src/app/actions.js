// ==================
// Global actions 
// ==================

import {generateUUID} from './utils'

// Sets the new item input value in the state
export const setInputValue = (state, ev) => ({
  ...state,
  inputValue: ev.target.value
})

// Adds a new item in the array
// and resets the input.
export const addItem = (state) => ({
  inputValue: '',
  items: state.items.concat({
    id: generateUUID(),
    value: state.inputValue,
    done: false
  })
})

// Updates the "value" attribute of an item by ID
export const updateItem = (state, id, ev) => ({
  ...state,
  items:  state.items.map(item => 
    id === item.id 
      ? ({...item, value: ev.target.value})
      : item
  )
})

// Inverts the "done" attribute of an item by ID
export const toggleItem = (state, id) => ({
  ...state,
  items:  state.items.map(item => 
    id === item.id 
      ? ({...item, done: !item.done})
      : item
  )
})

// Removes an item in the array by ID
export const deleteItem = (state, id) => ({
  ...state,
  items: state.items.filter(item => id !== item.id)
})