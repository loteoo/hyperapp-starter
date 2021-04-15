import { Subscription } from 'hyperapp'

const onRouteChangedFx = (dispatch, action) => {
  const handleLocationChange = () => {
    dispatch([action, window.location.pathname + window.location.search])
  }
  addEventListener('pushstate', handleLocationChange)
  addEventListener('popstate', handleLocationChange)
  return () => {
    removeEventListener('pushstate', handleLocationChange)
    removeEventListener('popstate', handleLocationChange)
  }
}

const onRouteChanged = (action): Subscription<any> => [
  onRouteChangedFx,
  action
]

export default onRouteChanged
