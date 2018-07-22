---
to: src/views/<%= h.inflection.camelize(name.replace(/\s/g, '_')) %>/<%= h.inflection.camelize(name.replace(/\s/g, '_')) %>.js
---

import {h} from 'hyperapp'

import './<%= h.inflection.dasherize(name.toLowerCase()) %>.css'

const update<%= h.inflection.camelize(name.replace(/\s/g, '_')) %> = ({value}) => state => ({
  ...state,
  mySomethingForm: {
    ...state.mySomethingForm,
    value
  }
})

export const <%= h.inflection.camelize(name.replace(/\s/g, '_')) %> = ({mySomethingForm}) => (state, actions) => (
  <form class="<%= h.inflection.dasherize(name.toLowerCase()) %>" key="<%= h.inflection.dasherize(name.toLowerCase()) %>" method="post">
    <h2>My new <%= name %> form component with namespaced state!</h2>
    <p>Full name: {mySomethingForm.firstName} {mySomethingForm.lastName}</p>
    <input type="text" name="firstName" oninput={ev => update<%= h.inflection.camelize(name.replace(/\s/g, '_')) %>({firstName: ev.target.value})} />
    <input type="text" name="lastName" oninput={ev => update<%= h.inflection.camelize(name.replace(/\s/g, '_')) %>({lastName: ev.target.value})} />
  </form>
)