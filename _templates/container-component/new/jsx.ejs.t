---
to: src/views/<%= h.inflection.camelize(name.replace(/\s/g, '_')) %>/<%= h.inflection.camelize(name.replace(/\s/g, '_')) %>.js
---
import {h} from 'hyperapp'

import './<%= h.inflection.dasherize(name.toLowerCase()) %>.css'

export const <%= h.inflection.camelize(name.replace(/\s/g, '_')) %> = ({title}, children) => (
  <div class="<%= h.inflection.dasherize(name.toLowerCase()) %>" key="<%= h.inflection.dasherize(name.toLowerCase()) %>">
    <h2>{title}</h2>
    <div class="inner">
      {children}
    </div>
  </div>
)

// import {<%= h.inflection.camelize(name.replace(/\s/g, '_')) %>} from './<%= h.inflection.camelize(name.replace(/\s/g, '_')) %>/<%= h.inflection.camelize(name.replace(/\s/g, '_')) %>.js'
// <<%= h.inflection.camelize(name.replace(/\s/g, '_')) %> title="Container component" >
//   <p>Child content within the component</p>
// </<%= h.inflection.camelize(name.replace(/\s/g, '_')) %>>
