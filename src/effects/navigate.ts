const navigateFx = (dispatch, to) => {
  history.pushState(null, '', to)
  dispatchEvent(new CustomEvent("pushstate"))
}

const navigate = (to) => [navigateFx, to]

export default navigate
