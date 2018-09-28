import {getStateFromStorage} from './utils'

// Initial state of the app
export const state = getStateFromStorage() || {
  inputValue: '',
  items: []
}
