---
to: src/views/<%= h.inflection.camelize(name.replace(/\s/g, '_')) %>/<%= h.inflection.camelize(name.replace(/\s/g, '_')) %>.js
---

import {h} from 'hyperapp'

import './<%= h.inflection.dasherize(name.toLowerCase()) %>.css'

// Namespaced setter action
const set = fragment => (state, actions) => actions.update({<%= h.inflection.camelize(name.replace(/\s/g, '_'), true) %>: fragment})


const init = {
  count: 0
}

const up = (state, actions, {count} = state.<%= h.inflection.camelize(name.replace(/\s/g, '_'), true) %> || init) =>
  set({count: count + 1})(state, actions)

const down = (state, actions, {count} = state.<%= h.inflection.camelize(name.replace(/\s/g, '_'), true) %> || init) =>
  set({count: count - 1})(state, actions)

export const <%= h.inflection.camelize(name.replace(/\s/g, '_')) %> = () => (state, actions, {count} = state.<%= h.inflection.camelize(name.replace(/\s/g, '_'), true) %> || init) => (
  <div class="<%= h.inflection.dasherize(name.toLowerCase()) %>" key="<%= h.inflection.dasherize(name.toLowerCase()) %>">
    <h2><%= name %> component with a namespaced state<br/> within the global state!</h2>
    <p>{count}</p>
    <button onclick={() => up(state, actions)}>UP</button>
    <button onclick={() => down(state, actions)}>DOWN</button>
  </div>
)


// import {<%= h.inflection.camelize(name.replace(/\s/g, '_')) %>} from './<%= h.inflection.camelize(name.replace(/\s/g, '_')) %>/<%= h.inflection.camelize(name.replace(/\s/g, '_')) %>.js'
// <<%= h.inflection.camelize(name.replace(/\s/g, '_')) %> {...state.<%= h.inflection.camelize(name.replace(/\s/g, '_'), true) %>} />