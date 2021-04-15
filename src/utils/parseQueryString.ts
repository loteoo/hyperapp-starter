const parseQueryString = (qs?: string) => {
  return qs ? Object.fromEntries(new URLSearchParams(qs)) : {}
}

export default parseQueryString
