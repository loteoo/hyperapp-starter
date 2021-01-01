import { LocationChange } from './actions'
import { onRouteChanged } from './subs'

const withLocation = (app) => ({ init, subscriptions = (_s) => [], ...rest }) => {
  return app({
    ...rest,
    init: LocationChange(init, window.location.pathname + window.location.search),
    subscriptions: (state) => [
      ...subscriptions(state),
      onRouteChanged(LocationChange)
    ]
  })
}

export default withLocation
