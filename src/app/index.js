// App dependencies
import {app} from '../lib/hyperappv2.js'
import {state} from './state'
import {actions} from './actions'
import {view} from './view'

import * as Http from "@hyperapp/http"


app({
  init: [
    state,
    <Http.fetch
      url={"https://api.github.com/orgs/hyperapp/repos"}
      action={Populate}
    />
  ],
  view,
  container: document.body
})