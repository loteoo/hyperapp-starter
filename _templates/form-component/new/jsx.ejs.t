---
to: src/views/<%= h.inflection.camelize(name.replace(/\s/g, '_')) %>/<%= h.inflection.camelize(name.replace(/\s/g, '_')) %>.js
---

import {h} from 'hyperapp'

import './<%= h.inflection.dasherize(name.toLowerCase()) %>.css'

const update<%= h.inflection.camelize(name.replace(/\s/g, '_')) %> = fragment => (state, actions) => Object.assign({}, state, {
  <%= h.inflection.camelize(name.replace(/\s/g, '_'), true) %>: Object.assign({}, state.<%= h.inflection.camelize(name.replace(/\s/g, '_'), true) %>, fragment)
})




export const <%= h.inflection.camelize(name.replace(/\s/g, '_')) %> = () => (state, actions, {firstName, lastName} = state.<%= h.inflection.camelize(name.replace(/\s/g, '_'), true) || {} %>) => (
  <form class="<%= h.inflection.dasherize(name.toLowerCase()) %>" key="<%= h.inflection.dasherize(name.toLowerCase()) %>" method="post">
    <h2>My new <%= name %> form component with namespaced state!</h2>
    <p>Full name: {firstName} {lastName}</p>
    <input type="text" name="firstName" oninput={ev => update<%= h.inflection.camelize(name.replace(/\s/g, '_')) %>({firstName: ev.target.value})} />
    <input type="text" name="lastName" oninput={ev => update<%= h.inflection.camelize(name.replace(/\s/g, '_')) %>({lastName: ev.target.value})} />
  </form>
)