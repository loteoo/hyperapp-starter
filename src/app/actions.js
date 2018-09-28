// Global actions for the app
import {generateUUID} from './utils'

export const setInputValue = (state, ev) => ({
  ...state,
  inputValue: ev.target.value
})

export const addItem = (state) => ({
  inputValue: '',
  items: state.items.concat({
    id: generateUUID(),
    value: state.inputValue,
    done: false
  })
})

export const updateItem = (state, id, ev) => ({
  ...state,
  items:  state.items.map(item => 
    id === item.id 
      ? ({...item, value: ev.target.value})
      : item
  )
})

export const toggleItem = (state, id) => ({
  ...state,
  items:  state.items.map(item => 
    id === item.id 
      ? ({...item, done: !item.done})
      : item
  )
})

export const deleteItem = (state, id) => ({
  ...state,
  items: state.items.filter(item => id !== item.id)
})