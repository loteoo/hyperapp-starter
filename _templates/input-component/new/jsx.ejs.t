---
to: src/views/<%= h.inflection.camelize(name.replace(/\s/g, '_')) %>/<%= h.inflection.camelize(name.replace(/\s/g, '_')) %>.js
---
import {h} from 'hyperapp'
import cc from 'classcat'

import './<%= h.inflection.dasherize(name.toLowerCase()) %>.css'

export const <%= h.inflection.camelize(name.replace(/\s/g, '_')) %> = (props, children, {label = label || 'Label', name = name || 'name', type = type || 'text', placeholder = placeholder || ' ', setter} = props) => (
  <div class={cc(['<%= h.inflection.dasherize(name.toLowerCase()) %>', name])} key={name}>
    <input type={type} name={name} id={name} placeholder={placeholder} oninput={ev => setter({[name]: ev.target.value})} {...props} setter={null} />
    <label for={name}>{label}</label>
  </div>
)

// import {<%= h.inflection.camelize(name.replace(/\s/g, '_')) %>} from './<%= h.inflection.camelize(name.replace(/\s/g, '_')) %>/<%= h.inflection.camelize(name.replace(/\s/g, '_')) %>.js'
// <<%= h.inflection.camelize(name.replace(/\s/g, '_')) %> label="First name" name="first_name" setter={set} />
