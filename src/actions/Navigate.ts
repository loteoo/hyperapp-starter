import navigate from "/src/effects/navigate";

const Navigate = (state, href) => [
  state,
  navigate(href)
]

export default Navigate
