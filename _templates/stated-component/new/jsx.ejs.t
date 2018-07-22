---
to: src/views/<%= h.inflection.camelize(name.replace(/\s/g, '_')) %>/<%= h.inflection.camelize(name.replace(/\s/g, '_')) %>.js
---

import {h} from 'hyperapp'

import './<%= h.inflection.dasherize(name.toLowerCase()) %>.css'

const update<%= h.inflection.camelize(name.replace(/\s/g, '_')) %> = ({value}) => state => ({
  ...state,
  myComponent: {
    ...state.myComponent,
    value
  }
})


const up = () => state => update<%= h.inflection.camelize(name.replace(/\s/g, '_')) %>({count: state.myComponent.count + 1})
const down = () => state => update<%= h.inflection.camelize(name.replace(/\s/g, '_')) %>({count: state.myComponent.count - 1})

export const <%= h.inflection.camelize(name.replace(/\s/g, '_')) %> = ({myComponent}) => (state, actions) => (
  <div class="<%= h.inflection.dasherize(name.toLowerCase()) %>" key="<%= h.inflection.dasherize(name.toLowerCase()) %>">
    <h2>My new <%= name %> component with namespaced state!</h2>
    <p>{myComponent.count}</p>
    <button onclick={up}>UP</button>
    <button onclick={down}>DOWN<button>
  </div>
)