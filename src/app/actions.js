// ==================
// Global actions
// ==================

// Sets the a value to the given key in the state
export const SetValue = (state, key, ev) => ({
  ...state,
  [key]: ev.target.value
})