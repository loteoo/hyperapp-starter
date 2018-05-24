import {location} from "@hyperapp/router"
import deepmerge from 'deepmerge'
import {dontMerge} from '../utils/'

export const actions = {
  location: location.actions,
  update: fragment => state => deepmerge(state, fragment, {arrayMerge: dontMerge}),
  set: fragment => fragment
}
