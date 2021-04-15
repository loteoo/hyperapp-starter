import parseUrl from "/src/utils/parseUrl"

const LocationChange = ({ location: _, ...state }, pathname) => ({
  location: parseUrl(pathname),
  ...state,
})

export default LocationChange
