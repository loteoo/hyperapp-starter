---
to: src/views/<%= h.inflection.camelize(name.replace(/\s/g, '_')) %>/<%= h.inflection.camelize(name.replace(/\s/g, '_')) %>.js
---

import {h} from 'hyperapp'

import './<%= h.inflection.dasherize(name.toLowerCase()) %>.css'

const update<%= h.inflection.camelize(name.replace(/\s/g, '_')) %> = fragment => (state, actions) => actions.set(Object.assign({}, state, {
  <%= h.inflection.camelize(name.replace(/\s/g, '_'), true) %>: Object.assign({}, state.<%= h.inflection.camelize(name.replace(/\s/g, '_'), true) %>, fragment)
}))

const init = {
  count: 0
}

const up = (state, actions, {count} = state.<%= h.inflection.camelize(name.replace(/\s/g, '_'), true) %> || init) =>
  update<%= h.inflection.camelize(name.replace(/\s/g, '_')) %>({count: count + 1})(state, actions)

const down = (state, actions, {count} = state.<%= h.inflection.camelize(name.replace(/\s/g, '_'), true) %> || init) =>
  update<%= h.inflection.camelize(name.replace(/\s/g, '_')) %>({count: count - 1})(state, actions)

export const <%= h.inflection.camelize(name.replace(/\s/g, '_')) %> = () => (state, actions, {count} = state.<%= h.inflection.camelize(name.replace(/\s/g, '_'), true) %> || init) => (
  <div class="<%= h.inflection.dasherize(name.toLowerCase()) %>" key="<%= h.inflection.dasherize(name.toLowerCase()) %>">
    <h2><%= name %> component with a namespaced state<br/> within the global state!</h2>
    <p>{count}</p>
    <button onclick={() => up(state, actions)}>UP</button>
    <button onclick={() => down(state, actions)}>DOWN</button>
  </div>
)