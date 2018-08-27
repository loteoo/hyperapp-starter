---
to: src/views/<%= h.inflection.camelize(name.replace(/\s/g, '_')) %>/<%= h.inflection.dasherize(name.toLowerCase()) %>.css
---
.<%= h.inflection.dasherize(name.toLowerCase()) %> {
  max-width: 24rem;
  margin: 1rem auto;
  padding: 1rem;
  border: 1px solid var(--border-color);
  border-radius: 0.2rem;
  >.inner {
    border: 1px solid var(--border-color);
    border-radius: 0.2rem;
    padding: 1rem;
  }
}
