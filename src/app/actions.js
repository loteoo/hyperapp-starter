// ==================
// Global actions 
// ==================


// Sets the new item input value in the state
export const setInputValue = (state, ev) => ({
  ...state,
  inputValue: ev.target.value
})
