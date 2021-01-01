export const preventDefault = (action) => (state, ev) => {
  ev.preventDefault();
  return action(state, ev)
}
