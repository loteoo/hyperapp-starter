import {location} from '@hyperapp/router'
import deepmerge from 'deepmerge'
import {dontMerge} from '../utils/'

export const actions = {
  // Router actions
  location: location.actions,

  // Update/set deeply nested properties. Arrays are replaced by the new ones
  update: fragment => state =>
    deepmerge(state, fragment, {arrayMerge: dontMerge}),

  // Set or replace first-level props
  set: fragment => fragment,

  // Called at startup
  init: () => {
    // Subscribe to the router
    window.unsubscribeRouter = location.subscribe(window.main.location)
  }
}
