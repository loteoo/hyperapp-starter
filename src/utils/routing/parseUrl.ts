import parseQueryString from './parseQueryString'

const parseUrl = (url: string) => {
  const [path, queryString] = url.split('?')
  return {
    path,
    query: parseQueryString(queryString),
  }
}

export default parseUrl
