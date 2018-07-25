---
to: src/views/<%= h.inflection.camelize(name.replace(/\s/g, '_')) %>/<%= h.inflection.dasherize(name.toLowerCase()) %>.css
---
.<%= h.inflection.dasherize(name.toLowerCase()) %> {
  max-width: 420px;
  margin: 0 auto;
  button {
    width: 2rem;
    height: 2rem;
  }
}
 