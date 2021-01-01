import parseUrl from './parseUrl';

export const LocationChange = ({ location: _, ...state }, pathname) => ({
  location: parseUrl(pathname),
  ...state,
})

