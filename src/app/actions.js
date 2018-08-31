
import {location} from '@hyperapp/router'

// Global actions for the app
export const actions = {

  // Router actions
  location: location.actions,

  // Set or replace first-level props
  set: fragment => fragment,

  // Called at startup
  init: () => {
    // Subscribe to the router
    window.unsubscribeRouter = location.subscribe(window.main.location)
  }
}
