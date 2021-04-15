import fx from '/src/utils/fx'

export const navigate = fx((dispatch, to) => {
  history.pushState(null, '', to)
  dispatchEvent(new CustomEvent("pushstate"))
})
