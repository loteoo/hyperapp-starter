---
to: src/views/<%= h.inflection.camelize(name.replace(/\s/g, '_')) %>/<%= h.inflection.camelize(name.replace(/\s/g, '_')) %>.js
---
import {h} from 'hyperapp'

import './<%= h.inflection.dasherize(name.toLowerCase()) %>.css'

export const <%= h.inflection.camelize(name.replace(/\s/g, '_')) %> = () => (
  <div class="<%= h.inflection.dasherize(name.toLowerCase()) %>" key="<%= h.inflection.dasherize(name.toLowerCase()) %>">
    My new <%= name %> stateless component!
  </div>
)

// import {<%= h.inflection.camelize(name.replace(/\s/g, '_')) %>} from './<%= h.inflection.camelize(name.replace(/\s/g, '_')) %>/<%= h.inflection.camelize(name.replace(/\s/g, '_')) %>.js'
// <<%= h.inflection.camelize(name.replace(/\s/g, '_')) %> {...state.<%= h.inflection.camelize(name.replace(/\s/g, '_'), true) %>} />
